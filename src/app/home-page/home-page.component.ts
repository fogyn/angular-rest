import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ent} from '../entity/ent';
import {Order} from '../entity/order';
import {Good} from '../entity/good';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'home - a8';
  task: string;
  test = 'test1';
  ent: Ent;
  orders: Order[];
  varTemp: string;
  boolGoods = true;
  boolOrders = false;
  goods2: Good[];

  constructor(private http: HttpClient) {
    this.http.get('//jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data);
    });
    console.log(this.test);
  }

  funVar(): void {
    this.varTemp = 'Hai var temp';
  }
  funClear(): void{
    this.varTemp = '';
    this.ent = null;
    this.orders = null;
    this.boolGoods = false;
    this.boolOrders = false;
  }
  funDemoRest(): void {
    this.http.get<Ent>('http://localhost:8080/demorest').subscribe(rezult => {
      console.log(rezult.text);
      this.ent = rezult;
    });
  }
  funBasa(): void {
    this.http.get<Order[]>('http://localhost:8080/basaorder').subscribe(rezult => {
      this.orders = rezult;
      });
    this.http.get<Good[]>('http://localhost:8080/basagoods').subscribe(rezult2 => {
      this.goods2 = rezult2;
    });
  }
  funGoods(): void {
    this.boolOrders = false;
    this.boolGoods = true;
  }
  funOrders(): void {
    this.boolGoods = false;
    this.boolOrders = true;
  }

  ngOnInit(): void {
  }

}
