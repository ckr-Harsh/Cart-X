import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FireService } from './service/fire.service';
import { authRouting } from './auth/auth-routing';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BillingFormModel } from 'src/assets/Store/billing';
import { ProductsModel } from 'src/assets/Store/products';
import { CompanyDetailsModel } from 'src/assets/Store/details';
import { StorageService } from './service/storage.service';
import { CartService } from './service/cart.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    authRouting,
    ReactiveFormsModule,
  ],
  providers: [
    ProductsModel,
    BillingFormModel,
    CompanyDetailsModel,
    StorageService,
    CartService,
    FireService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
