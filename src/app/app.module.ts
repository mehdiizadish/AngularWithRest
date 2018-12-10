import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartitemComponent } from './cart/cartitem/cartitem.component';
import { CoverComponent } from './cover/cover.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ApiService } from './api.service';
import { ProductDataService } from './product-data.service';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [ApiService, ProductDataService],
    declarations: [AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, HeaderComponent, CartComponent, CartitemComponent, CoverComponent, ProductComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }