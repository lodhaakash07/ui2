webpackJsonp([1],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_form__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetails = /** @class */ (function () {
    function UserDetails(navCtrl, navParams, userApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userApi = userApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.user = this.navParams.data;
    }
    UserDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter UserDetails');
        this.respUtility.trackView("UserDetails");
        // Always reload the user from the server for a fresh copy
        this.loadUser();
    };
    UserDetails.prototype.editUser = function (user) {
        this.respUtility.trackEvent("User", "Edit", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__users_user_form__["a" /* UserForm */], user);
    };
    UserDetails.prototype.loadUser = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading User...'
        });
        loader.present();
        this.userApi.getUserDetails(this.user.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded User");
            _this.user = response;
            console.log("Loaded user");
            console.log(_this.user);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    UserDetails.prototype.deactivateUser = function (user) {
        var _this = this;
        this.respUtility.trackEvent("User", "Deactivate", "click");
        var loader = this.loadingController.create({
            content: 'Deactivating User...'
        });
        user.active = false;
        loader.present();
        this.userApi.updateUser(user).subscribe(function (response) {
            _this.respUtility.showSuccess("Deactivated User");
            _this.navCtrl.pop();
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    UserDetails.prototype.confirmDeactivate = function (user) {
        this.respUtility.confirmAction(this.deactivateUser.bind(this), user, "Deactivate User. Confirm?");
    };
    UserDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/users/user-details.html"*/'<!--\n  Generated template for the UserDetails page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>User Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div>\n\n    <button ion-item (click)="editUser(user)">\n      {{user.title}} {{user.first_name}} {{user.last_name}}\n      <p>\n        Phone: {{user.phone}}\n      </p>\n      <p>\n        Email: {{user.email}}\n      </p>\n       <p> \n        Role: {{user.role}}\n      </p>\n      <p> \n        Birth Year: {{user.birth_year}}\n      </p>\n\n      <div *ngIf="user.role == \'Coach\'">\n      \n      </div>\n\n    </button>\n\n    <ion-row>\n\n      <ion-col>\n        <button ion-button full color="secondary" (click)="editUser(user)">Edit User Details</button>\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n  <ion-card>\n\n\n    <ion-card-content *ngIf="user.role == \'Care Giver\' || user.role == \'Nurse\'">\n\n      <ion-list>\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/users/user-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_api__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__["a" /* ResponseUtility */]])
    ], UserDetails);
    return UserDetails;
}());

//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessTestApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FitnessTestApi = /** @class */ (function () {
    function FitnessTestApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url_target = "targets";
        this.base_url = "fitness_tests";
        this.fitness_tests = [];
        this.fitness_test = {};
        this.targets = [];
        console.log('FitnessTestApi Provider Created');
    }
    FitnessTestApi.prototype.getFitnessTests = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + ".json").map(function (response) {
            _this.fitness_tests = response.json();
            return _this.fitness_tests;
        });
    };
    FitnessTestApi.prototype.getFitnessTestDetails = function (fitness_test_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + fitness_test_id + ".json").map(function (response) {
            _this.fitness_test = response.json();
            return _this.fitness_test;
        });
    };
    FitnessTestApi.prototype.getTargetDetails = function () {
        var _this = this;
        return this.tokenService.get(this.base_url_target + ".json").map(function (response) {
            _this.targets = response.json();
            return _this.targets;
        });
    };
    FitnessTestApi.prototype.createFitnessTest = function (fitness_test) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", fitness_test).map(function (response) {
            _this.fitness_test = response.json();
            return _this.fitness_test;
            //return response.status;
        });
    };
    FitnessTestApi.prototype.updateFitnessTest = function (fitness_test) {
        var _this = this;
        console.log("FitnessTestApi: Updating fitness_test");
        console.log(fitness_test);
        return this.tokenService.put(this.base_url + "/" + fitness_test.id + ".json", fitness_test).map(function (response) {
            _this.fitness_test = response.json();
            return _this.fitness_test;
        });
    };
    FitnessTestApi.prototype.deleteFitnessTest = function (fitness_test) {
        return this.tokenService.delete(this.base_url + "/" + fitness_test.id + ".json").map(function (response) {
            return response.status;
        });
    };
    FitnessTestApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], FitnessTestApi);
    return FitnessTestApi;
}());

//# sourceMappingURL=fitness-test-api.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutApi = /** @class */ (function () {
    function WorkoutApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url = "workouts";
        this.workouts = [];
        this.workout = {};
        console.log('WorkoutApi Provider Created');
    }
    WorkoutApi.prototype.getWorkouts = function (fitness_test_id) {
        var _this = this;
        var endpoint = this.base_url + ".json";
        if (fitness_test_id) {
            endpoint = this.base_url + ".json?fitness_test_id=" + fitness_test_id;
        }
        return this.tokenService.get(endpoint).map(function (response) {
            _this.workouts = response.json();
            return _this.workouts;
        });
    };
    WorkoutApi.prototype.getWorkoutDetails = function (workout_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + workout_id + ".json").map(function (response) {
            _this.workout = response.json();
            return _this.workout;
        });
    };
    WorkoutApi.prototype.createWorkout = function (workout) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", workout).map(function (response) {
            _this.workout = response.json();
            return _this.workout;
            //return response.status;
        });
    };
    WorkoutApi.prototype.updateWorkout = function (workout) {
        var _this = this;
        console.log("WorkoutApi: Updating workout");
        console.log(workout);
        return this.tokenService.put(this.base_url + "/" + workout.id + ".json", workout).map(function (response) {
            _this.workout = response.json();
            return _this.workout;
        });
    };
    WorkoutApi.prototype.deleteWorkout = function (workout) {
        return this.tokenService.delete(this.base_url + "/" + workout.id + ".json").map(function (response) {
            return response.status;
        });
    };
    WorkoutApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], WorkoutApi);
    return WorkoutApi;
}());

//# sourceMappingURL=workout-api.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodLogs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food_log_form__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_food_log_api__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodLogs = /** @class */ (function () {
    function FoodLogs(navCtrl, navParams, loadingController, food_logApi, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.food_logApi = food_logApi;
        this.respUtility = respUtility;
        this.current_day = 0;
        this.current_date = __WEBPACK_IMPORTED_MODULE_5_moment___default()();
    }
    FoodLogs.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter FoodLogs');
        this.getFoodLogs(0);
    };
    FoodLogs.prototype.getFoodLogs = function (day) {
        var _this = this;
        this.current_day = this.current_day + day;
        if (this.current_day >= 0) {
            this.current_date = __WEBPACK_IMPORTED_MODULE_5_moment___default()().add(this.current_day, 'days');
        }
        else {
            this.current_date = __WEBPACK_IMPORTED_MODULE_5_moment___default()().subtract(this.current_day * -1, 'days');
        }
        console.log("current_date = ", this.current_date, this.current_day);
        this.respUtility.trackView("FoodLogs");
        var loader = this.loadingController.create({
            content: 'Loading FoodLogs..'
        });
        loader.present();
        this.food_logApi.getFoodLogs(this.current_day).subscribe(function (food_logs) {
            _this.food_logs = food_logs;
            console.log("Loaded food_logs");
            console.log(food_logs);
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
    };
    FoodLogs.prototype.getFoodLogDetails = function (food_log) {
        this.respUtility.trackEvent("FoodLog", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__food_log_form__["a" /* FoodLogForm */], food_log);
    };
    FoodLogs.prototype.newFoodLog = function () {
        this.respUtility.trackEvent("FoodLog", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__food_log_form__["a" /* FoodLogForm */], { intake_date: __WEBPACK_IMPORTED_MODULE_5_moment___default()().format('YYYY-MM-DDTHH:mm') });
    };
    FoodLogs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'food-logs',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/food-logs/food-logs.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Food Log: {{current_date | date: "EEE dd MMM yy"}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <button ion-item *ngFor="let food_log of food_logs" (click)=getFoodLogDetails(food_log)>\n\n      <ion-item-divider text-wrap color="secondary">{{food_log.meal}}</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{food_log.intake_date | date: "dd/MM/yy HH:mm"}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-wrap>\n            {{food_log.details}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </button>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="newFoodLog()">+</button>\n  </ion-fab>\n\n  <ion-row bottom>\n    <ion-col>\n      <button ion-button full color="secondary" (click)="getFoodLogs(-1)">< Prev Day</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button full color="primary" (click)="getFoodLogs(1)">Next Day></button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/food-logs/food-logs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_food_log_api__["a" /* FoodLogApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], FoodLogs);
    return FoodLogs;
}());

//# sourceMappingURL=food-logs.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_schedule_api__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScheduleForm = /** @class */ (function () {
    function ScheduleForm(navCtrl, navParams, formBuilder, scheduleApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.scheduleApi = scheduleApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.submitAttempt = false;
        this.schedule = this.navParams.data;
        console.log(this.schedule);
        this.slideOneForm = formBuilder.group({
            rating: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            comments: [],
        });
    }
    ScheduleForm.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScheduleForm');
        this.respUtility.trackView("ScheduleForm");
    };
    ScheduleForm.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("Schedule", "Save", "click");
        this.submitAttempt = true;
        //console.log(this.schedule);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        if (this.slideOneForm.invalid) {
            //this.signupSlider.slideTo(0);
            console.log("Invalid form ", this.slideOneForm.errors);
        }
        else {
            this.submitAttempt = false;
            loader.present().then(function () {
                if (_this.schedule["id"]) {
                    _this.scheduleApi.updateSchedule(_this.schedule).subscribe(function (schedule) {
                        _this.respUtility.showSuccess('Schedule saved successfully.');
                        _this.navCtrl.pop();
                    }, function (error) {
                        _this.respUtility.showFailure(error);
                        loader.dismiss();
                    }, function () { loader.dismiss(); });
                }
                else {
                    _this.scheduleApi.createSchedule(_this.schedule).subscribe(function (schedule) {
                        _this.respUtility.showSuccess('Schedule saved successfully.');
                        _this.navCtrl.pop();
                    }, function (error) {
                        _this.respUtility.showFailure(error);
                        loader.dismiss();
                    }, function () { loader.dismiss(); });
                }
            });
        }
    };
    ScheduleForm.prototype.setRating = function (val) {
        var _this = this;
        this.slideOneForm.controls['rating'].setValue(val);
        this.schedule["rating"] = val;
        console.log("Set rating to " + val);
        if (val != -1) {
            setTimeout(function () {
                _this.save();
            }, 1000);
        }
    };
    ScheduleForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'schedule-form',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/schedules/schedule-form.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>How did it feel?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n      <ion-item-divider text-wrap text-center color="secondary" *ngIf="schedule.rating == 1">\n        Great! Good going & keep it up.\n      </ion-item-divider>\n      <ion-item-divider text-wrap text-center color="light" *ngIf="schedule.rating == 0">\n        Ok. Sure you\'ll do better next time.\n      </ion-item-divider>\n      <ion-item-divider text-wrap text-center color="danger" *ngIf="schedule.rating == -1">\n        Oh too bad. Tell us what happened ?\n      </ion-item-divider>\n\n      <ion-item class="center">\n        <ion-row>\n          <ion-col>\n            <img src="assets/smiley.png" (click)="setRating(1)" [style.backgroundColor]="schedule.rating == 1 ? \'green\' : \'white\'"/>\n          </ion-col>\n          <ion-col>\n            <img src="assets/neutral.png" (click)="setRating(0)" [style.backgroundColor]="schedule.rating == 0 ? \'yellow\' : \'white\'"/>\n          </ion-col>\n          <ion-col>\n            <img src="assets/sad.png" (click)="setRating(-1)" [style.backgroundColor]="schedule.rating == -1 ? \'red\' : \'white\'"/>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <div *ngIf="schedule.rating == -1">\n      <ion-item >\n        <ion-label text-wrap floating>Comments</ion-label>\n        <ion-textarea name="comments" formControlName="comments" type="text" [(ngModel)]="schedule.comments" [class.invalid]="!slideOneForm.controls.comments.valid && (slideOneForm.controls.comments.dirty || submitAttempt)"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.comments.valid  && (slideOneForm.controls.comments.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <button ion-button full color="primary" (click)="save()" [disabled]="slideOneForm.invalid">Save</button>\n\n      </div>\n\n    </form>\n\n  </ion-list>\n\n  <schedule-details></schedule-details>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/schedules/schedule-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_schedule_api__["a" /* ScheduleApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], ScheduleForm);
    return ScheduleForm;
}());

//# sourceMappingURL=schedule-form.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_medical_api__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_terms__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MedicalForm = /** @class */ (function () {
    function MedicalForm(navCtrl, navParams, formBuilder, medicalApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.medicalApi = medicalApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.submitAttempt = false;
        this.medical = this.navParams.data;
        console.log("this.navParams.data", this.navParams.data);
        console.log(this.medical);
        this.slideOneForm = formBuilder.group({
            last_medical_checkup: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            specific_issue: [''],
            q1: [''],
            q2: [''],
            q3: [''],
            q4: [''],
            q5: [''],
            q6: [''],
            q7: [''],
            q8: [''],
            q9: [''],
            q10: [''],
            q11: [''],
        });
    }
    MedicalForm.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MedicalForm');
        this.respUtility.trackView("MedicalForm");
        if (this.medical == null || this.medical["load_from_server"] == true) {
            // Grab the medicals for the currently logged in user
            var loader_1 = this.loadingController.create({
                content: 'Loading Medicals..'
            });
            loader_1.present();
            var currentUser = this.tokenService.currentUserData;
            this.medicalApi.getMedicals().subscribe(function (medicals) {
                _this.medical = medicals[0];
                console.log("Loaded medicals");
                console.log(Object.prototype.toString.call(_this.medical));
            }, function (error) { _this.respUtility.showFailure(error); loader_1.dismiss(); }, function () { loader_1.dismiss(); });
        }
        else {
            // Ensure that the boolean properties are not undefined
            var booleanParams = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11"];
            for (var i in booleanParams) {
                var property = booleanParams[i];
                if (this.medical[property] === undefined) {
                    this.medical[property] = false;
                }
            }
        }
    };
    MedicalForm.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("Medical", "Save", "click");
        this.submitAttempt = true;
        //console.log(this.medical);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        if (this.slideOneForm.invalid) {
            //this.signupSlider.slideTo(0);
            console.log("Invalid form ", this.slideOneForm.errors);
        }
        else {
            this.submitAttempt = false;
            loader.present();
            if (this.medical["id"]) {
                this.medicalApi.updateMedical(this.medical).subscribe(function (medical) {
                    _this.respUtility.showSuccess('Medical saved successfully.');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__static_terms__["a" /* TermsPage */]);
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
            else {
                this.medicalApi.createMedical(this.medical).subscribe(function (medical) {
                    _this.respUtility.showSuccess('Medical saved successfully.');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__static_terms__["a" /* TermsPage */]);
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
        }
    };
    MedicalForm.prototype.getMedicalText = function (name) {
        return this.medicalApi.getMedicalText(name);
    };
    MedicalForm.prototype.uncheckAllOthers = function () {
        if (this.medical["q11"] == true) {
            this.medical["q1"] = false;
            this.medical["q2"] = false;
            this.medical["q3"] = false;
            this.medical["q4"] = false;
            this.medical["q5"] = false;
            this.medical["q6"] = false;
            this.medical["q7"] = false;
            this.medical["q8"] = false;
            this.medical["q9"] = false;
            this.medical["q10"] = false;
        }
    };
    MedicalForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'medical-form',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/medicals/medical-form.html"*/'<!--\n  Generated template for the UserForm pemail.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pemails and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Medical History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n\n      <ion-list radio-group formControlName="last_medical_checkup" [(ngModel)]="medical.last_medical_checkup">\n\n        <ion-list-header text-wrap>The last time I had a medical check up was</ion-list-header>\n\n        <ion-item>\n          <ion-label text-wrap>Within the last six months.</ion-label>\n          <ion-radio value="Within the last six months."></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-wrap>Between six and eighteen months ago.</ion-label>\n          <ion-radio value="Between six and eighteen months ago."></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-wrap>More than eighteen months ago / never.</ion-label>\n          <ion-radio value="More than eighteen months ago / never."></ion-radio>\n        </ion-item>\n\n      </ion-list>\n\n\n      <ion-item *ngIf="!slideOneForm.controls.last_medical_checkup.valid  && (slideOneForm.controls.last_medical_checkup.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-list-header text-wrap>Medical Checklist</ion-list-header>\n\n      <ion-item>\n        <ion-label text-wrap>I have been told I have a heart condition that requires me to take up only physical activity recommended by a doctor.</ion-label>\n        <ion-checkbox formControlName="q1" [(ngModel)]="medical.q1"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I have in the past felt a pain in my chest when I do physical activity / exercise.</ion-label>\n        <ion-checkbox formControlName="q2" [(ngModel)]="medical.q2"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>In the past month I have had chest pain when not doing any physical activity.</ion-label>\n        <ion-checkbox formControlName="q3" [(ngModel)]="medical.q3"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I have in the past lost balance because I felt dizzy, or lost consciousness.</ion-label>\n        <ion-checkbox formControlName="q4" [(ngModel)]="medical.q4"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I have a bone or joint problem that could be made worse with physical activity.</ion-label>\n        <ion-checkbox formControlName="q5" [(ngModel)]="medical.q5"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am taking medication for blood pressure or a heart condition.</ion-label>\n        <ion-checkbox formControlName="q6" [(ngModel)]="medical.q6"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am diabetic.</ion-label>\n        <ion-checkbox formControlName="q7" [(ngModel)]="medical.q7"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I sometimes have difficulty breathing - especially in cold dry conditions.</ion-label>\n        <ion-checkbox formControlName="q8" [(ngModel)]="medical.q8"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am aware of some other last_medical_checkup why I should do physical activity.</ion-label>\n        <ion-checkbox formControlName="q9" [(ngModel)]="medical.q9"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am pregnant.</ion-label>\n        <ion-checkbox formControlName="q10" [(ngModel)]="medical.q10"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>None of the things listed above apply to me.</ion-label>\n        <ion-checkbox formControlName="q11" [(ngModel)]="medical.q11" (click)="uncheckAllOthers()"></ion-checkbox>\n      </ion-item>\n\n      <ion-list-header text-wrap>Any specific issue / concern that you wish to highlight for consideration as you get started with the program?</ion-list-header>\n\n      <ion-item>\n        <ion-textarea name="specific_issue" formControlName="specific_issue" type="text" [(ngModel)]="medical.specific_issue" [class.invalid]="!slideOneForm.controls.specific_issue.valid && (slideOneForm.controls.specific_issue.dirty || submitAttempt)"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.specific_issue.valid  && (slideOneForm.controls.specific_issue.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n    </form>\n\n  </ion-list>\n\n  <button ion-button full color="primary" (click)="save()" [disabled]="slideOneForm.invalid">Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/medicals/medical-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_medical_api__["a" /* MedicalApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MedicalForm);
    return MedicalForm;
}());

//# sourceMappingURL=medical-form.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_form__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.role = null;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (role, company_id) {
        var user = { "role": role, "company_id": company_id };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_form__["a" /* UserForm */], user);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/users/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n            <button ion-item (click)="register(\'Runner\', -1)">\n              <ion-icon name="create" item-left color="primary"></ion-icon>\n              Corporate Sponsored Runner\n              <p>\n                Register as a Runner .\n              </p>\n            </button>\n\n            <button ion-item (click)="register(\'Runner\', null)">\n              <ion-icon name="create" item-left color="primary"></ion-icon>\n              Individual Runner\n              <p>\n                Register as an individual Runner\n              </p>\n            </button>\n\n\n\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/users/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/users/users.module": [
		587,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_details__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserTabs = /** @class */ (function () {
    function UserTabs(navCtrl, navParams, userApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userApi = userApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__user_details__["a" /* UserDetails */];
        this.tabIndex = 0;
        this.params = {};
        this.user = this.navParams.data;
        if (this.user.role == "Admin") {
        }
        else {
        }
        this.params = { showNavBar: false, user: this.user };
    }
    UserTabs.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserTabs');
    };
    UserTabs.prototype.tabClick = function (event) {
        console.log("UserTabs: tabClick", event);
        event.preventDefault();
        event.stopImmediatePropagation();
    };
    UserTabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-tabs',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/users/user-tabs.html"*/'<!--\n  Generated template for the UserDetails page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-tabs preloadTabs="false" has-header=false  \n    (click)="tabClick($event)" color="primary" tabsPlacement="bottom" [selectedIndex]="tabIndex">\n    <ion-tab tabIcon="person" [rootParams]="user" [root]="tab1Root" tabTitle="Profile" disabled="true"></ion-tab>\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/users/user-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_api__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__["a" /* ResponseUtility */]])
    ], UserTabs);
    return UserTabs;
}());

