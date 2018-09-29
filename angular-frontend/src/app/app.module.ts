import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {ProductdataService} from './services/productdata.service';
import {WarehousedataService} from './services/warehousedata.service';
import { InventorydataService } from './services/inventorydata.service';
import { HttpModule } from '@angular/http';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DisplaywarehouseComponent } from './components/displaywarehouse/displaywarehouse.component';
import { ViewproductquantityComponent } from './components/viewproductquantity/viewproductquantity.component';

// routes for components 
const routes: Routes = [
    {path: "", component: WelcomeComponent },
    {path: "product", component: ProductComponent },
    {path: "warehouse", component: WarehouseComponent },
    {path: "welcome", component: WelcomeComponent },
    
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    WarehouseComponent,
    NavbarComponent,
    WelcomeComponent,
    DisplaywarehouseComponent,
    ViewproductquantityComponent    // declaration
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductdataService,WarehousedataService,InventorydataService],     // importing the services
  bootstrap: [AppComponent]
})
export class AppModule { }
