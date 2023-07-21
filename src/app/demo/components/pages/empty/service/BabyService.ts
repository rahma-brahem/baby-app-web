import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AppLoginData, AppPrincipalData} from "../dto/CoreModels";
@Injectable()

export class BabyService {
constructor(private  http:HttpClient) {
}
public login (loginData:AppLoginData):Observable<AppPrincipalData>{
    return this.http.post<AppPrincipalData>('http://192.168.1.17:8080/public/login',loginData);
}

}
