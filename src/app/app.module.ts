

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpNgforComponent } from './http-ngfor/http-ngfor.component';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {
     path: '',
     component: UserloginComponent
  },
  {
     path: 'app-mainpage',
     component: MainpageComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
 },
 {
  path: 'http-ngfor',
  component: HttpNgforComponent
}


];
// hint :use into html files <router-outlet></router-outlet> 

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FooterComponent,
      UserloginComponent,
      MainpageComponent,
      PipesComponent,
      HttpNgforComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      HttpModule
     // MdTableModule,
     // MdInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
