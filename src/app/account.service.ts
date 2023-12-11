import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
private baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

// Inject HttpClient service in Accountservice
constructor(private _httpClient:HttpClient) { }

//Creats "get method" getAccounts method to load data
getAccounts():Observable<any>{
  return this._httpClient.get(this.baseurl);
}

getFilteredAccounts(term:string):Observable<any>{
  return this._httpClient.get(this.baseurl+"?filter="+term);
}

getSortedAccounts(column:string,order:string):Observable<any>{
  return this._httpClient.get(this.baseurl+"?sortBy="+column+"&order="+order);
}

getPagedAccounts(pageno:number):Observable<any>{
  return this._httpClient.get(this.baseurl+"?limit=10&page="+pageno);
}

deleteAccounts(id:string):Observable<any>{
  return this._httpClient.delete(this.baseurl+"/"+id);
}

createAccount(data:string):Observable<any>{
return this._httpClient.post(this.baseurl+"/",data);
}
}