//# sourceMappingURL=user-tabs.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyApi = /** @class */ (function () {
    function CompanyApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url = "companies";
        this.companies = [];
        this.company = {};
        console.log('CompanyApi Provider Created');
    }
    CompanyApi.prototype.getCompanies = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + ".json").map(function (response) {
            _this.companies = response.json();
            return _this.companies;
        });
    };
    CompanyApi.prototype.getCompanyDetails = function (company_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + company_id + ".json").map(function (response) {
            _this.company = response.json();
            return _this.company;
        });
    };
    CompanyApi.prototype.createCompany = function (company) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", company).map(function (response) {
            _this.company = response.json();
            return _this.company;
            //return response.status;
        });
    };
    CompanyApi.prototype.updateCompany = function (company) {
        var _this = this;
        console.log("CompanyApi: Updating company");
        console.log(company);
        return this.tokenService.put(this.base_url + "/" + company.id + ".json", company).map(function (response) {
            _this.company = response.json();
            return _this.company;
        });
    };
    CompanyApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], CompanyApi);
    return CompanyApi;
}());

//# sourceMappingURL=company-api.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessTests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fitness_test_api__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stress_test_api__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








__webpack_require__(526)(__WEBPACK_IMPORTED_MODULE_4_highcharts__);
var FitnessTests = /** @class */ (function () {
    function FitnessTests(navCtrl, navParams, loadingController, fitness_test_api, stress_testApi, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.fitness_test_api = fitness_test_api;
        this.stress_testApi = stress_testApi;
        this.respUtility = respUtility;
    }
    FitnessTests.prototype.loadTests = function () {
        console.log("Calling load tests");
        this.getFitnessTests();
    };
    FitnessTests.prototype.makeStressChart = function () {
        //    HighCharts.chart('stressTest', {
        var chartStress = __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('stressTest', {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            credits: {
                enabled: false
            },
            title: {
                enable: true,
                text: 'Stress Meter',
                style: { color: '#FF00FF', fontSize: '10px', fontWeight: 'bold' },
                align: 'center'
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {}, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 40,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                plotBands: [{
                        from: 0,
                        to: 14,
                        color: '#55BF3B' // green
                    }, {
                        from: 14,
                        to: 26,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 26,
                        to: 40,
                        color: '#DF5353' // red
                    }]
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                },
                gauge: {
                    dial: {
                        backgroundColor: '#DF5353',
                    }
                }
            },
            series: [{
                    name: 'score',
                    data: [this.stress_tests.map(function (a) { return a.score; })],
                }]
        });
    };
    FitnessTests.prototype.makeChart = function () {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var cardioprofiles = this.fitness_tests_data.map(function (a) { return a.cardio_profiles; });
        var seriesArr;
        seriesArr = new Array();
        var speedSet = new Set();
        for (var _i = 0, cardioprofiles_1 = cardioprofiles; _i < cardioprofiles_1.length; _i++) {
            var cp = cardioprofiles_1[_i];
            var speeds = [[2]];
            cp.forEach(function (c) {
                var point = new Array();
                console.log('speed,bpm', c.speed, c.bpm);
                point.push(c.speed); //x 
                point.push(c.bpm); //y
                speeds.push(point);
                speedSet.add(c.speed);
            });
            var dtName = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]('en-US').transform(new Date(cp[0].on_date), 'dd MMM');
            seriesArr.push({ name: dtName, data: speeds });
        }
        ;
        console.log('speedSet == ', speedSet);
        __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('Cardio', {
            credits: {
                enabled: false
            },
            title: {
                text: null
            },
            subtitle: {
                text: 'Source: Aadit Life Wellness Program'
            },
            xAxis: {
                categories: speedSet.values,
            },
            yAxis: {
                title: {
                    text: 'Heart Rate(BPM)'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 0,
                    line: {
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                if ((this.point.x === 15) ||
                                    (this.point.x === 7)) {
                                    return this.point.y;
                                }
                                return '';
                            },
                        },
                    },
                },
            },
            //series:[{name:'x',data:[[4,100],[5,120]]},{name:'y',data:[[5,130],[6,140]]}],
            series: seriesArr,
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
            }
        });
        var months = this.fitness_tests_data.map(function (a) { return monthNames[new Date(a.test_date).getMonth()]; });
        var charts = [], $containers = __WEBPACK_IMPORTED_MODULE_5_jquery__('.trellis> div'), plotOptions, datasets = [
            {
                name: 'Weight (kg)',
                data: this.fitness_tests_data.map(function (a) { return a.weight; }),
                ymin: 30,
                ymax: Math.max.apply(Math, (this.fitness_tests_data.map(function (a) { return a.weight; }))),
                target: this.targets[0].weight
            },
            {
                name: 'Body Age (Years)',
                data: this.fitness_tests_data.map(function (a) { return a.body_age; }),
                ymin: 0,
                ymax: Math.max.apply(Math, (this.fitness_tests_data.map(function (a) { return a.body_age; }))),
                target: this.targets[0].body_age
            },
            {
                name: 'Fat %',
                data: this.fitness_tests_data.map(function (a) { return a.fat_percentage; }),
                ymin: 0,
                ymax: Math.max.apply(Math, (this.fitness_tests_data.map(function (a) { return a.fat_percentage; }))),
                target: this.targets[0].fat_percentage
            },
            {
                name: 'muscle %',
                data: this.fitness_tests_data.map(function (a) { return a.muscle_percentage; }),
                ymin: 0,
                ymax: Math.max.apply(Math, (this.fitness_tests_data.map(function (a) { return a.muscle_percentage; }))),
                target: this.targets[0].muscle_percentage
            },
            {
                name: 'viscal fat %',
                data: this.fitness_tests_data.map(function (a) { return a.visc_fat; }),
                ymin: 0,
                ymax: Math.max.apply(Math, (this.fitness_tests_data.map(function (a) { return a.visc_fat; }))),
                target: this.targets[0].visc_fat
            },
            {
                name: 'Body Mass Index',
                data: this.fitness_tests_data.map(function (a) { return a.bmi; }),
                ymin: 0,
                ymax: Math.max.apply(Math, (this.fitness_tests_data.map(function (a) { return a.bmi; }))),
                target: this.targets[0].bmi
            }
        ];
        __WEBPACK_IMPORTED_MODULE_4_highcharts__["seriesTypes"].column.prototype.getExtremesFromAll = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["each"](datasets, function (i, dataset) {
            charts.push(new __WEBPACK_IMPORTED_MODULE_4_highcharts__["Chart"]({
                chart: {
                    renderTo: $containers[i],
                    type: 'bar'
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: months,
                    labels: {
                        enabled: i === 0 || i === 2 || i === 4
                    },
                    style: {
                        fontSize: '10px'
                    }
                },
                yAxis: {
                    allowDecimals: false,
                    "minPadding": 0,
                    "maxPadding": 0,
                    style: {
                        fontSize: '8px'
                    },
                    title: {
                        text: dataset.name,
                        style: {
                            color: '#FF00FF',
                            fontWeight: 'bold',
                            fontSize: '10px'
                        }
                    },
                    min: dataset.ymin,
                    max: dataset.ymax,
                    plotLines: [{
                            color: '#FF00FF',
                            width: 2,
                            value: dataset.target,
                        }],
                },
                plotOptions: {
                    series: {
                        pointPadding: 0,
                        borderWidth: 0,
                        pointWidth: 10,
                        dataLabels: {
                            enabled: true,
                            shape: 'callout',
                            style: {
                                fontSize: '10px'
                            }
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: [dataset]
            }));
        });
        var chartStress = __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('wellnessIndex', {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            credits: {
                enabled: false
            },
            title: {
                enable: true,
                text: 'wellness index',
                style: { color: '#FF00FF', fontSize: '10px', fontWeight: 'bold' },
                align: 'center'
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {}, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 40,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                plotBands: [{
                        from: 0,
                        to: 14,
                        color: '#55BF3B' // green
                    }, {
                        from: 14,
                        to: 26,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 26,
                        to: 40,
                        color: '#DF5353' // red
                    }]
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                },
                gauge: {
                    dial: {
                        backgroundColor: '#DF5353',
                    }
                }
            },
            series: [{
                    name: 'score',
                    data: [8],
                }]
        });
    };
    FitnessTests.prototype.ionViewWillEnter = function () {
        this.loadTests();
        console.log('ionViewWillEnter FitnessTests');
        this.respUtility.trackView("FitnessTests");
        //this.getFitnessTests();
    };
    /*sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }*/
    FitnessTests.prototype.getFitnessTests = function () {
        var _this = this;
        if (this.fitness_tests_data) {
            console.log("fitness tests present");
            return Promise.resolve(this.fitness_tests_data);
        }
        var loader = this.loadingController.create({
            content: 'Loading FitnessTests..'
        });
        loader.present();
        this.fitness_test_api.getFitnessTests().subscribe(function (fitness_tests) {
            _this.fitness_tests_data = fitness_tests;
            _this.makeChart();
        }, function (error) {
            _this.respUtility.showFailure(error);
        });
        this.fitness_test_api.getTargetDetails().subscribe(function (targets) {
            _this.targets = targets;
            console.log('targets = ', _this.targets);
            //this.makeChart();
        }, function (error) {
            _this.respUtility.showFailure(error);
        });
        this.stress_testApi.getStressTests().subscribe(function (stress_tests) {
            //this.respUtility.showSuccess("Loaded StressTest");
            _this.stress_tests = stress_tests;
            console.log("Loaded stress_test");
            console.log(_this.stress_tests);
            _this.makeStressChart();
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    FitnessTests = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fitness-tests',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/fitness-tests/fitness-tests.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Fitness Tests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <div id="Cardio" style="height: 250px;"></div>\n  <div class="row">\n      <div id="stressTest"  style="float:left;width:50%;  height: 160px;"></div>\n      <div id="wellnessIndex"  style="float:left;width:50%;  height: 160px;"></div>\n    </div>\n  \n  <div class="trellis" >\n      <div style="float:left;width:50%;  height: 100px;"></div>\n      <div style="float:left;width:50%;  height: 100px;"></div>\n        <div style="float:left;width:50%;  height: 100px;"></div>\n        <div style="float:left;width:50%;  height: 100px;"></div>\n      <div style="float:left;width:50%;  height: 100px;"></div>\n      <div style="float:left;width:50%;  height: 100px;"></div>\n    </div>\n</ion-content>\n\n\n<!-- \n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let fitness_test of fitness_tests" (click)=getFitnessTesdivetails(fitness_test)>\n\n      {{fitness_test.test_date | date}}\n      <p>\n        Weight: {{fitness_test.weight}}\n      </p>\n      <p>\n        Fat %: {{fitness_test.fat_percentage}}\n      </p>\n      <p>\n        Body Age: {{fitness_test.body_age}}\n      </p>\n\n        <ion-badge item-right color="secondary" *ngIf="fitness_test.current">\n          Current\n        </ion-badge>\n      \n    </button>\n\n  </ion-list>\n\n</ion-content> -->'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/fitness-tests/fitness-tests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_fitness_test_api__["a" /* FitnessTestApi */],
            __WEBPACK_IMPORTED_MODULE_7__providers_stress_test_api__["a" /* StressTestApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], FitnessTests);
    return FitnessTests;
}());

//# sourceMappingURL=fitness-tests.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_workout_api__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutDetails = /** @class */ (function () {
    function WorkoutDetails(navCtrl, navParams, workoutApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workoutApi = workoutApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.workout = this.navParams.data;
    }
    WorkoutDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter WorkoutDetails');
        this.respUtility.trackView("WorkoutDetails");
        // Always reload the workout from the server for a fresh copy
        this.loadWorkout();
    };
    WorkoutDetails.prototype.loadWorkout = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading Workout...'
        });
        loader.present();
        this.workoutApi.getWorkoutDetails(this.workout.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded Workout");
            _this.workout = response;
            console.log("Loaded workout");
            console.log(_this.workout);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    WorkoutDetails.prototype.deactivateWorkout = function (workout) {
        var _this = this;
        this.respUtility.trackEvent("Workout", "Deactivate", "click");
        var loader = this.loadingController.create({
            content: 'Deactivating Workout...'
        });
        workout.active = false;
        loader.present();
        this.workoutApi.updateWorkout(workout).subscribe(function (response) {
            _this.respUtility.showSuccess("Deactivated Workout");
            _this.navCtrl.pop();
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    WorkoutDetails.prototype.confirmDeactivate = function (workout) {
        this.respUtility.confirmAction(this.deactivateWorkout.bind(this), workout, "Deactivate Workout. Confirm?");
    };
    WorkoutDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workout-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/workouts/workout-details.html"*/'<!--\n  Generated template for the WorkoutDetails page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Workout Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Type:\n        </ion-col>\n        <ion-col>\n          {{workout.workout_type}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Activity Time:\n        </ion-col>\n        <ion-col>\n          {{workout.activity_time}} mins\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Activity Speed:\n        </ion-col>\n        <ion-col>\n          {{workout.activity_speed}} Kmh\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Recovery Time\n        </ion-col>\n        <ion-col>\n          {{workout.recovery_time}} mins\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Recovery Speed:\n        </ion-col>\n        <ion-col>\n          {{workout.recovery_speed}} Kmh\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Repeats:\n        </ion-col>\n        <ion-col>\n          {{workout.repeats}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Total Duration:\n        </ion-col>\n        <ion-col>\n          {{workout.total_duration}} mins\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/workouts/workout-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_workout_api__["a" /* WorkoutApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], WorkoutDetails);
    return WorkoutDetails;
}());

//# sourceMappingURL=workout-details.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrengthWorkoutApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StrengthWorkoutApi = /** @class */ (function () {
    function StrengthWorkoutApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url = "strength_workouts";
        this.strength_workouts = [];
        this.strength_workout = {};
        console.log('StrengthWorkoutApi Provider Created');
    }
    StrengthWorkoutApi.prototype.getStrengthWorkouts = function (fitness_test_id) {
        var _this = this;
        var endpoint = this.base_url + ".json";
        if (fitness_test_id) {
            endpoint = this.base_url + ".json?fitness_test_id=" + fitness_test_id;
        }
        return this.tokenService.get(endpoint).map(function (response) {
            _this.strength_workouts = response.json();
            return _this.strength_workouts;
        });
    };
    StrengthWorkoutApi.prototype.getStrengthWorkoutDetails = function (strength_workout_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + strength_workout_id + ".json").map(function (response) {
            _this.strength_workout = response.json();
            return _this.strength_workout;
        });
    };
    StrengthWorkoutApi.prototype.createStrengthWorkout = function (strength_workout) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", strength_workout).map(function (response) {
            _this.strength_workout = response.json();
            return _this.strength_workout;
            //return response.status;
        });
    };
    StrengthWorkoutApi.prototype.updateStrengthWorkout = function (strength_workout) {
        var _this = this;
        console.log("StrengthWorkoutApi: Updating strength_workout");
        console.log(strength_workout);
        return this.tokenService.put(this.base_url + "/" + strength_workout.id + ".json", strength_workout).map(function (response) {
            _this.strength_workout = response.json();
            return _this.strength_workout;
        });
    };
    StrengthWorkoutApi.prototype.deleteStrengthWorkout = function (strength_workout) {
        return this.tokenService.delete(this.base_url + "/" + strength_workout.id + ".json").map(function (response) {
            return response.status;
        });
    };
    StrengthWorkoutApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], StrengthWorkoutApi);
    return StrengthWorkoutApi;
}());

//# sourceMappingURL=strength-workout-api.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodLogForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_food_log_api__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FoodLogForm = /** @class */ (function () {
    function FoodLogForm(navCtrl, navParams, formBuilder, food_logApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.food_logApi = food_logApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.submitAttempt = false;
        this.food_log = this.navParams.data;
        this.food_log["intake_date"] = __WEBPACK_IMPORTED_MODULE_7_moment___default()(this.food_log["intake_date"]).format();
        console.log(this.food_log);
        this.slideOneForm = formBuilder.group({
            meal: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            intake_date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            details: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
        });
    }
    FoodLogForm.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodLogForm');
        this.respUtility.trackView("FoodLogForm");
    };
    FoodLogForm.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("FoodLog", "Save", "click");
        this.submitAttempt = true;
        //console.log(this.food_log);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        if (this.slideOneForm.invalid) {
            //this.signupSlider.slideTo(0);
            console.log("Invalid form ", this.slideOneForm.errors);
        }
        else {
            this.submitAttempt = false;
            loader.present();
            this.food_log["intake_date"] = __WEBPACK_IMPORTED_MODULE_7_moment___default()(this.food_log["intake_date"]).toISOString();
            if (this.food_log["id"]) {
                this.food_logApi.updateFoodLog(this.food_log).subscribe(function (food_log) {
                    _this.respUtility.showSuccess('FoodLog saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
            else {
                this.food_logApi.createFoodLog(this.food_log).subscribe(function (food_log) {
                    _this.respUtility.showSuccess('FoodLog saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
        }
    };
    FoodLogForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'food-log-form',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/food-logs/food-log-form.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>FoodLogs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n      <ion-item>\n        <ion-label floating>Meal</ion-label>\n        <ion-select [(ngModel)]="food_log.meal" name="meal" formControlName="meal">\n          <ion-option value="Breakfast">Breakfast</ion-option>\n          <ion-option value="Lunch">Lunch</ion-option>\n          <ion-option value="Dinner">Dinner</ion-option>\n          <ion-option value="Snack">Snack</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Date</ion-label>\n        <ion-datetime name="intake_date" formControlName="intake_date" displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="food_log.intake_date"></ion-datetime>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label text-wrap floating>What did you eat?</ion-label>\n        <ion-textarea name="details" formControlName="details" type="text" [(ngModel)]="food_log.details" [class.invalid]="!slideOneForm.controls.details.valid && (slideOneForm.controls.details.dirty || submitAttempt)"></ion-textarea>\n      </ion-item>\n\n\n      <ion-item *ngIf="!slideOneForm.controls.details.valid  && (slideOneForm.controls.details.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <button ion-button full color="primary" (click)="save()" [disabled]="slideOneForm.invalid">Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/food-logs/food-log-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_food_log_api__["a" /* FoodLogApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], FoodLogForm);
    return FoodLogForm;
}());

//# sourceMappingURL=food-log-form.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_schedule_api__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workouts_workouts__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScheduleCreate = /** @class */ (function () {
    function ScheduleCreate(navCtrl, navParams, formBuilder, scheduleApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.scheduleApi = scheduleApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.schedule = [
            { label: "Interval", day: 2, duration: 48 },
            { label: "Tempo", day: 4, duration: 60 },
            { label: "Long", day: 6, duration: 90 },
        ];
        this.fitness_test_id = this.navParams.data["fitness_test_id"];
    }
    ScheduleCreate.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScheduleCreate');
        this.respUtility.trackView("ScheduleCreate");
        // Ensure that the workouts available are shown
        this.workouts.ionViewWillEnter();
        this.workouts.hideNavbar();
    };
    ScheduleCreate.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("Schedule", "Create", "click");
        //console.log(this.schedule);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        loader.present().then(function () {
            var day_sequence = _this.schedule.reduce(function (map, obj) {
                map[obj.day] = obj.label;
                return map;
            }, {});
            _this.scheduleApi.generateSchedule(_this.fitness_test_id, day_sequence).subscribe(function (schedule) {
                _this.respUtility.showSuccess('Schedule saved successfully.');
                _this.navCtrl.popToRoot();
                _this.respUtility.showSuccess('Schedule will be generated in a few mins. Please check back in 5.');
            }, function (error) {
                _this.respUtility.showFailure(error);
                loader.dismiss();
            }, function () { loader.dismiss(); });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__workouts_workouts__["a" /* Workouts */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__workouts_workouts__["a" /* Workouts */])
    ], ScheduleCreate.prototype, "workouts", void 0);
    ScheduleCreate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'schedule-create',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/schedules/schedule-create.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Create a schedule for yourself</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card-title class="center">\n    Please select the day of the week for the different kinds of runs\n  </ion-card-title>\n  <p class="center">\n    You need to leave 1 day gap between each run.\n  </p>\n\n  <ion-list no-lines>\n\n    <form>\n\n      <ion-item *ngFor="let workout of schedule">\n        <ion-label>{{workout.label}}</ion-label>\n        <ion-select [(ngModel)]="workout.day" name="{{workout.label}}">\n          <ion-option value="1">Mon</ion-option>\n          <ion-option value="2">Tue</ion-option>\n          <ion-option value="3">Wed</ion-option>\n          <ion-option value="4">Thur</ion-option>\n          <ion-option value="5">Fri</ion-option>\n          <ion-option value="6">Sat</ion-option>\n          <ion-option value="7">Sun</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <button ion-button full color="primary" (click)="save()">Save</button>\n    </form>\n\n  </ion-list>\n\n  <ion-card-title class="center">\n      Workout Details\n  </ion-card-title>\n    \n  <workouts #workouts></workouts>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/schedules/schedule-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_schedule_api__["a" /* ScheduleApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], ScheduleCreate);
    return ScheduleCreate;
}());

