import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public SERVER_BASE_URL = "";
    public BASE_URL = "http://localhost:5000/";

    // Authentication API's
    public REGISTER = this.BASE_URL + "user/register";
    public REGISTER_OTP = this.BASE_URL + 'user/registered-otp';
    public LOGIN = this.BASE_URL + "user/login";
    public FORGOT_PASSWORD = this.BASE_URL + "user/forgot-password";
    public OTP_PASSWORD = this.BASE_URL + "user/reset-passwordotp";
    public RESET_PASSWORD = this.BASE_URL + "user/reset-password";

    // General API'S
    public CONSTRUCTION_LIST= this.BASE_URL + "construction/list";
    
    public ARCHITECTURE_APPOINTMENT = this.BASE_URL + "architectureappointment/insert";
    public CONSTRUCTION_APPOINTMENT = this.BASE_URL + "constructionappointment/insert";
    public INTERIOR_DESIGN_APPOINTMENT = this.BASE_URL + "interiordesignappointment/insert";



}