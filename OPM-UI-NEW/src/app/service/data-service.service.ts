import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http,Headers } from '@angular/http';

@Injectable()
export class DataService {

  private serverUrl = environment.serverUrl+ environment.serverPort +environment.serverPrefix;
  constructor(private http:Http) { }

  
  createAuthorizationHeader() {
    let headers = new Headers();
    if (sessionStorage.getItem('token')) {
      headers.append('Authorization', sessionStorage.getItem('token'));
    }
     
      return headers;
    }

    get(url){
      let headers : Headers= this.createAuthorizationHeader();
      return this.http.get(this.serverUrl+url,{headers: headers  });
    }

    post(url,body){
      let headers : Headers= this.createAuthorizationHeader();
      return this.http.post(this.serverUrl+url,body,{headers: headers  });
    }

}
