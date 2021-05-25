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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AuthGuard } from './models/auth.guards';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { AdoptionCentersComponent } from './adoption-centers/adoption-centers.component';
import { CreateCenterComponent } from './create-center/create-center.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ViewPetsComponent } from './adoption-centers/view-pets/view-pets.component';
import { FacadeService } from './services/facade.service';
import { LoginService } from './services/login.service';
import { RegistrationService } from './services/registration.service';

import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserRatingsComponent } from './user-ratings/user-ratings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PetService } from './services/pet.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    CreatePetComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent,
    HomeComponent,
    AdoptionCentersComponent,
    CreateCenterComponent,
    SearchFilterPipe,
    ViewPetsComponent,
    DialogComponent,
    UserRatingsComponent
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
    MatSelectModule,
    MatRadioModule,
    CarouselModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    NgbModule,

    RouterModule.forRoot(
      [
        { path: 'pets', component: PetListComponent },

        {
          path: 'addPets', component: CreatePetComponent,
          canActivate: [AuthGuard]
        },

        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegistrationComponent },
        { path: 'user-profile/:id', component: UserProfileComponent },

        {
          path: 'adoption-centers', component: AdoptionCentersComponent, children: [{
            path: ':id', component: ViewPetsComponent
          }]

        },
        { path: 'create-center', component: CreateCenterComponent, canActivate: [AuthGuard] },
        {
          path: 'ratings', component: UserRatingsComponent
        },
        { path: '', component: HomeComponent },
      ]
    ),


    NgbModule

  ],
  exports: [],
  providers: [MatToolbarModule,
    HttpClientModule,
    LoginService,
    RegistrationService,
    PetService,
    FacadeService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { };
export class ServicesModule { }