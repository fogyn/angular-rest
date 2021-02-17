import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Good} from '../../entity/good';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-good-page-new',
  templateUrl: './good-page-new.component.html',
  styleUrls: ['./good-page-new.component.css']
})
export class GoodPageNewComponent implements OnInit{
  name = 'new good test';
  newname: string;
  newprice: number;
  newbool: boolean;
  good: Good = new Good();
  goodreciv: Good;
  done: boolean;
  unswer: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8080/newgood',
      'Access-Control-Allow-Method': 'POST, GET, OPTIONS, DELETE',
      'Access-Control-Max-Age': '3600',
      'Access-Control-Allow-Headers' : 'Content-Type',
        'Content-Type':  'application/json',
       },
      )
  };
  ngOnInit(): void {
  }

  constructor(private http: HttpClient) { }

  sendNewGood(): void{
    this.newbool = true;
    this.good.name = this.newname;
    this.good.price = this.newprice;
    this.http.post<Good>('http://localhost:8080/newgood', this.good, this.httpOptions).subscribe(r => {
      console.log(r.name + ' - ' + r.goodid + ' - ' + r.price);
    });

  }

  addPerson(person: Good): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post('http://localhost:8080/newgood', body, this.httpOptions);
  }
 }
