import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student";

  constructor(private _httpclient:HttpClient) { }
  getusers():Observable<any>{
    return this._httpclient.get(this.baseurl);
  }
  getfilteredusers(term:string):Observable<any>{
    return this._httpclient.get(this.baseurl+"?filter=+term");
  }

  getsortedusers(column:string,order:string):Observable<any>{
    return this._httpclient.get(this.baseurl+"?sortyBy="+column)
  }

  getpagedusers(pageno:number):Observable<any>{
    return this._httpclient.get(this.baseurl+"limit=10&page="+pageno)
  }

 deleteusers(id:string):Observable<any>{
  return this._httpclient.get(this.baseurl+"/"+id);
 }

  //post methgod to get dat from userforms and sorting API
  createuser(data:any):Observable<any>{
    return this._httpclient.post(this.baseurl+"/",data)
  }


}

