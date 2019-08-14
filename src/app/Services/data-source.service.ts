import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../Application';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  Url='http://localhost:3000/Feilds'
  applicationUrl='http://localhost:3000/Application'

  allJsonFiles:Array<any>=[];

  constructor(private http: HttpClient) { }

  my(jsonString){
    console.log('sdfj');
    console.log('Calling..............'+this.allJsonFiles+' ........ '+JSON.stringify( jsonString));
    this.allJsonFiles.push(jsonString);
    console.log('Calling..............'+this.allJsonFiles+' ........ '+JSON.stringify( jsonString));
  }
  getAllJsonFiles():any{
    // this.getHeroes();
    return this.allJsonFiles;
  }

  data:any;

  addRecord(record :any) : Observable< Application>{
      console.log('asdassdaadasdasda');
      return this.http.post<Application>(this.applicationUrl,JSON.stringify(record),httpOptions);
  }
  data1:any;
  getRecords(): Observable< Application[]>{

    this.data1=this.http.get<Application[]>(this.applicationUrl);
    return this.data1
  }
  delete (id: number): Observable<{}> {
    const url = `${this.applicationUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)

  }
}