//# sourceMappingURL=schedule-create..js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Goals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goal_form__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_goal_api__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Goals = /** @class */ (function () {
    function Goals(navCtrl, navParams, loadingController, goalApi, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.goalApi = goalApi;
        this.respUtility = respUtility;
    }
    Goals.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter Goals');
        this.respUtility.trackView("Goals");
        var loader = this.loadingController.create({
            content: 'Loading Goals..'
        });
        loader.present();
        this.goalApi.getGoals().subscribe(function (goals) {
            _this.goals = goals;
            console.log("Loaded goals");
            console.log(goals);
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
    };
    Goals.prototype.getGoalDetails = function (goal) {
        this.respUtility.trackEvent("Goal", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__goal_form__["a" /* GoalForm */], goal);
    };
    Goals.prototype.getGoalText = function (name) {
        return this.goalApi.getGoalText(name);
    };
    Goals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'goals',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/goals/goals.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Goals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list inset >\n\n    <button ion-item *ngFor="let goal of goals" (click)=getGoalDetails(goal)>\n\n      <ion-item-divider text-wrap color="secondary">{{getGoalText("REASON")}}</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{goal.reason}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item-divider text-wrap color="secondary">{{getGoalText("DELIGHT")}}</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{goal.delight}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item-divider text-wrap color="secondary">{{getGoalText("FREQ")}}</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{goal.frequency}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item-divider text-wrap color="secondary">{{getGoalText("CURRENT_ACTIVITY")}}</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{goal.current_activity}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/goals/goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_goal_api__["a" /* GoalApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], Goals);
    return Goals;
}());

//# sourceMappingURL=goals.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordReset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PasswordReset = /** @class */ (function () {
    function PasswordReset(navCtrl, navParams, formBuilder, respUtility, loadingController, tokenService, config, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.config = config;
        this.http = http;
        this.headerInfo = {};
        this.slideOneForm = formBuilder.group({
            token: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            confirm_password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    }
    PasswordReset.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    PasswordReset.prototype.reset = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Reset in progress ...'
        });
        loader.present();
        this.tokenService.get("auth/password/edit?reset_password_token=" + this.token + "&redirect_url=auth/password").subscribe(function (res) {
            console.log(res);
            _this.headerInfo = res.json();
            var params = { password: _this.password, password_confirmation: _this.confirm_password };
            loader.dismiss();
            _this.resetPassword(_this.headerInfo, params);
        }, function (error) {
            console.log(error);
            loader.dismiss();
            _this.respUtility.showFailure(error);
        });
    };
    PasswordReset.prototype.resetPassword = function (headerInfo, params) {
        var _this = this;
        console.log(headerInfo);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json;q=0.9,*/*;q=0.8'); // Fix for Firefox
        headers.append('access-token', headerInfo['token']);
        headers.append('client', headerInfo['client_id']);
        headers.append('expiry', headerInfo['expiry']);
        headers.append('uid', headerInfo['uid']);
        headers.append('token-type', 'Bearer');
        console.log(params);
        var h = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["f" /* RequestOptions */]({
            headers: headers
        });
        this.http.put(this.config.props['API_URL'] + "/auth/password", params, h).subscribe(function (res) {
            console.log(res);
            _this.respUtility.showSuccess("Password reset successfully. Please login");
            _this.navCtrl.popToRoot();
        }, function (error) {
            console.log(error);
            _this.respUtility.showFailure(error);
        });
    };
    PasswordReset = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-password-reset',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/login/password-reset.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-content>\n      <form [formGroup]="slideOneForm">\n        <ion-item>\n          <ion-label floating>Token</ion-label>\n          <ion-input formControlName="token" name="token" type="text" [(ngModel)]="token" [class.invalid]="!slideOneForm.controls.token.valid && (slideOneForm.controls.token.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input formControlName="password" name="password" type="password" [(ngModel)]="password" [class.invalid]="!slideOneForm.controls.password.valid && (slideOneForm.controls.password.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Confirm Password</ion-label>\n          <ion-input formControlName="confirm_password" name="confirm_password" type="password" [(ngModel)]="confirm_password" [class.invalid]="!slideOneForm.controls.confirm_password.valid && (slideOneForm.controls.confirm_password.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n        \n\n      </form>\n\n      <ion-row>\n\n        <ion-col>\n          <button ion-button full color="secondary" (click)="reset()">Reset Password</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/login/password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], PasswordReset);
    return PasswordReset;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.goToContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/static/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Aadit Life </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p>Lifestyle coaching by Aadit Life helps individuals and groups set meaningful wellness goals - and achieve them. \n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <p>The program was established in 2015 by Anand Valavi , and has significantly impacted the wellness of over a thousand people with diverse fitness and age profiles. \n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <p>The corporate programs have been been well received with measurable improvements in group wellness and engagement levels.         \n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/static/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/static/help.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      Please visit our help page at \n      <a href="http://blog.aadit_life.co.uk/faq">http://blog.aadit_life.co.uk/faq</a>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/static/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressTests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stress_test_form__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stress_test_api__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StressTests = /** @class */ (function () {
    function StressTests(navCtrl, navParams, loadingController, stress_testApi, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.stress_testApi = stress_testApi;
        this.respUtility = respUtility;
    }
    StressTests.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter StressTests');
        this.respUtility.trackView("StressTests");
        var loader = this.loadingController.create({
            content: 'Loading StressTests..'
        });
        loader.present();
        this.stress_testApi.getStressTests().subscribe(function (stress_tests) {
            _this.stress_tests = stress_tests;
            console.log("Loaded stress_tests");
            console.log(stress_tests);
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
    };
    StressTests.prototype.getStressTestDetails = function (stress_test) {
        this.respUtility.trackEvent("StressTest", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__stress_test_form__["a" /* StressTestForm */], stress_test);
    };
    StressTests.prototype.newStressTestDetails = function () {
        this.respUtility.trackEvent("StressTest", "New", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__stress_test_form__["a" /* StressTestForm */], {});
    };
    StressTests.prototype.getStressTestText = function (name) {
        return this.stress_testApi.getStressTestText(name);
    };
    StressTests = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stress-tests',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/stress-tests/stress-tests.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>StressTests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <button ion-item *ngFor="let stress_test of stress_tests" (click)=getStressTestDetails(stress_test)>\n\n      Test Date: {{stress_test.created_at | date}}\n      <p> Score: {{stress_test.score}}\n      </p>\n      <p> Status: {{stress_test.score_interpretation}}\n      </p>\n\n\n    </button>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="newStressTestDetails()">+</button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/stress-tests/stress-tests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_stress_test_api__["a" /* StressTestApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], StressTests);
    return StressTests;
}());

//# sourceMappingURL=stress-tests.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressTestForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stress_test_api__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StressTestForm = /** @class */ (function () {
    function StressTestForm(navCtrl, navParams, formBuilder, stress_testApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.stress_testApi = stress_testApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.submitAttempt = false;
        this.stress_test = this.navParams.data;
        console.log(this.stress_test);
        this.slideOneForm = formBuilder.group({
            unexpected_upset: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            unable_to_control: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            nervous: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            confident: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            things_going_right: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            cannot_cope: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            control_irritation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            top_of_things: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            anger: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            difficulties_piling: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
        });
        this.questions = Object.keys(this.stress_testApi.getAllText());
    }
    StressTestForm.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StressTestForm');
        this.respUtility.trackView("StressTestForm");
    };
    StressTestForm.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("StressTest", "Save", "click");
        this.submitAttempt = true;
        //console.log(this.stress_test);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        if (this.slideOneForm.invalid) {
            //this.signupSlider.slideTo(0);
            console.log("Invalid form ", this.slideOneForm.errors);
        }
        else {
            this.submitAttempt = false;
            loader.present();
            if (this.stress_test["id"]) {
                this.stress_testApi.updateStressTest(this.stress_test).subscribe(function (stress_test) {
                    _this.respUtility.showSuccess('StressTest saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
            else {
                this.stress_testApi.createStressTest(this.stress_test).subscribe(function (stress_test) {
                    _this.respUtility.showSuccess('StressTest saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
        }
    };
    StressTestForm.prototype.getStressTestText = function (name) {
        return this.stress_testApi.getStressTestText(name);
    };
    StressTestForm.prototype.getStressColor = function () {
    };
    StressTestForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'stress-test-form',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/stress-tests/stress-test-form.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>StressTests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n      <ion-item-divider text-center color="secondary" *ngIf="stress_test.score_interpretation">\n        Score: {{stress_test.score}}, {{stress_test.score_interpretation}}\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("unexpected_upset")}}</ion-label>\n        <ion-select formControlName="unexpected_upset" [(ngModel)]="stress_test.unexpected_upset" name="unexpected_upset">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.unexpected_upset.valid  && (slideOneForm.controls.unexpected_upset.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("unable_to_control")}}</ion-label>\n        <ion-select formControlName="unable_to_control" [(ngModel)]="stress_test.unable_to_control" name="unable_to_control">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.unable_to_control.valid  && (slideOneForm.controls.unable_to_control.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("nervous")}}</ion-label>\n        <ion-select formControlName="nervous" [(ngModel)]="stress_test.nervous" name="nervous">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.nervous.valid  && (slideOneForm.controls.nervous.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("confident")}}</ion-label>\n        <ion-select formControlName="confident" [(ngModel)]="stress_test.confident" name="confident">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.confident.valid  && (slideOneForm.controls.confident.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("things_going_right")}}</ion-label>\n        <ion-select formControlName="things_going_right" [(ngModel)]="stress_test.things_going_right" name="things_going_right">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.things_going_right.valid  && (slideOneForm.controls.things_going_right.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("cannot_cope")}}</ion-label>\n        <ion-select formControlName="cannot_cope" [(ngModel)]="stress_test.cannot_cope" name="cannot_cope">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.cannot_cope.valid  && (slideOneForm.controls.cannot_cope.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("control_irritation")}}</ion-label>\n        <ion-select formControlName="control_irritation" [(ngModel)]="stress_test.control_irritation" name="control_irritation">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.control_irritation.valid  && (slideOneForm.controls.control_irritation.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("top_of_things")}}</ion-label>\n        <ion-select formControlName="top_of_things" [(ngModel)]="stress_test.top_of_things" name="top_of_things">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.top_of_things.valid  && (slideOneForm.controls.top_of_things.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("anger")}}</ion-label>\n        <ion-select formControlName="anger" [(ngModel)]="stress_test.anger" name="anger">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.anger.valid  && (slideOneForm.controls.anger.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>{{getStressTestText("difficulties_piling")}}</ion-label>\n        <ion-select formControlName="difficulties_piling" [(ngModel)]="stress_test.difficulties_piling" name="difficulties_piling">\n          <ion-option value="Never">Never</ion-option>\n          <ion-option value="Almost Never">Almost Never</ion-option>\n          <ion-option value="Sometimes">Sometimes</ion-option>\n          <ion-option value="Fairly Often">Fairly Often</ion-option>\n          <ion-option value="Very Often">Very Often</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.difficulties_piling.valid  && (slideOneForm.controls.difficulties_piling.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <button ion-button full color="primary" (click)="save()" [disabled]="slideOneForm.invalid">Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/stress-tests/stress-test-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_stress_test_api__["a" /* StressTestApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], StressTestForm);
    return StressTestForm;
}());

//# sourceMappingURL=stress-test-form.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_logs_food_logs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedules_schedules__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(respUtility, events, tokenService) {
        var _this = this;
        this.respUtility = respUtility;
        this.events = events;
        this.tokenService = tokenService;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */];
        this.foodLogRoot = __WEBPACK_IMPORTED_MODULE_4__food_logs_food_logs__["a" /* FoodLogs */];
        this.scheduleRoot = __WEBPACK_IMPORTED_MODULE_5__schedules_schedules__["a" /* Schedules */];
        this.loginRoot = __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* Login */];
        this.currentUser = tokenService.currentUserData;
        this.events.subscribe('user:login:success', function () {
            _this.currentUser = tokenService.currentUserData;
        });
        this.events.subscribe('user:logout:success', function () {
            console.log("Hiding tabs as user logged out");
            _this.currentUser = null;
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/home/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="loginRoot" [tabsHideOnSubPages]="true" [show]="currentUser == null"></ion-tab>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home" [show]="currentUser != null"></ion-tab>\n    <ion-tab [root]="foodLogRoot" tabTitle="Food Log" tabIcon="pizza"  [show]="currentUser != null"></ion-tab>\n    <ion-tab [root]="scheduleRoot" tabTitle="Schedule" tabIcon="clock" [show]="currentUser != null"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/home/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2_angular2_token__["a" /* Angular2TokenService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_register__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_home_events__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__goals_goal_form__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schedules_schedule_details__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, respUtility, tokenService, config, events, homeEvents, loginProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.respUtility = respUtility;
        this.tokenService = tokenService;
        this.config = config;
        this.events = events;
        this.homeEvents = homeEvents;
        this.loginProvider = loginProvider;
        this.registerCareHome = false;
        this.homeEvents.registerMenu(this);
        this.events.subscribe('user:login:success', function () {
            _this.currentUser = tokenService.currentUserData;
            // Ensure that the scheduleDetails available are shown
            if (_this.scheduleDetails) {
                _this.scheduleDetails.loadTodaysSchedule();
                _this.scheduleDetails.hideNavbar();
            }
        });
    }
    HomePage.prototype.displayMsgs = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter HomePage ');
        if (this.currentUser && this.scheduleDetails) {
            // Ensure that the scheduleDetails available are shown
            this.scheduleDetails.loadTodaysSchedule();
            this.scheduleDetails.hideNavbar();
        }
        ;
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
    };
    HomePage.prototype.logout = function () {
        this.respUtility.trackEvent("User", "Logout", "click");
        this.loginProvider.logout();
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__users_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__static_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.setupGoals = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__goals_goal_form__["a" /* GoalForm */], {});
    };
    HomePage.prototype.setupFitnessTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__goals_goal_form__["a" /* GoalForm */], {});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11__schedules_schedule_details__["a" /* ScheduleDetails */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__schedules_schedule_details__["a" /* ScheduleDetails */])
    ], HomePage.prototype, "scheduleDetails", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar id="homeNavBar">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>AaditLife</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf="!currentUser">\n    <img src="assets/home.jpg" />\n    <ion-card-content>\n      <ion-card-title class="center">\n        Please Login or Register\n      </ion-card-title>\n      <p text-center>\n        The most popular way to train for a run\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="primary" icon-left (click)="login()">\n          <ion-icon name=\'key\'></ion-icon>\n          Login\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="secondary" icon-left (click)="register()">\n          <ion-icon name=\'create\'></ion-icon>\n          Register\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-left (click)="contact()">\n          <ion-icon name=\'call\'></ion-icon>\n          Contact\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div class="home-page">\n    <ion-card *ngIf="currentUser">\n      <img class="home_image" src="assets/home.jpg" />\n      <div class="card-title">Welcome</div>\n      <div class="card-subtitle">{{currentUser.first_name}} {{currentUser.last_name}}</div>\n    </ion-card>\n  </div>\n\n  <ion-card class="home_schedule">\n    <schedule-details #scheduleDetails>Todays Schedule</schedule-details>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_9__providers_home_events__["a" /* HomeEvents */],
            __WEBPACK_IMPORTED_MODULE_7__providers_login_provider__["a" /* LoginProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeEvents = /** @class */ (function () {
    function HomeEvents(respUtility, tokenService, config, events) {
        var _this = this;
        this.respUtility = respUtility;
        this.tokenService = tokenService;
        this.config = config;
        this.events = events;
        this.menus = [];
        // When the user logout succeeds
        events.subscribe('user:logout:success', function () {
            console.log("HomeEvents: user:logout:success");
            for (var _i = 0, _a = _this.menus; _i < _a.length; _i++) {
                var menu = _a[_i];
                menu.currentUser = null;
                menu.displayMsgs();
            }
        });
        // When the user login succeeds
        this.events.subscribe('user:login:success', function () {
            console.log("HomeEvents: user:login:success");
            for (var _i = 0, _a = _this.menus; _i < _a.length; _i++) {
                var menu = _a[_i];
                console.log("setting user for ", menu);
                menu.currentUser = _this.tokenService.currentUserData;
                menu.displayMsgs();
            }
        });
        this.events.subscribe('current_user:reload', function () {
            console.log("HomeEvents: current_user:reload");
            _this.tokenService.validateToken().subscribe(function (resp) {
                console.log(resp);
                var body = JSON.parse(resp["_body"]);
                for (var _i = 0, _a = _this.menus; _i < _a.length; _i++) {
                    var menu = _a[_i];
                    menu.currentUser = body["data"];
                    menu.displayMsgs();
                }
            }, function (err) { console.log(err); });
        });
    }
    HomeEvents.prototype.registerMenu = function (menu) {
        this.menus.push(menu);
        console.log("HomeEvent: Registering ", menu);
    };
    HomeEvents = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Events"]])
    ], HomeEvents);
    return HomeEvents;
}());

