import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }

  getMobiles(){
   return  this.http.get('http://localhost:8080/mobile');
  }

  addmobile(usermobile:any){
    return this.http.post('http://localhost:8080/mobile',usermobile,{responseType: 'text'});
  }

}
