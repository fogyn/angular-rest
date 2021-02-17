import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoodsComponent } from './goods/goods.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderPageComponent } from './order-page/order-page.component';
import { GoodPageComponent } from './good-page/good-page.component';
import { GoodPageNewComponent } from './good-page/newgood/good-page-new.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UpdategoodComponent } from './good-page/updategood/updategood.component';

const routers = [
  {path: '', component: HomePageComponent},
  {path: 'orders', component: OrderPageComponent},
  {path: 'goods', component: GoodPageComponent},
];

@NgModule({
  declarations: [
    AppComponent, GoodsComponent, OrderPageComponent, GoodPageComponent, GoodPageNewComponent, HomePageComponent, UpdategoodComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
