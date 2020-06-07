import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { DataService } from './data.service';
import { CacheService } from './cache.service';
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

    otpPassword(otppass){
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

    resetPassword(resetpass){
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



}