//# sourceMappingURL=home-events.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_schedule_api__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_form__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleDetails = /** @class */ (function () {
    function ScheduleDetails(navCtrl, navParams, scheduleApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scheduleApi = scheduleApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.showNavbar = false;
        this.schedule = {};
        this.schedule = this.navParams.data;
    }
    ScheduleDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ScheduleDetails');
        this.respUtility.trackView("ScheduleDetails");
    };
    ScheduleDetails.prototype.loadSchedule = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading Schedule...'
        });
        loader.present();
        this.scheduleApi.getScheduleDetails(this.schedule.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded Schedule");
            _this.schedule = response;
            console.log("Loaded schedule");
            console.log(_this.schedule);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    ScheduleDetails.prototype.loadTodaysSchedule = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading Schedule...'
        });
        loader.present();
        this.scheduleApi.getTodaysScheduleDetails().subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded Schedule");
            _this.schedule = response;
            console.log("Loaded todays schedule");
            console.log(_this.schedule);
            _this.content.resize();
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    ScheduleDetails.prototype.rateSchedule = function (schedule) {
        this.respUtility.trackEvent("Schedule", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__schedule_form__["a" /* ScheduleForm */], schedule);
    };
    ScheduleDetails.prototype.hideNavbar = function () {
        this.showNavbar = false;
        // You should resize the content to use the space left by the navbar
        this.content.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("schedule_content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ScheduleDetails.prototype, "content", void 0);
    ScheduleDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'schedule-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/schedules/schedule-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" *ngIf="showNavbar">\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding #schedule_content (click)=rateSchedule(schedule)>\n\n  <ion-list inset *ngIf="schedule && schedule.workout_type">\n    <ion-item-divider class="schedule_header" text-wrap text-center [style.backgroundColor]="(schedule.workout_type != \'Strength\') ? \'#32db64\' : \'#488aff\'">\n      <h2>{{schedule.scheduled_date | date}} : {{schedule.workout_type}}</h2>\n      <ion-icon name=\'checkbox\' item-right *ngIf="schedule.completed"></ion-icon>\n      <ion-icon name=\'warning\' item-right *ngIf="schedule.completed==false"></ion-icon>\n    </ion-item-divider>\n\n\n    <div *ngIf="schedule.exercise && schedule.workout_type != \'Strength\'">\n      <ion-item>\n        <ion-row>\n          <ion-col text-wrap>\n            Activity Time:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.activity_time}} mins\n          </ion-col>\n          <ion-col text-wrap>\n            Activity Speed:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.activity_speed}} Kmh\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item>\n        <ion-row>\n          <ion-col text-wrap>\n            Recovery Time\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.recovery_time}} mins\n          </ion-col>\n          <ion-col text-wrap>\n            Recovery Speed:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.recovery_speed}} Kmh\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item>\n        <ion-row>\n          <ion-col text-wrap>\n            Repeats:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.repeats}}\n          </ion-col>\n          <ion-col text-wrap>\n            Total Duration:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.total_duration}} mins\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </div>\n\n    <div *ngIf="schedule.workout_type == \'Strength\'">\n      <ion-item>\n        <ion-row *ngIf="schedule.exercise.balance && schedule.exercise.balance > 0">\n          <ion-col text-wrap>\n            Balance:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.balance}} seconds\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.plank && schedule.exercise.plank > 0">\n          <ion-col text-wrap>\n            Plank:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.plank}} seconds\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.pushups && schedule.exercise.pushups > 0">\n          <ion-col text-wrap>\n            Push Ups:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.pushups}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.one_leg_raise && schedule.exercise.one_leg_raise > 0">\n          <ion-col text-wrap>\n            One Leg Raise:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.one_leg_raise}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.leg_raise_both && schedule.exercise.leg_raise_both > 0">\n          <ion-col text-wrap>\n            Leg Raise Both:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.leg_raise_both}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.squats && schedule.exercise.squats > 0">\n          <ion-col text-wrap>\n            Squats:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.squats}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.crunches && schedule.exercise.crunches > 0">\n          <ion-col text-wrap>\n            Crunches:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.crunches}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="schedule.exercise.superman && schedule.exercise.superman > 0">\n          <ion-col text-wrap>\n            Superman:\n          </ion-col>\n          <ion-col text-wrap>\n            {{schedule.exercise.superman}} seconds\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n\n\n    </div>\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/schedules/schedule-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_schedule_api__["a" /* ScheduleApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], ScheduleDetails);
    return ScheduleDetails;
}());

//# sourceMappingURL=schedule-details.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardioProfiles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardioProfiles = /** @class */ (function () {
    function CardioProfiles(navCtrl, navParams, loadingController, respUtility) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.cardio_profiles = navParams.data;
        this.speeds = [];
        this.bpms = [];
        this.cardio_profiles.forEach(function (c) {
            _this.speeds.push(c.speed);
            _this.bpms.push(c.bpm);
        });
    }
    CardioProfiles.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter CardioProfiles');
        this.respUtility.trackView("CardioProfiles");
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.speeds,
                datasets: [
                    {
                        label: "Cardio Profile",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.bpms,
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], CardioProfiles.prototype, "lineCanvas", void 0);
    CardioProfiles = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cardio_profiles',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/cardio-profile/cardio-profiles.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>CardioProfiles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      Speed Kmph vs Heart Rate (BPM)\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list inset>\n\n    <ion-item no-lines>\n      <ion-row>\n        <ion-col text-center>\n          Speed Kmph\n        </ion-col>\n        <ion-col text-center>\n          Heart Rate (BPM)\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <div ion-item *ngFor="let cardio_profile of cardio_profiles">\n\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-center>\n            {{cardio_profile.speed}}\n          </ion-col>\n          <ion-col text-center>\n            {{cardio_profile.bpm}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/cardio-profile/cardio-profiles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], CardioProfiles);
    return CardioProfiles;
}());

//# sourceMappingURL=cardio-profiles.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserApi = /** @class */ (function () {
    function UserApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url = "users";
        this.users = [];
        this.user = {};
        console.log('UserApi Provider Created');
    }
    UserApi.prototype.getUsers = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + ".json").map(function (response) {
            _this.users = response.json();
            return _this.users;
        });
    };
    UserApi.prototype.getUserDetails = function (user_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + user_id + ".json").map(function (response) {
            _this.user = response.json();
            return _this.user;
        });
    };
    UserApi.prototype.sendVerificationCode = function () {
        return this.tokenService.post(this.base_url + "/send_sms_verification.json", {}).map(function (response) {
            var resp = response.json();
            return resp;
        });
    };
    UserApi.prototype.confirmVerificationCode = function (code) {
        return this.tokenService.post(this.base_url + "/verify_sms_verification.json", { "code": code }).map(function (response) {
            var resp = response.json();
            return resp;
        });
    };
    UserApi.prototype.createUser = function (user) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", user).map(function (response) {
            _this.user = response.json();
            return _this.user;
            //return response.status;
        });
    };
    UserApi.prototype.updateUser = function (user) {
        var _this = this;
        console.log("UserApi: Updating user");
        console.log(user);
        return this.tokenService.put(this.base_url + "/" + user.id + ".json", user).map(function (response) {
            _this.user = response.json();
            return _this.user;
        });
    };
    UserApi.prototype.deleteUser = function (user) {
        return this.tokenService.delete(this.base_url + "/" + user.id + ".json").map(function (response) {
            return response.status;
        });
    };
    UserApi.prototype.resendConfirmationEmail = function (email) {
        var _this = this;
        return this.tokenService.post(this.base_url + "/resend_confirmation.json", { "email": email }).map(function (response) {
            _this.user = response.json();
            return _this.user;
            //return response.status;
        });
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], UserApi);
    return UserApi;
}());

