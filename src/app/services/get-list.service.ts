import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { DataService } from './data.service';
import { CacheService } from './cache.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class GetListService {

        constructor(private configService: ConfigService,
            public dataService: DataService,
            public cacheService: CacheService) {

        }

    Register(registerData) {
        return this.dataService.postData(this.configService.REGISTER, registerData)
            .flatMap(rData => {
                console.log('Registered successfully--------------->')
                console.log(rData)
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in Registration-------->')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    RegisterOtp(registerOtp) {
        return this.dataService.putData(this.configService.REGISTER_OTP, registerOtp)
            .flatMap(rData => {
                console.log('Registered with Otp successfully')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in Otp')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    Login(loginData) {
        return this.dataService.postData(this.configService.LOGIN, loginData)
            .flatMap(rData => {
                console.log('You Login Successfully! Welcome')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in Login')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    forgotPassword(passwordData) {
        return this.dataService.putData(this.configService.FORGOT_PASSWORD, passwordData)
            .flatMap(rData => {
                console.log('Check your email for OTP')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in OTP')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    otpPassword(otppass) {
        return this.dataService.putData(this.configService.OTP_PASSWORD, otppass)
            .flatMap(rData => {
                console.log('Reset your password!!')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in OTP')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    resetPassword(resetpass) {
        return this.dataService.putData(this.configService.RESET_PASSWORD, resetpass)
            .flatMap(rData => {
                console.log('Password updated successfully!!')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in password')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    getConstruction(obj) {
        return this.dataService.getDataWithTokens(this.configService.CONSTRUCTION_LIST, obj)
            .flatMap(rData => {
                console.log(rData, 'Construction List')
                if (this.cacheService.constructionList) {
                    if (rData.data) {
                        this.cacheService.constructionList = _.concat(this.cacheService.constructionList, rData.data)
                    }
                } else {
                    if (rData.data) {
                        this.cacheService.constructionList = rData.data;
                    }
                }
                return Observable.of(rData)
            });
    }

    architectureAppointment(data) {
        return this.dataService.postData(this.configService.ARCHITECTURE_APPOINTMENT, data)
            .flatMap(rData => {
                console.log('Your Appointment Successfully! sent')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in Appointment')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    constructionAppointment(data) {
        return this.dataService.postData(this.configService.CONSTRUCTION_APPOINTMENT, data)
            .flatMap(rData => {
                console.log('Your Appointment Successfully! sent')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in Appointment')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

    interiorAppointment(data) {
        return this.dataService.postData(this.configService.INTERIOR_DESIGN_APPOINTMENT, data)
            .flatMap(rData => {
                console.log('Your Appointment Successfully! sent')
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log('error in Appointment')
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }




}