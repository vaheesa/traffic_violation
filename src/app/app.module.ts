import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { Traffic1Component } from './traffic1/traffic1.component';
import { Traffic2Component } from './traffic1/traffic2/traffic2.component';
import { Traffic2ListComponent } from './traffic1/traffic2-list/traffic2-list.component';
import { Traffic2Service } from './shared/traffic2.service';

@NgModule({
  declarations: [
    AppComponent,
    Traffic1Component,
    Traffic2Component,
    Traffic2ListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [Traffic2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