//# sourceMappingURL=user-api.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ion2_calendar__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_sentry_errorhandler__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_code_push__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_tabs__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_password_reset__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic2_rating__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_users_users__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_users_user_tabs__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_users_user_form__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_users_user_details__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_users_phone_verification__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_users_register__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_fitness_tests_fitness_tests__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_workouts_workouts__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_workouts_workout_details__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_goals_goals__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_goals_goal_details__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_goals_goal_form__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_stress_tests_stress_tests__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_stress_tests_stress_test_details__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_stress_tests_stress_test_form__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_medicals_medicals__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_medicals_medical_details__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_medicals_medical_form__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_food_logs_food_logs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_food_logs_food_log_details__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_food_logs_food_log_form__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_schedules_schedules__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_schedules_schedule_details__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_schedules_schedule_form__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_schedules_schedule_create___ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_cardio_profile_cardio_profiles__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_static_about__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_static_help__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_static_terms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_static_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_fitness_tests_fitness_test_details__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_diagnostic__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angular2_moment__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_54_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_company_api__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_workout_api__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_strength_workout_api__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_goal_api__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_stress_test_api__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_medical_api__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_food_log_api__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_fitness_test_api__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_push__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pipes_title_case_title_case__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pipes_utc_date_utc_date__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__providers_login_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__providers_home_events__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_google_analytics__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_schedule_api__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Import ionic2-rating module























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_password_reset__["a" /* PasswordReset */],
                __WEBPACK_IMPORTED_MODULE_20__pages_users_users__["a" /* Users */],
                __WEBPACK_IMPORTED_MODULE_21__pages_users_user_tabs__["a" /* UserTabs */],
                __WEBPACK_IMPORTED_MODULE_22__pages_users_user_form__["a" /* UserForm */],
                __WEBPACK_IMPORTED_MODULE_23__pages_users_user_details__["a" /* UserDetails */],
                __WEBPACK_IMPORTED_MODULE_26__pages_fitness_tests_fitness_tests__["a" /* FitnessTests */],
                __WEBPACK_IMPORTED_MODULE_27__pages_workouts_workouts__["a" /* Workouts */],
                __WEBPACK_IMPORTED_MODULE_28__pages_workouts_workout_details__["a" /* WorkoutDetails */],
                __WEBPACK_IMPORTED_MODULE_29__pages_goals_goals__["a" /* Goals */],
                __WEBPACK_IMPORTED_MODULE_30__pages_goals_goal_details__["a" /* GoalDetails */],
                __WEBPACK_IMPORTED_MODULE_31__pages_goals_goal_form__["a" /* GoalForm */],
                __WEBPACK_IMPORTED_MODULE_38__pages_food_logs_food_logs__["a" /* FoodLogs */],
                __WEBPACK_IMPORTED_MODULE_39__pages_food_logs_food_log_details__["a" /* FoodLogDetails */],
                __WEBPACK_IMPORTED_MODULE_40__pages_food_logs_food_log_form__["a" /* FoodLogForm */],
                __WEBPACK_IMPORTED_MODULE_32__pages_stress_tests_stress_tests__["a" /* StressTests */],
                __WEBPACK_IMPORTED_MODULE_33__pages_stress_tests_stress_test_details__["a" /* StressTestDetails */],
                __WEBPACK_IMPORTED_MODULE_34__pages_stress_tests_stress_test_form__["a" /* StressTestForm */],
                __WEBPACK_IMPORTED_MODULE_35__pages_medicals_medicals__["a" /* Medicals */],
                __WEBPACK_IMPORTED_MODULE_36__pages_medicals_medical_details__["a" /* MedicalDetails */],
                __WEBPACK_IMPORTED_MODULE_37__pages_medicals_medical_form__["a" /* MedicalForm */],
                __WEBPACK_IMPORTED_MODULE_41__pages_schedules_schedules__["a" /* Schedules */],
                __WEBPACK_IMPORTED_MODULE_42__pages_schedules_schedule_details__["a" /* ScheduleDetails */],
                __WEBPACK_IMPORTED_MODULE_43__pages_schedules_schedule_form__["a" /* ScheduleForm */],
                __WEBPACK_IMPORTED_MODULE_44__pages_schedules_schedule_create___["a" /* ScheduleCreate */],
                __WEBPACK_IMPORTED_MODULE_45__pages_cardio_profile_cardio_profiles__["a" /* CardioProfiles */],
                __WEBPACK_IMPORTED_MODULE_24__pages_users_phone_verification__["a" /* PhoneVerificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_users_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_68__pipes_title_case_title_case__["a" /* TitleCasePipe */],
                __WEBPACK_IMPORTED_MODULE_69__pipes_utc_date_utc_date__["a" /* UtcDatePipe */],
                __WEBPACK_IMPORTED_MODULE_46__pages_static_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_static_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_static_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_static_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_fitness_tests_fitness_test_details__["a" /* FitnessTestDetails */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_65__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_54_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_9_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_19_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/users/users.module#UsersModule', name: 'Users', segment: 'users', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_password_reset__["a" /* PasswordReset */],
                __WEBPACK_IMPORTED_MODULE_20__pages_users_users__["a" /* Users */],
                __WEBPACK_IMPORTED_MODULE_21__pages_users_user_tabs__["a" /* UserTabs */],
                __WEBPACK_IMPORTED_MODULE_22__pages_users_user_form__["a" /* UserForm */],
                __WEBPACK_IMPORTED_MODULE_23__pages_users_user_details__["a" /* UserDetails */],
                __WEBPACK_IMPORTED_MODULE_24__pages_users_phone_verification__["a" /* PhoneVerificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_users_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_fitness_tests_fitness_tests__["a" /* FitnessTests */],
                __WEBPACK_IMPORTED_MODULE_27__pages_workouts_workouts__["a" /* Workouts */],
                __WEBPACK_IMPORTED_MODULE_28__pages_workouts_workout_details__["a" /* WorkoutDetails */],
                __WEBPACK_IMPORTED_MODULE_38__pages_food_logs_food_logs__["a" /* FoodLogs */],
                __WEBPACK_IMPORTED_MODULE_39__pages_food_logs_food_log_details__["a" /* FoodLogDetails */],
                __WEBPACK_IMPORTED_MODULE_40__pages_food_logs_food_log_form__["a" /* FoodLogForm */],
                __WEBPACK_IMPORTED_MODULE_29__pages_goals_goals__["a" /* Goals */],
                __WEBPACK_IMPORTED_MODULE_30__pages_goals_goal_details__["a" /* GoalDetails */],
                __WEBPACK_IMPORTED_MODULE_31__pages_goals_goal_form__["a" /* GoalForm */],
                __WEBPACK_IMPORTED_MODULE_32__pages_stress_tests_stress_tests__["a" /* StressTests */],
                __WEBPACK_IMPORTED_MODULE_33__pages_stress_tests_stress_test_details__["a" /* StressTestDetails */],
                __WEBPACK_IMPORTED_MODULE_34__pages_stress_tests_stress_test_form__["a" /* StressTestForm */],
                __WEBPACK_IMPORTED_MODULE_35__pages_medicals_medicals__["a" /* Medicals */],
                __WEBPACK_IMPORTED_MODULE_36__pages_medicals_medical_details__["a" /* MedicalDetails */],
                __WEBPACK_IMPORTED_MODULE_37__pages_medicals_medical_form__["a" /* MedicalForm */],
                __WEBPACK_IMPORTED_MODULE_41__pages_schedules_schedules__["a" /* Schedules */],
                __WEBPACK_IMPORTED_MODULE_42__pages_schedules_schedule_details__["a" /* ScheduleDetails */],
                __WEBPACK_IMPORTED_MODULE_43__pages_schedules_schedule_form__["a" /* ScheduleForm */],
                __WEBPACK_IMPORTED_MODULE_44__pages_schedules_schedule_create___["a" /* ScheduleCreate */],
                __WEBPACK_IMPORTED_MODULE_45__pages_cardio_profile_cardio_profiles__["a" /* CardioProfiles */],
                __WEBPACK_IMPORTED_MODULE_46__pages_static_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_static_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_static_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_static_terms__["a" /* TermsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_code_push__["a" /* CodePush */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_64__providers_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_70__providers_login_provider__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_user_api__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_56__providers_company_api__["a" /* CompanyApi */],
                __WEBPACK_IMPORTED_MODULE_63__providers_fitness_test_api__["a" /* FitnessTestApi */],
                __WEBPACK_IMPORTED_MODULE_57__providers_workout_api__["a" /* WorkoutApi */],
                __WEBPACK_IMPORTED_MODULE_58__providers_strength_workout_api__["a" /* StrengthWorkoutApi */],
                __WEBPACK_IMPORTED_MODULE_62__providers_food_log_api__["a" /* FoodLogApi */],
                __WEBPACK_IMPORTED_MODULE_59__providers_goal_api__["a" /* GoalApi */],
                __WEBPACK_IMPORTED_MODULE_60__providers_stress_test_api__["a" /* StressTestApi */],
                __WEBPACK_IMPORTED_MODULE_61__providers_medical_api__["a" /* MedicalApi */],
                __WEBPACK_IMPORTED_MODULE_73__providers_schedule_api__["a" /* ScheduleApi */],
                __WEBPACK_IMPORTED_MODULE_66__providers_response_utility__["a" /* ResponseUtility */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_token__["a" /* Angular2TokenService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_71__providers_home_events__["a" /* HomeEvents */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10__services_sentry_errorhandler__["a" /* SentryErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Config = /** @class */ (function () {
    function Config() {
        this.dev = {
            //API_URL: "http://192.168.0.9:3000",
            API_URL: "http://localhost:3000",
            ENV: "dev",
            GA_ID: 'UA-103042137-1'
        };
        this.test = {
            API_URL: "http://localhost:3000",
            ENV: "test",
            GA_ID: 'UA-103042137-1'
        };
        this.staging = {
            //API_URL: "http://18.188.32.153:3000",
            API_URL: "http://localhost:3000",
            ENV: "prod",
            GA_ID: 'UA-103042137-1'
        };
        this.prod = {
            //API_URL = "http://13.127.127.104:3000",
            API_URL: "https://production.aaditlife.com",
            ENV: "prod",
            GA_ID: 'UA-103042137-1'
        };
        this.props = this.prod;
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 248,
	"./af.js": 248,
	"./ar": 249,
	"./ar-dz": 250,
	"./ar-dz.js": 250,
	"./ar-kw": 251,
	"./ar-kw.js": 251,
	"./ar-ly": 252,
	"./ar-ly.js": 252,
	"./ar-ma": 253,
	"./ar-ma.js": 253,
	"./ar-sa": 254,
	"./ar-sa.js": 254,
	"./ar-tn": 255,
	"./ar-tn.js": 255,
	"./ar.js": 249,
	"./az": 256,
	"./az.js": 256,
	"./be": 257,
	"./be.js": 257,
	"./bg": 258,
	"./bg.js": 258,
	"./bm": 259,
	"./bm.js": 259,
	"./bn": 260,
	"./bn.js": 260,
	"./bo": 261,
	"./bo.js": 261,
	"./br": 262,
	"./br.js": 262,
	"./bs": 263,
	"./bs.js": 263,
	"./ca": 264,
	"./ca.js": 264,
	"./cs": 265,
	"./cs.js": 265,
	"./cv": 266,
	"./cv.js": 266,
	"./cy": 267,
	"./cy.js": 267,
	"./da": 268,
	"./da.js": 268,
	"./de": 269,
	"./de-at": 270,
	"./de-at.js": 270,
	"./de-ch": 271,
	"./de-ch.js": 271,
	"./de.js": 269,
	"./dv": 272,
	"./dv.js": 272,
	"./el": 273,
	"./el.js": 273,
	"./en-au": 274,
	"./en-au.js": 274,
	"./en-ca": 275,
	"./en-ca.js": 275,
	"./en-gb": 276,
	"./en-gb.js": 276,
	"./en-ie": 277,
	"./en-ie.js": 277,
	"./en-il": 278,
	"./en-il.js": 278,
	"./en-nz": 279,
	"./en-nz.js": 279,
	"./eo": 280,
	"./eo.js": 280,
	"./es": 281,
	"./es-do": 282,
	"./es-do.js": 282,
	"./es-us": 283,
	"./es-us.js": 283,
	"./es.js": 281,
	"./et": 284,
	"./et.js": 284,
	"./eu": 285,
	"./eu.js": 285,
	"./fa": 286,
	"./fa.js": 286,
	"./fi": 287,
	"./fi.js": 287,
	"./fo": 288,
	"./fo.js": 288,
	"./fr": 289,
	"./fr-ca": 290,
	"./fr-ca.js": 290,
	"./fr-ch": 291,
	"./fr-ch.js": 291,
	"./fr.js": 289,
	"./fy": 292,
	"./fy.js": 292,
	"./gd": 293,
	"./gd.js": 293,
	"./gl": 294,
	"./gl.js": 294,
	"./gom-latn": 295,
	"./gom-latn.js": 295,
	"./gu": 296,
	"./gu.js": 296,
	"./he": 297,
	"./he.js": 297,
	"./hi": 298,
	"./hi.js": 298,
	"./hr": 299,
	"./hr.js": 299,
	"./hu": 300,
	"./hu.js": 300,
	"./hy-am": 301,
	"./hy-am.js": 301,
	"./id": 302,
	"./id.js": 302,
	"./is": 303,
	"./is.js": 303,
	"./it": 304,
	"./it.js": 304,
	"./ja": 305,
	"./ja.js": 305,
	"./jv": 306,
	"./jv.js": 306,
	"./ka": 307,
	"./ka.js": 307,
	"./kk": 308,
	"./kk.js": 308,
	"./km": 309,
	"./km.js": 309,
	"./kn": 310,
	"./kn.js": 310,
	"./ko": 311,
	"./ko.js": 311,
	"./ky": 312,
	"./ky.js": 312,
	"./lb": 313,
	"./lb.js": 313,
	"./lo": 314,
	"./lo.js": 314,
	"./lt": 315,
	"./lt.js": 315,
	"./lv": 316,
	"./lv.js": 316,
	"./me": 317,
	"./me.js": 317,
	"./mi": 318,
	"./mi.js": 318,
	"./mk": 319,
	"./mk.js": 319,
	"./ml": 320,
	"./ml.js": 320,
	"./mn": 321,
	"./mn.js": 321,
	"./mr": 322,
	"./mr.js": 322,
	"./ms": 323,
	"./ms-my": 324,
	"./ms-my.js": 324,
	"./ms.js": 323,
	"./mt": 325,
	"./mt.js": 325,
	"./my": 326,
	"./my.js": 326,
	"./nb": 327,
	"./nb.js": 327,
	"./ne": 328,
	"./ne.js": 328,
	"./nl": 329,
	"./nl-be": 330,
	"./nl-be.js": 330,
	"./nl.js": 329,
	"./nn": 331,
	"./nn.js": 331,
	"./pa-in": 332,
	"./pa-in.js": 332,
	"./pl": 333,
	"./pl.js": 333,
	"./pt": 334,
	"./pt-br": 335,
	"./pt-br.js": 335,
	"./pt.js": 334,
	"./ro": 336,
	"./ro.js": 336,
	"./ru": 337,
	"./ru.js": 337,
	"./sd": 338,
	"./sd.js": 338,
	"./se": 339,
	"./se.js": 339,
	"./si": 340,
	"./si.js": 340,
	"./sk": 341,
	"./sk.js": 341,
	"./sl": 342,
	"./sl.js": 342,
	"./sq": 343,
	"./sq.js": 343,
	"./sr": 344,
	"./sr-cyrl": 345,
	"./sr-cyrl.js": 345,
	"./sr.js": 344,
	"./ss": 346,
	"./ss.js": 346,
	"./sv": 347,
	"./sv.js": 347,
	"./sw": 348,
	"./sw.js": 348,
	"./ta": 349,
	"./ta.js": 349,
	"./te": 350,
	"./te.js": 350,
	"./tet": 351,
	"./tet.js": 351,
	"./tg": 352,
	"./tg.js": 352,
	"./th": 353,
	"./th.js": 353,
	"./tl-ph": 354,
	"./tl-ph.js": 354,
	"./tlh": 355,
	"./tlh.js": 355,
	"./tr": 356,
	"./tr.js": 356,
	"./tzl": 357,
	"./tzl.js": 357,
	"./tzm": 358,
	"./tzm-latn": 359,
	"./tzm-latn.js": 359,
	"./tzm.js": 358,
	"./ug-cn": 360,
	"./ug-cn.js": 360,
	"./uk": 361,
	"./uk.js": 361,
	"./ur": 362,
	"./ur.js": 362,
	"./uz": 363,
	"./uz-latn": 364,
	"./uz-latn.js": 364,
	"./uz.js": 363,
	"./vi": 365,
	"./vi.js": 365,
	"./x-pseudo": 366,
	"./x-pseudo.js": 366,
	"./yo": 367,
	"./yo.js": 367,
	"./zh-cn": 368,
	"./zh-cn.js": 368,
	"./zh-hk": 369,
	"./zh-hk.js": 369,
	"./zh-tw": 370,
	"./zh-tw.js": 370
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 496;

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentryErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_js__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_raven_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


__WEBPACK_IMPORTED_MODULE_1_raven_js___default.a
    .config('https://e681fb6177c2409b85c6673e8f1d2f98@sentry.io/1197974', {
    release: '1.0.0',
    dataCallback: function (data) {
        if (data.culprit) {
            data.culprit = data.culprit.substring(data.culprit.lastIndexOf('/'));
        }
        var stacktrace = data.stacktrace ||
            data.exception &&
                data.exception.values[0].stacktrace;
        if (stacktrace) {
            stacktrace.frames.forEach(function (frame) {
                frame.filename = frame.filename.substring(frame.filename.lastIndexOf('/'));
            });
        }
    }
}).install();
var SentryErrorHandler = /** @class */ (function (_super) {
    __extends(SentryErrorHandler, _super);
    function SentryErrorHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SentryErrorHandler.prototype.handleError = function (error) {
        _super.prototype.handleError.call(this, error);
        try {
            __WEBPACK_IMPORTED_MODULE_1_raven_js___default.a.captureException(error.originalError || error);
        }
        catch (e) {
            console.error(e);
        }
    };
    return SentryErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["IonicErrorHandler"]));

//# sourceMappingURL=sentry-errorhandler.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_users_user_tabs__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_users_user_form__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fitness_tests_fitness_tests__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_workouts_workouts__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_food_logs_food_logs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_schedules_schedules__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_goals_goals__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_goals_goal_form__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_medicals_medical_form__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_static_about__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_static_help__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_static_terms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_static_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_analytics__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_stress_tests_stress_tests__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home_tabs__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var MyApp = /** @class */ (function () {
    function MyApp(ga, codePush, platform, statusBar, splashScreen, push, tokenService, config, events, respUtility, loginProvider, alertCtrl) {
        this.ga = ga;
        this.codePush = codePush;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.tokenService = tokenService;
        this.config = config;
        this.events = events;
        this.respUtility = respUtility;
        this.loginProvider = loginProvider;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_26__pages_home_tabs__["a" /* TabsPage */];
        this.pages = [];
        this.initializeApp();
    }
    MyApp.prototype.initGA = function () {
        var _this = this;
        this.ga.startTrackerWithId(this.config.props["GA_ID"])
            .then(function () {
            console.log('Google analytics is ready now');
            //this.ga.debugMode();
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView('Main');
            // Tracker is ready
            // You can now track pages or set additional information such as AppVersion or UserId
        })
            .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        console.log("initPushNotification");
        if (!this.platform.is('cordova')) {
            console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
            return;
        }
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '600472014859'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log("registrationId ->", data.registrationId);
            // Lets store this in the push_token. This is because at this point the user may not be logged in
            // When he logs in we will save it
            _this.config.props["push_token"] = data.registrationId;
            console.log("this.config.props[push_token] = ", _this.config.props["push_token"]);
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message', data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                                //this.nav.push(DetailsPage, { message: data.message });
                            }
                        }]
                });
                confirmAlert.present();
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                //this.nav.push(DetailsPage, { message: data.message });
                console.log("Push notification clicked");
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        console.log(this.config.props["API_URL"]);
        this.platform.ready().then(function () {
            _this.tokenService.init({
                apiBase: _this.config.props["API_URL"],
                updatePasswordPath: "/auth/password"
            });
            _this.hideSplashScreen();
            _this.syncCodePush();
            _this.initGA();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.initPushNotification();
            _this.currentUser = _this.tokenService.currentUserData;
            _this.events.subscribe('user:login:success', function () {
                console.log("AppComponent: user:login:success");
                _this.currentUser = _this.tokenService.currentUserData;
                _this.ga.setUserId(_this.currentUser["id"]); // Set the user ID using signed-in user_id.
                if (_this.currentUser.initial_test_completed == true) {
                    _this.pages = [
                        { title: 'Goals', component: __WEBPACK_IMPORTED_MODULE_15__pages_goals_goals__["a" /* Goals */], params: {} },
                        { title: 'Medicals', component: __WEBPACK_IMPORTED_MODULE_17__pages_medicals_medical_form__["a" /* MedicalForm */], params: { load_from_server: true } },
                        { title: 'Tests', component: __WEBPACK_IMPORTED_MODULE_11__pages_fitness_tests_fitness_tests__["a" /* FitnessTests */], params: {} },
                        { title: 'Workouts', component: __WEBPACK_IMPORTED_MODULE_12__pages_workouts_workouts__["a" /* Workouts */], params: {} },
                        { title: 'Schedules', component: __WEBPACK_IMPORTED_MODULE_14__pages_schedules_schedules__["a" /* Schedules */], params: {} },
                        { title: 'Stress Tests', component: __WEBPACK_IMPORTED_MODULE_25__pages_stress_tests_stress_tests__["a" /* StressTests */], params: {} },
                        { title: 'Food Logs', component: __WEBPACK_IMPORTED_MODULE_13__pages_food_logs_food_logs__["a" /* FoodLogs */], params: {} },
                        { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_19__pages_static_about__["a" /* AboutPage */], params: {} },
                        { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_21__pages_static_terms__["a" /* TermsPage */], params: {} },
                        { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_22__pages_static_contact__["a" /* ContactPage */], params: {} },
                        { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_20__pages_static_help__["a" /* HelpPage */], params: {} },
                    ];
                }
                else {
                    _this.pages = [
                        { title: 'Goals', component: __WEBPACK_IMPORTED_MODULE_15__pages_goals_goals__["a" /* Goals */], params: {} },
                        { title: 'Medicals', component: __WEBPACK_IMPORTED_MODULE_17__pages_medicals_medical_form__["a" /* MedicalForm */], params: { load_from_server: true } },
                        { title: 'Tests', component: __WEBPACK_IMPORTED_MODULE_11__pages_fitness_tests_fitness_tests__["a" /* FitnessTests */], params: {} },
                        { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_19__pages_static_about__["a" /* AboutPage */], params: {} },
                        { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_21__pages_static_terms__["a" /* TermsPage */], params: {} },
                        { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_22__pages_static_contact__["a" /* ContactPage */], params: {} },
                        { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_20__pages_static_help__["a" /* HelpPage */], params: {} },
                    ];
                }
                if (_this.currentUser.accept_terms != true) {
                    // The terms have changed - we need to get him to accept the terms again
                    _this.respUtility.showWarning("Our terms have changed. Please read and accept the terms & conditions");
                    _this.edit_profile();
                }
                else if (_this.currentUser.goals_setup != true) {
                    // The terms have changed - we need to get him to accept the terms again
                    _this.respUtility.showWarning("Please setup your goals");
                    _this.setup_goals();
                }
                else if (_this.currentUser.medical_setup != true) {
                    // The terms have changed - we need to get him to accept the terms again
                    _this.respUtility.showWarning("Please enter your medical history");
                    _this.setup_medicals();
                }
            });
            _this.events.subscribe('user:logout:success', function () {
                console.log("HomePage: user:logout:success");
                _this.currentUser = null;
                _this.pages = [
                    { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_19__pages_static_about__["a" /* AboutPage */], params: {} },
                    { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_21__pages_static_terms__["a" /* TermsPage */], params: {} },
                    { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_22__pages_static_contact__["a" /* ContactPage */], params: {} },
                ];
            });
            if (_this.currentUser == null) {
                _this.loginProvider.auto_login(null);
                _this.pages = [
                    { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_19__pages_static_about__["a" /* AboutPage */], params: {} },
                    { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_21__pages_static_terms__["a" /* TermsPage */], params: {} },
                    { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_22__pages_static_contact__["a" /* ContactPage */], params: {} },
                ];
            }
        }, function (error) {
            console.log(error);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component, page.params);
    };
    MyApp.prototype.show_settings = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_users_user_tabs__["a" /* UserTabs */], this.currentUser);
    };
    MyApp.prototype.edit_profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_users_user_form__["a" /* UserForm */], this.currentUser);
    };
    MyApp.prototype.setup_goals = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_goals_goal_form__["a" /* GoalForm */], {});
    };
    MyApp.prototype.setup_medicals = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_medicals_medical_form__["a" /* MedicalForm */], {});
    };
    MyApp.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* Login */]);
    };
    MyApp.prototype.logout = function () {
        this.loginProvider.logout();
    };
    MyApp.prototype.syncCodePush = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            var updateDialogOptions = {
                updateTitle: "Updated available",
                optionalUpdateMessage: "A new app update is available. Install?",
                optionalIgnoreButtonLabel: "Not right now",
                optionalInstallButtonLabel: "Install Now"
            };
            var downloadProgress = function (progress) {
                console.log("Downloaded " + progress.receivedBytes + " of " + progress.totalBytes);
                //this.respUtility.showWarning(`Updating app. Please wait ....`);
            };
            var onSyncStatusChange_1 = function (syncStatus) {
                var messageText = null;
                switch (syncStatus) {
                    case __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["c" /* SyncStatus */].IN_PROGRESS:
                        messageText = 'An update is in progress ..';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["c" /* SyncStatus */].CHECKING_FOR_UPDATE:
                        messageText = 'Checking for update ..';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["c" /* SyncStatus */].DOWNLOADING_PACKAGE:
                        messageText = 'Downloading package ..';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["c" /* SyncStatus */].INSTALLING_UPDATE:
                        _this.splashScreen.show();
                        messageText = 'Installing update. Please wait ..';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["c" /* SyncStatus */].UPDATE_INSTALLED:
                        messageText = 'Installed the update ..';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["c" /* SyncStatus */].ERROR:
                        messageText = 'An error occurred :( ...';
                        break;
                    default:
                        //messageText = 'Update done.';
                        break;
                }
                if (messageText) {
                    _this.respUtility.showSuccess(messageText);
                }
            };
            this.codePush.sync({ updateDialog: updateDialogOptions, installMode: __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["b" /* InstallMode */].IMMEDIATE }, downloadProgress).subscribe(function (syncStatus) {
                console.log(syncStatus);
                onSyncStatusChange_1(syncStatus);
            });
            console.log("Initializing CodePush");
        }
        else {
            // Cordova not accessible, add mock data if necessary
            console.log("Not Initializing CodePush, load app on device");
        }
    };
    MyApp.prototype.hideSplashScreen = function () {
        var _this = this;
        if (this.splashScreen) {
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/app/app.html"*/'\n\n<ion-menu [content]="content" type="overlay" class="menu-bar">\n  <ion-header>\n    <ion-toolbar color="sidemenu">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <div *ngIf="currentUser != null">\n        <button menuClose ion-item (click)="show_settings()">\n          Settings\n        </button>\n        <button menuClose ion-item (click)="logout()">\n          Logout\n        </button>\n      </div>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">{{syncStatusMsg}}</ion-nav>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_24__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_code_push__["a" /* CodePush */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_8__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_7__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxValidator; });
var CheckboxValidator = /** @class */ (function () {
    function CheckboxValidator() {
    }
    CheckboxValidator.isChecked = function (control) {
        if (control.value != true) {
            return {
                "notChecked": true
            };
        }
        return null;
    };
    return CheckboxValidator;
}());

//# sourceMappingURL=checkbox-validator.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_details__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Users = /** @class */ (function () {
    function Users(navCtrl, navParams, loadingController, userApi, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.userApi = userApi;
        this.respUtility = respUtility;
    }
    Users.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter Users');
        this.respUtility.trackView("Users");
        var loader = this.loadingController.create({
            content: 'Loading Users..'
        });
        loader.present();
        this.userApi.getUsers().subscribe(function (users) {
            _this.users = users;
            console.log("Loaded users");
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
    };
    Users.prototype.getUserDetails = function (user) {
        this.respUtility.trackEvent("User", "Details", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__users_user_details__["a" /* UserDetails */], user);
    };
    Users = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-users',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/users/users.html"*/'<!--\n  Generated template for the Users page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      \n    <button ion-item *ngFor="let user of users" (click)=getUserDetails(user)>\n      <ion-thumbnail item-left>\n        <img [src]="user.image">\n      </ion-thumbnail> \n      \n      {{user.first_name}} {{user.last_name}} \n      <p>\n        {{user.phone}}\n      </p>\n      <p>\n        {{user.email}}\n      </p>\n       <p> \n        {{user.role}}\n      </p>\n      \n\n      <p>\n        <ion-badge\n          *ngIf="(user.role == \'Coach\') && user.verified != true" \n          item-right [color]="danger">\n          Pending Verification\n        </ion-badge> \n      \n      </p>\n\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/users/users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_api__["a" /* UserApi */], __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], Users);
    return Users;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_api__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhoneVerificationPage = /** @class */ (function () {
    function PhoneVerificationPage(navCtrl, navParams, formBuilder, userApi, loadingController, respUtility, events, tokenService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userApi = userApi;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.events = events;
        this.tokenService = tokenService;
        this.verification_code_sent = false;
        this.current_user = null;
        this.verification_code = null;
        this.error_msg = null;
        this.slideOneForm = formBuilder.group({
            verification_code: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
        this.current_user = this.tokenService.currentUserData;
        this.verification_code_sent = this.current_user.sms_verification_code != null;
    }
    PhoneVerificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneVerification');
        this.respUtility.trackView("PhoneVerification");
    };
    PhoneVerificationPage.prototype.send_verification_code = function () {
        var _this = this;
        this.respUtility.trackEvent("PhoneVerification", "SendCode", "click");
        this.verification_code_sent = true;
        var loader = this.loadingController.create({
            content: 'Sending Verification Code ...'
        });
        loader.present();
        this.userApi.sendVerificationCode().subscribe(function (resp) { console.log(resp); }, function (error) {
            _this.respUtility.showFailure(error);
            console.log(error);
            _this.verification_code_sent = false;
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    PhoneVerificationPage.prototype.confirmSendVerification = function () {
        this.respUtility.confirmAction(this.send_verification_code.bind(this), null, "This will send an SMS to your registered mobile number. Proceed?");
    };
    PhoneVerificationPage.prototype.verifiy_code = function () {
        var _this = this;
        this.respUtility.trackEvent("PhoneVerification", "VerifyCode", "click");
        var loader = this.loadingController.create({
            content: 'Verifiying Code ...'
        });
        loader.present();
        this.userApi.confirmVerificationCode(this.verification_code).subscribe(function (resp) {
            console.log(resp);
            if (resp["verified"] == true) {
                _this.events.publish("current_user:reload");
                _this.respUtility.showSuccess("Phone verified successfully");
                _this.navCtrl.pop();
            }
            else {
                _this.error_msg = "The code entered was not valid. Please try again";
                _this.respUtility.showWarning(_this.error_msg);
                _this.verification_code_sent = false;
            }
        }, function (error) {
            _this.respUtility.showFailure(error);
            console.log(error);
            _this.verification_code_sent = false;
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    PhoneVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'phone-verification',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/users/phone-verification.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Phone Verification</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="verification_page">\n\n    <ion-list text-wrap>\n\n        <form [formGroup]="slideOneForm" *ngIf="verification_code_sent">\n            <ion-item>\n                <ion-label floating>Verification Code</ion-label>\n                <ion-input name="verification_code" formControlName="verification_code" type="number" [(ngModel)]="verification_code" [class.invalid]="!slideOneForm.controls.verification_code.valid && \n                (slideOneForm.controls.verification_code.dirty)"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="!slideOneForm.controls.verification_code.valid && (slideOneForm.controls.verification_code.dirty)">\n                <p class="error-text">Must be 5 digits.</p>\n            </ion-item>\n\n            <p class="field-hint">\n                Enter the verification code sent to your phone via sms.\n            </p>\n        </form>\n    </ion-list>\n\n\n    <ion-row>\n\n        <ion-col *ngIf="!verification_code_sent">\n            <button name="send_btn" ion-button full color="primary" (click)="confirmSendVerification()">Send Verification Code</button>\n        </ion-col>\n        <ion-col *ngIf="verification_code_sent" col-6>\n            <button name="resend_btn" ion-button full color="primary" (click)="confirmSendVerification()">Resend Code</button>\n        </ion-col>\n        <ion-col *ngIf="verification_code_sent" col-6>\n            <button name="verify_btn" ion-button full color="success" (click)="verifiy_code()" >Verify Code</button>\n        </ion-col>\n\n    </ion-row>\n\n    \n    \n\n    <p class="center error-text" *ngIf="error_msg">{{error_msg}}</p>\n\n    <p class="center">Your registered phone number is {{current_user.phone}}</p>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/users/phone-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_api__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_token__["a" /* Angular2TokenService */]])
    ], PhoneVerificationPage);
    return PhoneVerificationPage;
}());

//# sourceMappingURL=phone-verification.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_goal_api__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoalDetails = /** @class */ (function () {
    function GoalDetails(navCtrl, navParams, goalApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.goalApi = goalApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.goal = this.navParams.data;
    }
    GoalDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter GoalDetails');
        this.respUtility.trackView("GoalDetails");
        // Always reload the goal from the server for a fresh copy
        this.loadGoal();
    };
    GoalDetails.prototype.loadGoal = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading Goal...'
        });
        loader.present();
        this.goalApi.getGoalDetails(this.goal.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded Goal");
            _this.goal = response;
            console.log("Loaded goal");
            console.log(_this.goal);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    GoalDetails.prototype.getGoalText = function (name) {
        return this.goalApi.getGoalText(name);
    };
    GoalDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'goal-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/goals/goal-details.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Goal Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider text-wrap color="secondary">{{getGoalText(goal.goal_name)}}</ion-item-divider>\n\n    <ion-item>\n      <ion-row>\n        <ion-col text-wrap>\n          {{goal.goal_desc}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/goals/goal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_goal_api__["a" /* GoalApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], GoalDetails);
    return GoalDetails;
}());

