import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './pet-list/pet-list.component';
import { RouterModule } from '@angular/router';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { RegistrationComponent } from './resitration/registration.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginSuccessComponent } from './login-success/login-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    CreatePetComponent,
    LoginComponent,
    RegistrationComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,



    RouterModule.forRoot(
      [
        { path: 'pets', component: PetListComponent },

        { path: 'addPets', component: CreatePetComponent },

        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegistrationComponent }

      ]
    )

  ],
  exports: [],
  providers: [MatToolbarModule,
    HttpClientModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { };