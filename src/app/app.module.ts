import { FeedbackComponent } from './feedback/feedback.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:import-spacing
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app.firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MaterialModule } from './material.module';
import { NeedingComponent } from './needing/needing.component';
import { HumancaseComponent } from './humancase/humancase.component';
import { EdithumancaseComponent } from './edithumancase/edithumancase.component';
import { EditneedingComponent } from './editneeding/editneeding.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'needing',
    pathMatch: 'full'
  },
  {
    path: 'needing',
    component: NeedingComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'humancase',
    component: HumancaseComponent
  },
  {
    path: 'edithumancase',
    component: EdithumancaseComponent
  },
  {
    path: 'editneeding',
    component: EditneedingComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    NeedingComponent,
    FeedbackComponent,
    HumancaseComponent,
    EdithumancaseComponent,
    EditneedingComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  // tslint:disable-next-line:no-trailing-whitespace
  bootstrap: [AppComponent]

})
export class AppModule { }
