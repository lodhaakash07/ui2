import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../providers/token-service';
import { Angular2TokenService } from 'angular2-token';
import { ResponseUtility } from '../../providers/response-utility';
import { Config } from '../../providers/config';
import { LoginProvider } from '../../providers/login-provider';
import { UserApi } from '../../providers/user-api';
import { UserForm } from '../users/user-form';
import { PasswordReset } from './password-reset';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../users/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  // email: any = "thimmaiah@gmail.com";
  //password: any = "thimmaiah@gmail.com";

  //email: any = "admin@ubernurse.com";
  //password: any = "admin@ubernurse.com";

  email: any;
  password: any;


  slideOneForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public respUtility: ResponseUtility,
    public loadingController: LoadingController,
    private tokenService: Angular2TokenService,
    private config: Config,
    private loginProvider: LoginProvider,
    private userApi: UserApi,
    private storage: Storage) {


    this.slideOneForm = formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    this.respUtility.trackView("Login");
  }

  login() {
    this.respUtility.trackEvent("User", "Login", "click");
    this.loginProvider.login(this.email, this.password, this.navCtrl);
  }

  register() {
    this.respUtility.trackEvent("User", "Register", "click");
    this.navCtrl.push(RegisterPage);
  }

  resendConfirmationEmail() {
    this.respUtility.trackEvent("User", "ResendConfirmation", "click");
    if (this.email != null) {
      this.userApi.resendConfirmationEmail(this.email).subscribe(
        res => {
          console.log(res);
          if (res["sent"] == true) {
            this.respUtility.showSuccess("Confirmation email sent. Please check your inbox.");
          } else {
            if (res["user_not_found"] == true) {
              this.respUtility.showWarning("Email specified above was not found in our system. Please register.");
            } else {
              this.respUtility.showWarning("Confirmation email not sent. Please contact us.");
            }
          }
        },
        error => this.respUtility.showFailure(error)
      );
    } else {
      this.respUtility.showWarning("Please enter a valid email above.");
    }

  }

  forgotPassword() {
    this.respUtility.trackEvent("User", "ForgotPassword", "click");
    if (this.email != null) {
      this.tokenService.resetPassword({ email: this.email }).subscribe(
        res => {
          console.log(res);
          let body = JSON.parse(res["_body"]);
          console.log(body["message"]);
          this.respUtility.showMsg(body["message"]);
          this.navCtrl.push(PasswordReset)
        },
        error => this.respUtility.showFailure(error)
      );
    } else {
      this.respUtility.showWarning("Please enter a valid email above.");
    }
  }
}