//# sourceMappingURL=goal-details.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressTestDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stress_test_api__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StressTestDetails = /** @class */ (function () {
    function StressTestDetails(navCtrl, navParams, stress_testApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stress_testApi = stress_testApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.stress_test = this.navParams.data;
    }
    StressTestDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter StressTestDetails');
        this.respUtility.trackView("StressTestDetails");
        // Always reload the stress_test from the server for a fresh copy
        this.loadStressTest();
    };
    StressTestDetails.prototype.loadStressTest = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading StressTest...'
        });
        loader.present();
        this.stress_testApi.getStressTestDetails(this.stress_test.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded StressTest");
            _this.stress_test = response;
            console.log("Loaded stress_test");
            console.log(_this.stress_test);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    StressTestDetails.prototype.getStressTestText = function (name) {
        return this.stress_testApi.getStressTestText(name);
    };
    StressTestDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stress-test-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/stress-tests/stress-test-details.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>StressTest Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider text-wrap color="secondary">{{getStressTestText(stress_test.stress_test_name)}}</ion-item-divider>\n\n    <ion-item>\n      <ion-row>\n        <ion-col text-wrap>\n          {{stress_test.stress_test_desc}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/stress-tests/stress-test-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_stress_test_api__["a" /* StressTestApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], StressTestDetails);
    return StressTestDetails;
}());

//# sourceMappingURL=stress-test-details.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Medicals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medical_form__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_medical_api__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Medicals = /** @class */ (function () {
    function Medicals(navCtrl, navParams, loadingController, medicalApi, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.medicalApi = medicalApi;
        this.respUtility = respUtility;
        this.medicals = [];
    }
    Medicals.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter Medicals');
        this.respUtility.trackView("Medicals");
        var loader = this.loadingController.create({
            content: 'Loading Medicals..'
        });
        loader.present();
        this.medicalApi.getMedicals().subscribe(function (medicals) {
            _this.medicals = medicals;
            console.log("Loaded medicals");
            console.log(Object.prototype.toString.call(_this.medicals));
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
    };
    Medicals.prototype.editMedicalDetails = function (medical) {
        this.respUtility.trackEvent("MedicalForm", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__medical_form__["a" /* MedicalForm */], medical);
    };
    Medicals.prototype.getMedicalText = function (name) {
        return this.medicalApi.getMedicalText(name);
    };
    Medicals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'medicals',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/medicals/medicals.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Medicals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  \n    <ion-list *ngFor="let medical of medicals" (click)=editMedicalDetails(medical)>\n\n      <ion-item-divider text-wrap color="secondary">The last time I had a medical check up was</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{medical.last_medical_checkup}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item-divider text-wrap color="secondary">Basic Medical Questions</ion-item-divider>\n      <ion-item>\n        <ion-label text-wrap>I have been told I have a heart condition that requires me to take up only physical activity recommended by a doctor.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q1"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I have in the past felt a pain in my chest when I do physical activity / exercise.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q2" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>In the past month I have had chest pain when not doing any physical activity.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q3"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I have in the past lost balance because I felt dizzy, or lost consciousness.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q4" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I have a bone or joint problem that could be made worse with physical activity.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q5"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am taking medication for blood pressure or a heart condition.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q6" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am diabetic.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q7"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I sometimes have difficulty breathing - especially in cold dry conditions.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q8" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am aware of some other reason why I should do physical activity.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q9"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>I am pregnant.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q10" ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>None of the things listed above apply to me.</ion-label>\n        <ion-checkbox [(ngModel)]="medical.q11"></ion-checkbox>\n      </ion-item>\n\n\n      <ion-item-divider text-wrap color="secondary">Any specific issue / concern that you wish to highlight for consideration as you get started with the program?</ion-item-divider>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col text-wrap>\n            {{medical.specific_issue}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/medicals/medicals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_medical_api__["a" /* MedicalApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], Medicals);
    return Medicals;
}());

//# sourceMappingURL=medicals.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medical_api__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicalDetails = /** @class */ (function () {
    function MedicalDetails(navCtrl, navParams, medicalApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicalApi = medicalApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.medical = this.navParams.data;
    }
    MedicalDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter MedicalDetails');
        this.respUtility.trackView("MedicalDetails");
        // Always reload the medical from the server for a fresh copy
        this.loadMedical();
    };
    MedicalDetails.prototype.loadMedical = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading Medical...'
        });
        loader.present();
        this.medicalApi.getMedicalDetails(this.medical.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded Medical");
            _this.medical = response;
            console.log("Loaded medical");
            console.log(_this.medical);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    MedicalDetails.prototype.getMedicalText = function (name) {
        return this.medicalApi.getMedicalText(name);
    };
    MedicalDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'medical-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/medicals/medical-details.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Medical Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider text-wrap color="secondary">{{getMedicalText(medical.medical_name)}}</ion-item-divider>\n\n    <ion-item>\n      <ion-row>\n        <ion-col text-wrap>\n          {{medical.medical_desc}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/medicals/medical-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_medical_api__["a" /* MedicalApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], MedicalDetails);
    return MedicalDetails;
}());

//# sourceMappingURL=medical-details.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodLogDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_food_log_api__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodLogDetails = /** @class */ (function () {
    function FoodLogDetails(navCtrl, navParams, food_logApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.food_logApi = food_logApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.food_log = this.navParams.data;
    }
    FoodLogDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter FoodLogDetails');
        this.respUtility.trackView("FoodLogDetails");
        // Always reload the food_log from the server for a fresh copy
        this.loadFoodLog();
    };
    FoodLogDetails.prototype.loadFoodLog = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading FoodLog...'
        });
        loader.present();
        this.food_logApi.getFoodLogDetails(this.food_log.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded FoodLog");
            _this.food_log = response;
            console.log("Loaded food_log");
            console.log(_this.food_log);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    FoodLogDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'food-log-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/food-logs/food-log-details.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>FoodLog Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider text-wrap color="secondary">{{getFoodLogText(food_log.food_log_name)}}</ion-item-divider>\n\n    <ion-item>\n      <ion-row>\n        <ion-col text-wrap>\n          {{food_log.food_log_desc}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/food-logs/food-log-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_food_log_api__["a" /* FoodLogApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], FoodLogDetails);
    return FoodLogDetails;
}());

//# sourceMappingURL=food-log-details.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressTestApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StressTestApi = /** @class */ (function () {
    function StressTestApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.stress_test_text = {
            "unexpected_upset": "How often have you been upset because of something that happened unexpectedly?",
            "unable_to_control": "How often have you felt that you were unable to control the important things in your life?",
            "nervous": "How often have you felt nervous and 'stressed'?",
            "confident": "How often have you felt confident about your ability to handle your personal problems?",
            "things_going_right": "How often have you felt that things were going your way?",
            "cannot_cope": "How often have you found that you could not cope with all the things that you had to do?",
            "control_irritation": "How often have you been able to control irritations in your life?",
            "top_of_things": "How often have you felt that you were on top of things?",
            "anger": "How often have you been angered because of things that were outside of your control?",
            "difficulties_piling": "How often have you felt difficulties were piling up so high that you could not overcome them?"
        };
        this.base_url = "stress_tests";
        this.stress_tests = [];
        this.stress_test = {};
        console.log('StressTestApi Provider Created');
    }
    StressTestApi.prototype.getStressTests = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + ".json").map(function (response) {
            _this.stress_tests = response.json();
            return _this.stress_tests;
        });
    };
    StressTestApi.prototype.getStressTestDetails = function (stress_test_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + stress_test_id + ".json").map(function (response) {
            _this.stress_test = response.json();
            return _this.stress_test;
        });
    };
    StressTestApi.prototype.createStressTest = function (stress_test) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", stress_test).map(function (response) {
            _this.stress_test = response.json();
            return _this.stress_test;
            //return response.status;
        });
    };
    StressTestApi.prototype.updateStressTest = function (stress_test) {
        var _this = this;
        console.log("StressTestApi: Updating stress_test");
        console.log(stress_test);
        return this.tokenService.put(this.base_url + "/" + stress_test.id + ".json", stress_test).map(function (response) {
            _this.stress_test = response.json();
            return _this.stress_test;
        });
    };
    StressTestApi.prototype.deleteStressTest = function (stress_test) {
        return this.tokenService.delete(this.base_url + "/" + stress_test.id + ".json").map(function (response) {
            return response.status;
        });
    };
    StressTestApi.prototype.getStressTestText = function (name) {
        return this.stress_test_text[name];
    };
    StressTestApi.prototype.getAllText = function () {
        return this.stress_test_text;
    };
    StressTestApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], StressTestApi);
    return StressTestApi;
}());

//# sourceMappingURL=stress-test-api.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessTestDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fitness_test_api__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workouts_workouts__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedules_schedules__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cardio_profile_cardio_profiles__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FitnessTestDetails = /** @class */ (function () {
    function FitnessTestDetails(navCtrl, navParams, fitness_testApi, alertController, toastController, loadingController, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fitness_testApi = fitness_testApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respUtility = respUtility;
        this.fitness_test = this.navParams.data;
    }
    FitnessTestDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter FitnessTestDetails');
        this.respUtility.trackView("FitnessTestDetails");
        // Always reload the fitness_test from the server for a fresh copy
        this.loadFitnessTest();
    };
    FitnessTestDetails.prototype.loadFitnessTest = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Loading FitnessTest...'
        });
        loader.present();
        this.fitness_testApi.getFitnessTestDetails(this.fitness_test.id).subscribe(function (response) {
            //this.respUtility.showSuccess("Loaded FitnessTest");
            _this.fitness_test = response;
            console.log("Loaded fitness_test");
            console.log(_this.fitness_test);
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    FitnessTestDetails.prototype.deactivateFitnessTest = function (fitness_test) {
        var _this = this;
        this.respUtility.trackEvent("FitnessTest", "Deactivate", "click");
        var loader = this.loadingController.create({
            content: 'Deactivating FitnessTest...'
        });
        fitness_test.active = false;
        loader.present();
        this.fitness_testApi.updateFitnessTest(fitness_test).subscribe(function (response) {
            _this.respUtility.showSuccess("Deactivated FitnessTest");
            _this.navCtrl.pop();
        }, function (error) {
            _this.respUtility.showFailure(error);
            loader.dismiss();
        }, function () { loader.dismiss(); });
    };
    FitnessTestDetails.prototype.confirmDeactivate = function (fitness_test) {
        this.respUtility.confirmAction(this.deactivateFitnessTest.bind(this), fitness_test, "Deactivate FitnessTest. Confirm?");
    };
    FitnessTestDetails.prototype.showWorkouts = function () {
        this.respUtility.trackEvent("Workout", "Details", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__workouts_workouts__["a" /* Workouts */], { fitness_test_id: this.fitness_test.id });
    };
    FitnessTestDetails.prototype.showSchedules = function () {
        this.respUtility.trackEvent("Schedule", "Details", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__schedules_schedules__["a" /* Schedules */], { fitness_test_id: this.fitness_test.id });
    };
    FitnessTestDetails.prototype.showCardioProfile = function () {
        this.respUtility.trackEvent("CardioProfiles", "Details", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cardio_profile_cardio_profiles__["a" /* CardioProfiles */], this.fitness_test.cardio_profiles);
    };
    FitnessTestDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fitness-test-details',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/fitness-tests/fitness-test-details.html"*/'<!--\n  Generated template for the FitnessTestDetails page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Fitness Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item color="primary" (click)="showCardioProfile()">\n      Cardio Profile\n      <ion-icon name="heart" item-end></ion-icon>\n    </ion-item>\n    <ion-item color="primary" (click)="showWorkouts()">\n      Workouts\n      <ion-icon name="pulse" item-end></ion-icon>\n    </ion-item>\n    <ion-item color="primary" (click)="showSchedules()">\n      Schedule\n      <ion-icon name="clock" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Date:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.test_date | date}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Weight:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.weight}} Kgs\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Height:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.height}} \n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Fat Percentage:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.fat_percentage}} %\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Body Age:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.body_age}} Years\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          BMI:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.bmi}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          RM:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.rm}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Visc Fat:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.visc_fat}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Skin Fat:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.sc_fat}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Muscle Percentage:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.muscle_percentage}} %\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Fat:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.fat_kg}} Kg\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Muscle:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.muscle_kg}} Kg\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Other:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.other_kg}} Kg\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Fat Loss:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.fat_loss}} Kg\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Muscle Gain:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.muscle_gain}} Kg\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Max Speed:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.max_speed}} Kmph\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Max Heart Rate:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.max_heart_rate}} Bpm\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>\n          Duration:\n        </ion-col>\n        <ion-col>\n          {{fitness_test.duration}} Mins\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col text-wrap>\n          Reason for Stopping:\n        </ion-col>\n        <ion-col text-wrap>\n          {{fitness_test.reason_for_stopping}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/fitness-tests/fitness-test-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_fitness_test_api__["a" /* FitnessTestApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_response_utility__["a" /* ResponseUtility */]])
    ], FitnessTestDetails);
    return FitnessTestDetails;
}());

//# sourceMappingURL=fitness-test-details.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TitleCasePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TitleCasePipe.prototype.transform = function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!input) {
            return '';
        }
        else {
            input = input.replace("_", " ");
            return input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        }
    };
    TitleCasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'titlecase',
        })
    ], TitleCasePipe);
    return TitleCasePipe;
}());

//# sourceMappingURL=title-case.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtcDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UtcDatePipe = /** @class */ (function () {
    function UtcDatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    UtcDatePipe.prototype.transform = function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!input) {
            return '';
        }
        else {
            var utc = __WEBPACK_IMPORTED_MODULE_1_moment__(input).utcOffset(0).toISOString();
            console.log("utc_date = " + utc);
            return utc;
        }
    };
    UtcDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'utc_date',
        })
    ], UtcDatePipe);
    return UtcDatePipe;
}());

//# sourceMappingURL=utc-date.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleApi = /** @class */ (function () {
    function ScheduleApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url = "schedules";
        this.schedules = [];
        this.schedule = {};
        console.log('ScheduleApi Provider Created');
    }
    ScheduleApi.prototype.getSchedules = function (fitness_test_id) {
        var _this = this;
        var endpoint = this.base_url + ".json";
        if (fitness_test_id) {
            endpoint = this.base_url + ".json?fitness_test_id=" + fitness_test_id;
        }
        return this.tokenService.get(endpoint).map(function (response) {
            _this.schedules = response.json();
            return _this.schedules;
        });
    };
    ScheduleApi.prototype.getScheduleDetails = function (schedule_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + schedule_id + ".json").map(function (response) {
            _this.schedule = response.json();
            return _this.schedule;
        });
    };
    ScheduleApi.prototype.getTodaysScheduleDetails = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + "/todays_schedule.json").map(function (response) {
            _this.schedule = response.json();
            return _this.schedule;
        });
    };
    ScheduleApi.prototype.createSchedule = function (schedule) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", schedule).map(function (response) {
            _this.schedule = response.json();
            return _this.schedule;
            //return response.status;
        });
    };
    ScheduleApi.prototype.generateSchedule = function (fitness_test_id, day_sequence) {
        var _this = this;
        var endpoint = this.base_url + "/generate_schedule.json";
        if (fitness_test_id) {
            endpoint = this.base_url + "/generate_schedule.json?fitness_test_id=" + fitness_test_id;
        }
        return this.tokenService.post(endpoint, { day_sequence: day_sequence }).map(function (response) {
            _this.schedule = response.json();
            return _this.schedule;
            //return response.status;
        });
    };
    ScheduleApi.prototype.updateSchedule = function (schedule) {
        var _this = this;
        console.log("ScheduleApi: Updating schedule");
        console.log(schedule);
        return this.tokenService.put(this.base_url + "/" + schedule.id + ".json", schedule).map(function (response) {
            _this.schedule = response.json();
            return _this.schedule;
        });
    };
    ScheduleApi.prototype.deleteSchedule = function (schedule) {
        return this.tokenService.delete(this.base_url + "/" + schedule.id + ".json").map(function (response) {
            return response.status;
        });
    };
    ScheduleApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], ScheduleApi);
    return ScheduleApi;
}());

