import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-center',
  templateUrl: './create-center.component.html',
  styleUrls: ['./create-center.component.css']
})
export class CreateCenterComponent {
  readonly APIUrl = "http://localhost:9191/adoption-centers";
  constructor(private httpClient: HttpClient, private route: Router) { }

  onSubmit(data) {

    console.log(data);
    this.httpClient.post(this.APIUrl, data).subscribe(
      (result) => {
        console.warn(result);
        this.route.navigate(['/']);
      },
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    )
  }
}
