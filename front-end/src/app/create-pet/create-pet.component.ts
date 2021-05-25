import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from '../models/adoptionCenters';
import { FacadeService } from '../services/facade.service';
import { Pet } from '../models/pet';



@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})

export class CreatePetComponent implements OnInit {

  readonly api = "http://localhost:9191/adoption-centers";

  centersList: Center[];
  shelter: Center;

  constructor(private httpClient: HttpClient, private facadeService: FacadeService, private route: Router) { }

  onSubmit(data: Pet) {
    console.log("data" + data);

    this.facadeService.postPet(data).subscribe(
      (result) => {
        this.route.navigate(['/pets']);
      }
    )

  }

  ngOnInit() {

    this.httpClient.get<any>(this.api).subscribe(
      result => {
        console.log(result);
        this.centersList = result;
        console.log(this.centersList);
      }
    )
  }

}
