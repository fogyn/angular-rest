import { Component, OnInit } from '@angular/core';
import {Order} from '../entity/order';
import {Good} from '../entity/good';
import {HttpClient} from '@angular/common/http';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-good-page',
  templateUrl: './good-page.component.html',
  styleUrls: ['./good-page.component.css']
})
export class GoodPageComponent implements OnInit {
  testgood: string;
  goods: Good[];
  goodbyid: Good;
  idbool: boolean;
  newbool: boolean;
  idtext: string;
  idnum: number;
  deleteText: string;
  test2: string;

   constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getAllGoods(): void{
     this.clearAll();
     this.testgood = 'get all goods';
     this.http.get<Good[]>('http://localhost:8080/basagoods').subscribe(rezult2 => {
      this.goods = rezult2;
    });
  }
  getGoodbyId(): void{
    this.clearAll();
    this.testgood = 'get goot by id';
    this.idbool = true;
  }
  sendGetGoodById(): void{
    this.http.get<Good>('http://localhost:8080/getgoodid/' + toNumbers(this.idtext)).subscribe(rezult2 => {
      this.goodbyid = rezult2;
    });
  }
  deleteGoodById(): void{
    this.clearAll();
    this.testgood = 'delete good by id';
    this.idnum = 2;
  }
  senddeleteGoodById(): void{
    this.http.get<string>('http://localhost:8080/gooddeleteid/' + toNumbers(this.idtext)).subscribe(rezult2 => {
      this.deleteText = rezult2;
    });
  }
  newGood(): void{
    this.clearAll();
    this.testgood = 'new good';
    this.newbool = true;


  }
  updateGoodByID(): void {
    this.clearAll();
    this.testgood = 'update good by id';
  }
  clearAll(): void{
    this.goods = null;
    this.goodbyid = null;
    this.idbool = false;
    this.newbool = false;
    this.idtext = '';
    this.idnum = 0;
        }
    test(): void{
      this.http.get<string>('http://localhost:8080/dd').subscribe(rezult2 => {
        this.test2 = rezult2;
        console.log(rezult2);
      });
    }
}
