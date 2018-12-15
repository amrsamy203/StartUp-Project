import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { PersonalProfilePageComponent } from './personal-profile-page/personal-profile-page.component';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { AuthInterceptorService} from './auth-interceptor.service';
import { BusinessPorfilePageComponent} from './business-porfile-page/business-porfile-page.component';
import { UbdatePersonalProfilePageComponent } from './ubdate-personal-profile-page/ubdate-personal-profile-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UbdateBusinessProfilePageComponent } from './ubdate-business-profile-page/ubdate-business-profile-page.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { HomePersonComponent } from './home-person/home-person.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeBusinessComponent } from './home-business/home-business.component';
import {MatDatepickerModule,
  MatSelectModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatGridListModule} from '@angular/material';
import { NewProjectComponent } from './new-project/new-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { MainComponent } from './main/main.component';
import { OfferComponent } from './offer/offer.component';
const routes = [
  { path: 'Perprofile', component: PersonalProfilePageComponent },
  { path: 'Busprofile', component: BusinessPorfilePageComponent },
  { path: 'PerprofileUbdate', component: UbdatePersonalProfilePageComponent },
  { path: 'BusprofileUbdate', component: UbdateBusinessProfilePageComponent},
  { path: 'register/:type', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent},
  { path: 'home', component: HomeComponent},
  {path: 'new-project', component: NewProjectComponent},
  {path: 'view-project/:id', component: ViewProjectComponent},
  {path: 'Main', component: MainComponent},
  {path: 'Home-person', component: HomePersonComponent},
  {path: 'offer/:id', component: OfferComponent}
];
@NgModule({
  declarations: [
    AppComponent, PersonalProfilePageComponent, FileSelectDirective,
     NewProjectComponent, ViewProjectComponent,
     BusinessPorfilePageComponent, UbdatePersonalProfilePageComponent,
     RegisterComponent, LoginComponent, UbdateBusinessProfilePageComponent, UsersComponent,
     HomeComponent, HomePersonComponent, HomeBusinessComponent, MainComponent, OfferComponent
  ],
  imports: [
    BrowserModule, MatListModule,
    AppRoutingModule, HttpModule,
    BrowserAnimationsModule, MatCheckboxModule,
    FormsModule, MatButtonModule, MatInputModule, MatToolbarModule,
    MatFormFieldModule, MatCardModule, HttpClientModule, RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [ApiService, AuthService, {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
