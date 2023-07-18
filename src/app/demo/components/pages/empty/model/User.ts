export class User {

    login:string;
   private _password:string;

    constructor(login: string, password: string) {
        this.login = login;
        this._password = password;
    }
    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}
