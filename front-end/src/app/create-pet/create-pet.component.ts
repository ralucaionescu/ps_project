import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent {

  readonly APIUrl = "http://localhost:9191/pets";
  constructor(private httpClient: HttpClient) { }

  onSubmit(data) {

    this.httpClient.post(this.APIUrl, data).subscribe(
      (result) => {
        console.warn(result);
      }
    )

  }

}
