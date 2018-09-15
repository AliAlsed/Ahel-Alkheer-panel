import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { RouterModule, Routes } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing


import {  MatNativeDateModule, MatCardModule, MatButtonModule, MatTableModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app.firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {APP_BASE_HREF} from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatToolbarModule} from '@angular/material/toolbar';
/*
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];


*/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-news',
    pathMatch: 'full'
  },

  {
    path : 'all-news',
    component: AllNewsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue : '/'}],
  // tslint:disable-next-line:no-trailing-whitespace
  bootstrap: [AppComponent ] 

})
export class AppModule { }
