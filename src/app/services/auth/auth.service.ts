import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {
    }
    token: string;

    public getToken(): string {
        const token = this.getUser() ? this.getUser().accessToken : '';
        return token;
    }

    public getUser() {
        return JSON.parse(localStorage.getItem('userData')).User
    }
}