//# sourceMappingURL=schedule-api.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseUtility; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResponseUtility = /** @class */ (function () {
    function ResponseUtility(ga, http, alertController, modalController, toastController) {
        this.ga = ga;
        this.http = http;
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        console.log('ResponseUtility Provider Created');
    }
    ResponseUtility.prototype.showMsg = function (msg) {
        try {
            this.toast.dismiss();
        }
        catch (e) { }
        this.toast = this.toastController.create({
            message: msg,
            duration: 4000,
            position: 'bottom',
            dismissOnPageChange: false,
            showCloseButton: false
        });
        this.toast.present();
        console.log(msg);
    };
    ResponseUtility.prototype.showSuccess = function (msg) {
        try {
            this.toast.dismiss();
        }
        catch (e) { }
        this.toast = this.toastController.create({
            message: msg,
            duration: 4000, cssClass: "toast-success",
            position: 'bottom',
            dismissOnPageChange: false,
            showCloseButton: false
        });
        this.toast.present();
        console.log(msg);
    };
    ResponseUtility.prototype.showWarning = function (msg) {
        try {
            this.toast.dismiss();
        }
        catch (e) { }
        this.toast = this.toastController.create({
            message: msg,
            duration: 4000, cssClass: "toast-warning",
            position: 'bottom',
            dismissOnPageChange: false,
            showCloseButton: false
        });
        this.toast.present();
        console.log(msg);
    };
    ResponseUtility.prototype.showFailure = function (error, msg) {
        if (msg === void 0) { msg = null; }
        if (error.status == 401) {
            var body = JSON.parse(error._body);
            this.showWarning(body.errors);
        }
        else if (error.status == 422) {
            var body = JSON.parse(error._body);
            this.showWarning(body.errors.full_messages);
        }
        else {
            this.showFailureAlert(error, msg);
        }
    };
    ResponseUtility.prototype.showFailureAlert = function (error, msg) {
        if (msg === void 0) { msg = null; }
        if (!msg) {
            msg = 'The operations you were trying failed. Please contact the administrator. ';
        }
        var confirm = this.alertController.create({
            title: 'Error',
            cssClass: 'error-alert',
            message: msg + (" </br> " + error),
            buttons: [
                { text: 'OK' }
            ]
        });
        confirm.present();
        console.log(msg);
    };
    ResponseUtility.prototype.confirmDelete = function (deleteEntityFn, entity, title) {
        if (title === void 0) { title = "Delete"; }
        var confirm = this.alertController.create({
            title: title,
            cssClass: 'delete-alert',
            message: 'Are you sure you want to proceed ?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'destructive',
                    handler: function () {
                        deleteEntityFn(entity);
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    ResponseUtility.prototype.confirmAction = function (actionFn, entity, msg) {
        var confirm = this.alertController.create({
            title: "Confirm",
            message: msg,
            buttons: [
                {
                    text: 'Yes',
                    handler: function () { actionFn(entity); }
                },
                { text: 'No' }
            ]
        });
        confirm.present();
    };
    ResponseUtility.prototype.popup = function (title, msg) {
        var confirm = this.alertController.create({
            title: title,
            message: msg,
            buttons: [
                { text: 'Ok' }
            ]
        });
        confirm.present();
    };
    ResponseUtility.prototype.trackView = function (view) {
        this.ga.trackView(view);
    };
    ResponseUtility.prototype.trackEvent = function (category, action, label, value, newSession) {
        if (value === void 0) { value = null; }
        if (newSession === void 0) { newSession = false; }
        this.ga.trackEvent(category, action, label, value, newSession);
    };
    ResponseUtility.prototype.trackMetric = function (key, value) {
        this.ga.trackMetric(key, value);
    };
    ResponseUtility = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ResponseUtility);
    return ResponseUtility;
}());

//# sourceMappingURL=response-utility.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_raven_js__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_raven_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(tokenService, loadingController, storage, events, config, userApi, respUtility) {
        this.tokenService = tokenService;
        this.loadingController = loadingController;
        this.storage = storage;
        this.events = events;
        this.config = config;
        this.userApi = userApi;
        this.respUtility = respUtility;
        console.log('Hello LoginProvider Provider');
    }
    LoginProvider.prototype.logout = function () {
        var _this = this;
        console.log("logout called");
        this.tokenService.signOut().subscribe(function (res) {
            _this.respUtility.showMsg("Logged out");
            _this.events.publish('user:logout:success');
            _this.storage.clear();
        }, function (error) {
            console.log(error);
            _this.respUtility.showWarning("Could not log user out at this time");
            _this.events.publish('user:logout:success');
            _this.storage.clear();
        });
    };
    LoginProvider.prototype.auto_login = function (navCtrl) {
        var _this = this;
        if (navCtrl === void 0) { navCtrl = null; }
        var email = "";
        var password = "";
        this.storage
            .get("email").then(function (emailval) {
            email = emailval;
            if (email) {
                _this.storage
                    .get("password").then(function (pval) {
                    password = pval;
                    if (password) {
                        console.log("auto_login: email = " + email + ", password = " + password);
                        _this.login(email, password, navCtrl);
                    }
                });
            }
        });
    };
    LoginProvider.prototype.login = function (email, password, navCtrl) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Login in progress ...'
        });
        loader.present();
        this.tokenService.signIn({ email: email, password: password }).subscribe(function (res) {
            console.log(res);
            _this.storage.set("email", email);
            _this.storage.set("password", password);
            _this.storage.set("push_token", _this.config.props["push_token"]);
            // Save the push token now that the user is logged in
            console.log(_this.tokenService.currentUserData);
            // Publish event - so other listners can get the newly logged in user
            _this.events.publish('user:login:success');
            // Send this to sentry - so any errors can be logged with this user data
            __WEBPACK_IMPORTED_MODULE_7_raven_js___default.a.setUserContext({
                email: email,
                id: _this.tokenService.currentUserData["id"].toString()
            });
            var user = {
                id: _this.tokenService.currentUserData.id,
                push_token: _this.config.props["push_token"],
                user: { id: _this.tokenService.currentUserData.id, push_token: _this.config.props["push_token"] }
            };
            _this.userApi.updateUser(user).subscribe(function (resp) {
                console.log("Saved push_token to server");
            }, function (error) {
                console.log("Failed to save push_token to server. Notification will not work !!");
            });
            loader.dismiss();
            if (navCtrl != null) {
                navCtrl.popToRoot();
            }
        }, function (error) {
            console.log(error);
            loader.dismiss();
            _this.respUtility.showFailure(error);
            _this.events.publish('user:login:failed');
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__user_api__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_6__response_utility__["a" /* ResponseUtility */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login-provider.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_terms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_checkbox_validator__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_company_api__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserForm = /** @class */ (function () {
    function UserForm(navCtrl, navParams, formBuilder, userApi, companyApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userApi = userApi;
        this.companyApi = companyApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.submitAttempt = false;
        this.user = this.navParams.data;
        if (this.user["company_id"] && this.user["company_id"] == -1) {
            this.companyApi.getCompanies().subscribe(function (companies) {
                _this.companies = companies;
                console.log("Loaded companies");
            }, function (error) { _this.respUtility.showFailure(error); }, function () { });
        }
        this.slideOneForm = formBuilder.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[a-zA-Z0-9_\\-.]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[a-zA-Z0-9_\\-.]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9\\-.]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            confirm_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(1)])],
            birth_year: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^\\d+$')])],
            company_id: [''],
            accept_terms: [false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__providers_checkbox_validator__["a" /* CheckboxValidator */].isChecked, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^\\d+$')])],
        }, { "validator": this.isMatching });
        // Password may not be visible, hence disable validations 
        if (this.user["id"]) {
            this.slideOneForm.controls["password"].disable();
            this.slideOneForm.controls["password"].clearValidators();
            this.slideOneForm.controls["confirm_password"].disable();
            this.slideOneForm.controls["confirm_password"].clearValidators();
            console.log("Disabled password", this.slideOneForm.controls.password.disabled);
        }
    }
    UserForm.prototype.onTermsChecked = function ($event) {
        if (!$event.checked) {
            this.slideOneForm.patchValue({ accept_terms: null });
        }
    };
    UserForm.prototype.isMatching = function (group) {
        var firstPassword = group.controls['password'].value;
        var secondPassword = group.controls['confirm_password'].value;
        console.log("password check " + firstPassword + ", " + secondPassword);
        if ((firstPassword && secondPassword) && (firstPassword != secondPassword)) {
            console.log("passwords mismatch");
            group.controls['confirm_password'].setErrors({ "pw_mismatch": true });
            return { "pw_mismatch": true };
        }
        else {
            return null;
        }
    };
    UserForm.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserForm');
        this.respUtility.trackView("UserForm");
    };
    UserForm.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("User", "Save", "click");
        this.submitAttempt = true;
        //console.log(this.user);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        if (this.slideOneForm.invalid) {
            //this.signupSlider.slideTo(0);
            console.log("Invalid form ", this.slideOneForm.errors);
        }
        else {
            this.submitAttempt = false;
            loader.present();
            if (this.user["id"]) {
                this.userApi.updateUser(this.user).subscribe(function (user) {
                    _this.respUtility.showSuccess('User saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
            else {
                this.register(this.user, loader);
            }
        }
    };
    UserForm.prototype.register = function (user, loader) {
        var _this = this;
        this.respUtility.trackEvent("User", "Register", "click");
        this.tokenService.registerAccount(user).subscribe(function (res) {
            console.log(res);
            _this.respUtility.showSuccess("Please check your email for verification link. Verfiy your email & then login.");
            _this.navCtrl.popToRoot();
        }, function (error) {
            console.log(error);
            if (error.status == 401) {
                var body = JSON.parse(error._body);
                _this.respUtility.showWarning(body.errors);
            }
            else {
                _this.respUtility.showFailure(error);
                loader.dismiss();
            }
        }, function () { loader.dismiss(); });
    };
    UserForm.prototype.show_terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__static_terms__["a" /* TermsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('signupSlider'),
        __metadata("design:type", Object)
    ], UserForm.prototype, "signupSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('title'),
        __metadata("design:type", Object)
    ], UserForm.prototype, "title", void 0);
    UserForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-user-form',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/users/user-form.html"*/'<!--\n  Generated template for the UserForm pemail.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pemails and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n      <ion-item id="company_id" *ngIf="companies">\n        <ion-label floating>Company</ion-label>\n        <ion-select name="company_id" [(ngModel)]="user.company_id" [class.invalid]="!slideOneForm.controls.company_id.valid && (slideOneForm.controls.company_id.dirty || submitAttempt)"\n          formControlName="company_id">\n          <ion-option  *ngFor="let company of companies" [value]="company.id">{{company.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      \n      <ion-item id="gender">\n        <ion-label floating>Gender</ion-label>\n        <ion-select name="gender" [(ngModel)]="user.gender" [class.invalid]="!slideOneForm.controls.gender.valid && (slideOneForm.controls.gender.dirty || submitAttempt)"\n          formControlName="gender">\n          <ion-option value="M">Male</ion-option>\n          <ion-option value="F">Female</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input name="first_name" formControlName="first_name" type="text" [(ngModel)]="user.first_name" [class.invalid]="!slideOneForm.controls.first_name.valid && (slideOneForm.controls.first_name.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.first_name.valid  && (slideOneForm.controls.first_name.dirty || submitAttempt)">\n        <p class="error-text">Please enter a valid name.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input name="last_name" formControlName="last_name" type="text" [(ngModel)]="user.last_name" [class.invalid]="!slideOneForm.controls.last_name.valid && (slideOneForm.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.last_name.valid  && (slideOneForm.controls.last_name.dirty || submitAttempt)">\n        <p class="error-text">Please enter a valid name.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input name="email" formControlName="email" type="email" [(ngModel)]="user.email" [class.invalid]="!slideOneForm.controls.email.valid && (slideOneForm.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.email.valid  && (slideOneForm.controls.email.dirty || submitAttempt)">\n        <p class="error-text">Please enter a valid email.</p>\n      </ion-item>\n\n      <ion-item *ngIf="!user.id">\n        <ion-label floating>Password</ion-label>\n        <ion-input name="password" formControlName="password" type="password" [(ngModel)]="user.password" [class.invalid]="!slideOneForm.controls.password.valid && (slideOneForm.controls.password.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!slideOneForm.controls.password.valid && (slideOneForm.controls.password.dirty || submitAttempt)">\n        <p class="error-text">Must be min 6 chars long.</p>\n      </ion-item>\n\n\n      <ion-item *ngIf="!user.id">\n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input name="confirm_password" formControlName="confirm_password" type="password" [(ngModel)]="confirm_password" [class.invalid]="!slideOneForm.controls.confirm_password.valid && (slideOneForm.controls.confirm_password.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.confirm_password.valid && (slideOneForm.controls.confirm_password.dirty || submitAttempt)">\n        <p class="error-text">Passwords dont match.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Phone</ion-label>\n        <ion-input name="phone" formControlName="phone" type="number" [(ngModel)]="user.phone" [class.invalid]="!slideOneForm.controls.phone.valid && (slideOneForm.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.phone.valid  && (slideOneForm.controls.phone.dirty || submitAttempt)">\n        <p class="error-text">Enter a valid 11 digit phone number starting with 0.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Birth Year</ion-label>\n        <ion-input name="birth_year" formControlName="birth_year" type="number" [(ngModel)]="user.birth_year" [class.invalid]="!slideOneForm.controls.birth_year.valid && (slideOneForm.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.birth_year.valid  && (slideOneForm.controls.birth_year.dirty || submitAttempt)">\n        <p class="error-text">Enter a valid birth year in YYYY format.</p>\n      </ion-item>\n\n\n      <div *ngIf="user.role == \'Coach\'">\n\n\n      </div>\n\n      <div text-wrap>\n        <ion-item>\n          <ion-checkbox id="accept_terms" [(ngModel)]="user.accept_terms" \n          formControlName="accept_terms" type="text" \n          (ionChange)="onTermsChecked($event)"></ion-checkbox>\n          <ion-label text-warp>I have read and agree to the Terms & Conditions</ion-label>\n        </ion-item>\n        <button ion-button full clear color="primary" (click)="show_terms()">Terms & Conditions</button>\n        <ion-item *ngIf="!slideOneForm.controls.accept_terms.valid  && (slideOneForm.controls.accept_terms.dirty || submitAttempt)">\n          <p class="error-text">Please accept the T&C.</p>\n        </ion-item>\n      </div>\n\n    </form>\n\n  </ion-list>\n\n  <button ion-button full color="primary" (click)="save()" [disabled]="slideOneForm.invalid">Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/users/user-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_api__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_9__providers_company_api__["a" /* CompanyApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], UserForm);
    return UserForm;
}());

//# sourceMappingURL=user-form.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.saveAggrement = function () {
        console.log('saved agreement');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/static/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Disclaimer / Liability Waiver</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n\n      <p>\n        Aadit Life recommends that you consult with your physician before beginning any exercise program. While the program is conservative,\n        and workouts are based on a wellness evaluation that is conducted, there is still the possibility that an existing\n        condition could be aggravated during the wellness evaluation - or over the course of the program. You should understand\n        that when participating in any exercise, or exercise program, there is the possibility of physical injury. When signing\n        up for the program, and doing the activities that are part of the program, you agree that you do so at your own risk,\n        are voluntarily participating in these activities, assume all risk of injury to yourself, and agree to release and\n        discharge Aadit Life Wellness (OPC) Pvt. Ltd. from any and all claims or causes of action, known or unknown, that\n        may happen during the program.\n      </p>\n      <p>\n        <br/>\n\n      </p>\n      <p>In checking the box below I confirm that I have read, understood and agree to the terms of the Disclaimer / Liability\n        Waiver\n      </p>\n    \n      \n        <ul class = "list">\n            <li class = "item item-checkbox checkbox-positive" (click)="saveAggrement()">\n               I Agree\n               <label class = "checkbox">\n                  <input type = "checkbox" />\n               </label>\n            </li>\n         \n</ul>\n          \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/static/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workouts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_details__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_workout_api__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_strength_workout_api__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Workouts = /** @class */ (function () {
    function Workouts(navCtrl, navParams, loadingController, workout_api, strength_workout_api, respUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.workout_api = workout_api;
        this.strength_workout_api = strength_workout_api;
        this.respUtility = respUtility;
        this.showNavbar = true;
        this.fitness_test_id = null;
        if (this.navParams.data["fitness_test_id"] !== null) {
            this.fitness_test_id = this.navParams.data["fitness_test_id"];
        }
    }
    Workouts.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter Workouts');
        this.respUtility.trackView("Workouts");
        var loader = this.loadingController.create({
            content: 'Loading Workouts..'
        });
        loader.present();
        this.workout_api.getWorkouts(this.fitness_test_id).subscribe(function (workouts) {
            _this.workouts = workouts;
            console.log("Loaded workouts");
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
        this.strength_workout_api.getStrengthWorkouts(this.fitness_test_id).subscribe(function (strength_workouts) {
            _this.strength_workouts = strength_workouts;
            console.log("Loaded strength_workouts");
        }, function (error) { _this.respUtility.showFailure(error); }, function () { });
    };
    Workouts.prototype.getWorkoutDetails = function (workout) {
        this.respUtility.trackEvent("Workout", "Details", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_details__["a" /* WorkoutDetails */], workout);
    };
    Workouts.prototype.getStrengthWorkoutDetails = function (strength_workout) {
        this.respUtility.trackEvent("StrengthWorkout", "Details", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_details__["a" /* WorkoutDetails */], strength_workout);
    };
    Workouts.prototype.hideNavbar = function () {
        this.showNavbar = false;
        // You should resize the content to use the space left by the navbar
        this.content.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], Workouts.prototype, "content", void 0);
    Workouts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workouts',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/workouts/workouts.html"*/'<ion-header>\n\n  <ion-navbar color="primary" *ngIf="showNavbar">\n    <ion-title>Workouts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <button ion-item *ngFor="let workout of workouts" (click)=getWorkoutDetails(workout)>\n\n        <ion-item-divider text-center color="secondary">{{workout.workout_type}}</ion-item-divider>\n        <ion-item>\n          <ion-row>\n            <ion-col text-wrap>\n              Activity Time:\n            </ion-col>\n            <ion-col text-wrap>\n              {{workout.activity_time}} mins\n            </ion-col>\n            <ion-col text-wrap>\n              Activity Speed:\n            </ion-col>\n            <ion-col text-wrap>\n              {{workout.activity_speed}} Kmh\n            </ion-col>\n          </ion-row>\n        </ion-item>\n    \n        <ion-item>\n          <ion-row>\n            <ion-col text-wrap>\n              Recovery Time\n            </ion-col>\n            <ion-col text-wrap>\n              {{workout.recovery_time}} mins\n            </ion-col>\n            <ion-col text-wrap>\n              Recovery Speed:\n            </ion-col>\n            <ion-col text-wrap>\n              {{workout.recovery_speed}} Kmh\n            </ion-col>\n          </ion-row>\n        </ion-item>\n    \n        <ion-item>\n          <ion-row>\n            <ion-col text-wrap>\n              Repeats:\n            </ion-col>\n            <ion-col text-wrap>\n              {{workout.repeats}}\n            </ion-col>\n            <ion-col text-wrap>\n              Total Duration:\n            </ion-col>\n            <ion-col text-wrap>\n              {{workout.total_duration}} mins\n            </ion-col>\n          </ion-row>\n        </ion-item>\n    \n    \n    </button>\n\n    <button ion-item *ngFor="let strength_workout of strength_workouts" (click)=getStrengthWorkoutDetails(workout)>\n\n      <ion-item-divider text-center color="secondary">Strength</ion-item-divider>\n      <ion-item>\n        <ion-row *ngIf="strength_workout.balance && strength_workout.balance > 0">\n          <ion-col text-wrap>\n            Balance:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.balance}} seconds\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.plank && strength_workout.plank > 0">\n          <ion-col text-wrap>\n            Plank:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.plank}} seconds\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.pushups && strength_workout.pushups > 0">\n          <ion-col text-wrap>\n            Push Ups:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.pushups}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.one_leg_raise && strength_workout.one_leg_raise > 0">\n          <ion-col text-wrap>\n            One Leg Raise:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.one_leg_raise}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.leg_raise_both && strength_workout.leg_raise_both > 0">\n          <ion-col text-wrap>\n            Leg Raise Both:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.leg_raise_both}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.squats && strength_workout.squats > 0">\n          <ion-col text-wrap>\n            Squats:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.squats}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.crunches && strength_workout.crunches > 0">\n          <ion-col text-wrap>\n            Crunches:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.crunches}} count\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="strength_workout.superman && strength_workout.superman > 0">\n          <ion-col text-wrap>\n            Superman:\n          </ion-col>\n          <ion-col text-wrap>\n            {{strength_workout.superman}} seconds\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </button>\n  \n  </ion-list>\n\n  \n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/workouts/workouts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_workout_api__["a" /* WorkoutApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_strength_workout_api__["a" /* StrengthWorkoutApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */]])
    ], Workouts);
    return Workouts;
}());

