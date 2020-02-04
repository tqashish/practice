import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =
[
{path: 'First',component:SecondComponent},
{path:'Second',component:ThirdComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
  
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
