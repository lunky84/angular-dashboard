import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { ElementsTableComponent } from './orders/elements-table/elements-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OrdersComponent,
    HomeComponent,
    ElementsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