//# sourceMappingURL=workouts.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodLogApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodLogApi = /** @class */ (function () {
    function FoodLogApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.base_url = "food_logs";
        this.food_logs = [];
        this.food_log = {};
        console.log('FoodLogApi Provider Created');
    }
    FoodLogApi.prototype.getFoodLogs = function (day) {
        var _this = this;
        var endpoint = this.base_url + ".json?day=" + day;
        return this.tokenService.get(endpoint).map(function (response) {
            _this.food_logs = response.json();
            return _this.food_logs;
        });
    };
    FoodLogApi.prototype.getFoodLogDetails = function (food_log_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + food_log_id + ".json").map(function (response) {
            _this.food_log = response.json();
            return _this.food_log;
        });
    };
    FoodLogApi.prototype.createFoodLog = function (food_log) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", food_log).map(function (response) {
            _this.food_log = response.json();
            return _this.food_log;
            //return response.status;
        });
    };
    FoodLogApi.prototype.updateFoodLog = function (food_log) {
        var _this = this;
        console.log("FoodLogApi: Updating food_log");
        console.log(food_log);
        return this.tokenService.put(this.base_url + "/" + food_log.id + ".json", food_log).map(function (response) {
            _this.food_log = response.json();
            return _this.food_log;
        });
    };
    FoodLogApi.prototype.deleteFoodLog = function (food_log) {
        return this.tokenService.delete(this.base_url + "/" + food_log.id + ".json").map(function (response) {
            return response.status;
        });
    };
    FoodLogApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], FoodLogApi);
    return FoodLogApi;
}());

//# sourceMappingURL=food-log-api.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schedules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_form__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_schedule_api__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_create___ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Schedules = /** @class */ (function () {
    function Schedules(navCtrl, navParams, loadingController, scheduleApi, respUtility, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.scheduleApi = scheduleApi;
        this.respUtility = respUtility;
        this.modalCtrl = modalCtrl;
        this.fitness_test_id = null;
        this.date = '2018-01-01';
        this.options = {
            from: new Date(2000, 0, 1),
        };
        if (this.navParams.data["fitness_test_id"] !== null) {
            this.fitness_test_id = this.navParams.data["fitness_test_id"];
        }
    }
    Schedules.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter Schedules');
        this.respUtility.trackView("Schedules");
        var loader = this.loadingController.create({
            content: 'Loading Schedules..'
        });
        loader.present();
        this.scheduleApi.getSchedules(this.fitness_test_id).subscribe(function (schedules) {
            _this.schedules = schedules;
            if (!!_this.schedule) {
            }
            console.log("Loaded schedules");
            console.log(schedules);
        }, function (error) { _this.respUtility.showFailure(error); loader.dismiss(); }, function () { loader.dismiss(); });
    };
    Schedules.prototype.rateSchedule = function (schedule) {
        this.respUtility.trackEvent("Schedule", "Form", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schedule_form__["a" /* ScheduleForm */], schedule);
    };
    Schedules.prototype.createSchedule = function () {
        console.log("ScheduleCreate called");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__schedule_create___["a" /* ScheduleCreate */], {});
    };
    Schedules = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'schedules',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/schedules/schedules.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title *ngIf="fitness_test_id == null">Schedule For This Week</ion-title>\n    <ion-title *ngIf="fitness_test_id != null">Schedule For Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-calendar class="calender-height" [(ngModel)]="date" (onChange)="onChange($event)" [options]="options" type="string" format="YYYY-MM-DD">\n  </ion-calendar>\n\n\n  {{schedule?.workout_type}}\n\n\n  <div *ngIf="schedule?.workout_type != \'Strength\'" class="content-height">\n    <ion-grid class="add-border height-70">\n      <ion-row>\n        <ion-col col-4>\n\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-icon name="speedometer"></ion-icon> Speed (kmph)\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-icon name="clock"></ion-icon> Time (mins)\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-4>\n          <ion-icon name="bicycle"></ion-icon> Activity\n        </ion-col>\n\n        <ion-col col-4>\n          {{schedule?.exercise?.activity_speed}}\n        </ion-col>\n\n        <ion-col col-4>\n          {{schedule?.exercise?.activity_time}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-4>\n          <ion-icon name="man"></ion-icon> Rest\n        </ion-col>\n\n        <ion-col col-4>\n          {{schedule?.exercise?.recovery_speed}}\n        </ion-col>\n\n        <ion-col col-4>\n          {{schedule?.exercise?.recovery_time}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!--   <ion-grid>\n        <ion-row>\n            <ion-col col-4>\n              <ion-icon name="repeat"></ion-icon> Repeat\n            </ion-col>\n  \n            <ion-col col-3>\n                {{schedule?.exercise?.repeats}}\n            </ion-col>\n  \n            <ion-col col-4>\n              <ion-icon name="alarm"></ion-icon> Duration\n            </ion-col>\n            <ion-col col-2>\n                {{schedule?.exercise?.total_duration}}\n            </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    <ion-grid class="height-30">\n      <ion-row>\n        <ion-col ion-col-9>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-8>\n                  Repeat  \n              </ion-col>\n              <ion-col col-4>\n                  {{schedule?.exercise?.repeats}}  \n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    Duration \n                </ion-col>\n                <ion-col col-4>\n                    {{schedule?.exercise?.total_duration}} \n                </ion-col>\n              </ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col ion-col-3>\n          \n              <img src="assets/smiley.png" *ngIf="!schedule?.rating">\n              <img src="assets/neutral.png" *ngIf="schedule?.rating==0">\n              <img src="assets/sad.png" *ngIf="schedule?.rating==-1">\n              <img src="assets/home.jpg" *ngIf="!schedule?.rating==1">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="schedule?.workout_type == \'Strength\'">\n    <!-- Add card content here! -->\n  </div>\n  <!--\n  <ion-list inset>\n\n    <button ion-item *ngFor="let schedule of schedules" (click)=rateSchedule(schedule)>\n\n      <ion-item class="schedule_header" text-wrap text-center [style.backgroundColor]="(schedule.workout_type != \'Strength\') ? \'#32db64\' : \'#488aff\'">\n        <h2>{{schedule.scheduled_date | date}} : {{schedule.workout_type}}</h2>\n        <ion-icon name=\'checkbox\' item-right *ngIf="schedule.completed"></ion-icon>\n        <ion-icon name=\'warning\' item-right *ngIf="schedule.completed==false"></ion-icon>\n      </ion-item>\n \n      </div>\n\n    </button>\n\n    <div *ngIf="!schedules || schedules.length == 0">\n      <ion-card-title class="center">\n        Your workout schedule needs to be created.\n      </ion-card-title>\n      <p>\n        Please click the button below to create your workout schedule. Choose the days you want to schedule the appropriate workout\n        on.\n      </p>\n\n      <button ion-button full color="primary" (click)="createSchedule()">Create Schedule</button>\n    </div>\n\n\n  </ion-list>\n\n-->\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/schedules/schedules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_schedule_api__["a" /* ScheduleApi */],
            __WEBPACK_IMPORTED_MODULE_2__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], Schedules);
    return Schedules;
}());

//# sourceMappingURL=schedules.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_goal_api__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoalForm = /** @class */ (function () {
    function GoalForm(navCtrl, navParams, formBuilder, goalApi, respUtility, loadingController, tokenService, elementRef, renderer, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.goalApi = goalApi;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.submitAttempt = false;
        this.goal = this.navParams.data;
        console.log(this.goal);
        this.slideOneForm = formBuilder.group({
            reason: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            frequency: [],
            current_activity: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            delight: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
        });
    }
    GoalForm.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoalForm');
        this.respUtility.trackView("GoalForm");
    };
    GoalForm.prototype.save = function () {
        var _this = this;
        this.respUtility.trackEvent("Goal", "Save", "click");
        this.submitAttempt = true;
        //console.log(this.goal);
        var loader = this.loadingController.create({
            content: 'Saving ...'
        });
        if (this.slideOneForm.invalid) {
            //this.signupSlider.slideTo(0);
            console.log("Invalid form ", this.slideOneForm.errors);
        }
        else {
            this.submitAttempt = false;
            loader.present();
            if (this.goal["id"]) {
                this.goalApi.updateGoal(this.goal).subscribe(function (goal) {
                    _this.respUtility.showSuccess('Goal saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
            else {
                this.goalApi.createGoal(this.goal).subscribe(function (goal) {
                    _this.respUtility.showSuccess('Goal saved successfully.');
                    _this.navCtrl.pop();
                }, function (error) {
                    _this.respUtility.showFailure(error);
                    loader.dismiss();
                }, function () { loader.dismiss(); });
            }
        }
    };
    GoalForm.prototype.getGoalText = function (name) {
        return this.goalApi.getGoalText(name);
    };
    GoalForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'goal-form',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/goals/goal-form.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Goals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n\n      <ion-item>\n        <ion-label text-wrap floating>{{getGoalText("REASON")}}</ion-label>\n        <ion-textarea name="reason" formControlName="reason" type="text" [(ngModel)]="goal.reason" [class.invalid]="!slideOneForm.controls.reason.valid && (slideOneForm.controls.reason.dirty || submitAttempt)"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.reason.valid  && (slideOneForm.controls.reason.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap floating>{{getGoalText("DELIGHT")}}</ion-label>\n        <ion-textarea name="delight" formControlName="delight" type="text" [(ngModel)]="goal.delight" [class.invalid]="!slideOneForm.controls.delight.valid && (slideOneForm.controls.delight.dirty || submitAttempt)"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.delight.valid  && (slideOneForm.controls.delight.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n      <ion-list radio-group formControlName="frequency" [(ngModel)]="goal.frequency">\n\n        <ion-list-header text-wrap>{{getGoalText("FREQ")}}</ion-list-header>\n\n        <ion-item>\n          <ion-label text-wrap>Not regular - less than once a week.</ion-label>\n          <ion-radio value="Not regular - less than once a week."></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-wrap>Somewhat regular - between one and three times a week.</ion-label>\n          <ion-radio value="Somewhat regular - between one and three times a week."></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-wrap>Regular - three or more times a week.</ion-label>\n          <ion-radio value="Regular - three or more times a week."></ion-radio>\n        </ion-item>\n\n      </ion-list>\n\n\n      <ion-item *ngIf="!slideOneForm.controls.frequency.valid  && (slideOneForm.controls.frequency.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label text-wrap floating>{{getGoalText("CURRENT_ACTIVITY")}}</ion-label>\n        <ion-textarea name="current_activity" formControlName="current_activity" type="text" [(ngModel)]="goal.current_activity"\n          [class.invalid]="!slideOneForm.controls.current_activity.valid && (slideOneForm.controls.current_activity.dirty || submitAttempt)"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!slideOneForm.controls.current_activity.valid  && (slideOneForm.controls.current_activity.dirty || submitAttempt)">\n        <p class="error-text">Please enter some details.</p>\n      </ion-item>\n    </form>\n\n  </ion-list>\n\n  <button ion-button full color="primary" (click)="save()" [disabled]="slideOneForm.invalid">Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/goals/goal-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_goal_api__["a" /* GoalApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], GoalForm);
    return GoalForm;
}());

//# sourceMappingURL=goal-form.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoalApi = /** @class */ (function () {
    function GoalApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.goalText = {
            "REASON": "The reason I want to sign up for the program is",
            "DELIGHT": "In six months, I will be delighted if",
            "FREQ": "My current frequency of physical activity is",
            "CURRENT_ACTIVITY": "Briefly describe what you currently do for physical activity"
        };
        this.base_url = "goals";
        this.goals = [];
        this.goal = {};
        console.log('GoalApi Provider Created');
    }
    GoalApi.prototype.getGoals = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + ".json").map(function (response) {
            _this.goals = response.json();
            return _this.goals;
        });
    };
    GoalApi.prototype.getGoalDetails = function (goal_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + goal_id + ".json").map(function (response) {
            _this.goal = response.json();
            return _this.goal;
        });
    };
    GoalApi.prototype.createGoal = function (goal) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", goal).map(function (response) {
            _this.goal = response.json();
            return _this.goal;
            //return response.status;
        });
    };
    GoalApi.prototype.updateGoal = function (goal) {
        var _this = this;
        console.log("GoalApi: Updating goal");
        console.log(goal);
        return this.tokenService.put(this.base_url + "/" + goal.id + ".json", goal).map(function (response) {
            _this.goal = response.json();
            return _this.goal;
        });
    };
    GoalApi.prototype.deleteGoal = function (goal) {
        return this.tokenService.delete(this.base_url + "/" + goal.id + ".json").map(function (response) {
            return response.status;
        });
    };
    GoalApi.prototype.getGoalText = function (name) {
        return this.goalText[name];
    };
    GoalApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], GoalApi);
    return GoalApi;
}());

//# sourceMappingURL=goal-api.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicalApi = /** @class */ (function () {
    function MedicalApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.medicalText = {};
        this.base_url = "medical_histories";
        this.medicals = [];
        this.medical = {};
        console.log('MedicalApi Provider Created');
    }
    MedicalApi.prototype.getMedicals = function () {
        var _this = this;
        return this.tokenService.get(this.base_url + ".json").map(function (response) {
            _this.medicals = response.json();
            return _this.medicals;
        });
    };
    MedicalApi.prototype.getMedicalDetails = function (medical_id) {
        var _this = this;
        return this.tokenService.get(this.base_url + "/" + medical_id + ".json").map(function (response) {
            _this.medical = response.json();
            return _this.medical;
        });
    };
    MedicalApi.prototype.createMedical = function (medical) {
        var _this = this;
        return this.tokenService.post(this.base_url + ".json", medical).map(function (response) {
            _this.medical = response.json();
            return _this.medical;
            //return response.status;
        });
    };
    MedicalApi.prototype.updateMedical = function (medical) {
        var _this = this;
        console.log("MedicalApi: Updating medical");
        console.log(medical);
        return this.tokenService.put(this.base_url + "/" + medical.id + ".json", medical).map(function (response) {
            _this.medical = response.json();
            return _this.medical;
        });
    };
    MedicalApi.prototype.deleteMedical = function (medical) {
        return this.tokenService.delete(this.base_url + "/" + medical.id + ".json").map(function (response) {
            return response.status;
        });
    };
    MedicalApi.prototype.getMedicalText = function (name) {
        return this.medicalText[name];
    };
    MedicalApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]])
    ], MedicalApi);
    return MedicalApi;
}());

//# sourceMappingURL=medical-api.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__password_reset__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_register__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Login = /** @class */ (function () {
    function Login(navCtrl, navParams, formBuilder, respUtility, loadingController, tokenService, config, loginProvider, userApi, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.respUtility = respUtility;
        this.loadingController = loadingController;
        this.tokenService = tokenService;
        this.config = config;
        this.loginProvider = loginProvider;
        this.userApi = userApi;
        this.storage = storage;
        this.slideOneForm = formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
        this.respUtility.trackView("Login");
    };
    Login.prototype.login = function () {
        this.respUtility.trackEvent("User", "Login", "click");
        this.loginProvider.login(this.email, this.password, this.navCtrl);
    };
    Login.prototype.register = function () {
        this.respUtility.trackEvent("User", "Register", "click");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__users_register__["a" /* RegisterPage */]);
    };
    Login.prototype.resendConfirmationEmail = function () {
        var _this = this;
        this.respUtility.trackEvent("User", "ResendConfirmation", "click");
        if (this.email != null) {
            this.userApi.resendConfirmationEmail(this.email).subscribe(function (res) {
                console.log(res);
                if (res["sent"] == true) {
                    _this.respUtility.showSuccess("Confirmation email sent. Please check your inbox.");
                }
                else {
                    if (res["user_not_found"] == true) {
                        _this.respUtility.showWarning("Email specified above was not found in our system. Please register.");
                    }
                    else {
                        _this.respUtility.showWarning("Confirmation email not sent. Please contact us.");
                    }
                }
            }, function (error) { return _this.respUtility.showFailure(error); });
        }
        else {
            this.respUtility.showWarning("Please enter a valid email above.");
        }
    };
    Login.prototype.forgotPassword = function () {
        var _this = this;
        this.respUtility.trackEvent("User", "ForgotPassword", "click");
        if (this.email != null) {
            this.tokenService.resetPassword({ email: this.email }).subscribe(function (res) {
                console.log(res);
                var body = JSON.parse(res["_body"]);
                console.log(body["message"]);
                _this.respUtility.showMsg(body["message"]);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__password_reset__["a" /* PasswordReset */]);
            }, function (error) { return _this.respUtility.showFailure(error); });
        }
        else {
            this.respUtility.showWarning("Please enter a valid email above.");
        }
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div class="logo-center">\n    <img src="assets/home.svg" />\n  </div>\n  <h1 class="text-color extra-spacing company-name" text-center>\n    Aadit Life\n  </h1>\n  <p class="text-color spacing-1" text-center>\n    The most popular way to train for a run\n  </p>\n  <div class="seperator">\n    <form class="padding-20" [formGroup]="slideOneForm">\n      <ion-item class="transparent">\n        <ion-label class="input-color" floating>Email</ion-label>\n        <ion-input class="input-color" formControlName="email" name="email" type="email" [(ngModel)]="email" [class.invalid]="!slideOneForm.controls.email.valid && (slideOneForm.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label class="input-color" floating>Password</ion-label>\n        <ion-input class="input-color" formControlName="password" name="password" type="password" [(ngModel)]="password" [class.invalid]="!slideOneForm.controls.password.valid && (slideOneForm.controls.password.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n    </form>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button clear color="light" icon-left (click)="forgotPassword()">\n          <ion-icon name=\'key\'></ion-icon>\n          <span class="font-10">Forgot Password?</span>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button round full color="primary" (click)="login()">Login</button>\n      </ion-col>\n    </ion-row>\n    </div>\n\n    <button ion-button clear color="primary" full>\n        <ion-icon  name="person-add" class="margin-right-5"></ion-icon> New User? Sign up\n    </button>\n    <ion-row class="position-bottom">\n      <ion-col col-4>\n        <button ion-button block color="primary" outline>\n          <ion-icon name="logo-facebook" class="margin-right-5"></ion-icon> facebook\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="secondary" outline>\n          <ion-icon name="logo-google" class="margin-right-5"></ion-icon> google\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="dark" outline (click)="register()">\n          <ion-icon name="mail" class="margin-right-5"></ion-icon> email\n        </button>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n  <!--\n    \n  <ion-card>\n\n    <ion-card-content>\n      \n\n  \n\n    </ion-card-content>\n\n    <ion-row no-padding>\n      \n    </ion-row>\n    \n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="primary" icon-left (click)="resendConfirmationEmail()">\n          <ion-icon name=\'mail\'></ion-icon>\n          Resend Confirmation Email\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card> -->\n\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_response_utility__["a" /* ResponseUtility */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_6__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_api__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/akash/Downloads/ui/src/pages/static/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p>Email: anand.valavi@aaditlife.com</p>\n      <p>Website: http://www.aaditlife.com</p>\n      <p tel="+917338086009">Phone: +91 73380 86009</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/akash/Downloads/ui/src/pages/static/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[419]);
//# sourceMappingURL=main.js.map