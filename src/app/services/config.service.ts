import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public SERVER_BASE_URL = "";
    public BASE_URL = "http://localhost:5000/";

    public REGISTER = this.BASE_URL + "user/register";
    public REGISTER_OTP = this.BASE_URL + 'user/registered-otp';
    public LOGIN = this.BASE_URL + "user/login";
    public FORGOT_PASSWORD = this.BASE_URL + "user/forgot-password";
    public OTP_PASSWORD = this.BASE_URL + "user/reset-passwordotp";
    public RESET_PASSWORD = this.BASE_URL + "user/reset-password";


}