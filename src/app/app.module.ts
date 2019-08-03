import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { ServicesService } from './auth/services.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { EmplistComponent } from './view/emplist/emplist.component';
import { ProductComponent } from './view/product/product.component';
import { MyprofileComponent } from './view/myprofile/myprofile.component';
import { ProductlistComponent } from './view/productlist/productlist.component';


var firebaseConfig = {
  apiKey: "AIzaSyBysdZaKYuRa8I_o-wnDRX_FYj3K7K9L7g",
  authDomain: "salesdata-38c5f.firebaseapp.com",
  databaseURL: "https://salesdata-38c5f.firebaseio.com",
  projectId: "salesdata-38c5f",
  storageBucket: "",
  messagingSenderId: "205699563962",
  appId: "1:205699563962:web:de9273d9347faa45"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    EmplistComponent,
    ProductComponent,
    MyprofileComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule, // for database
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
