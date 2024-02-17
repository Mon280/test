import { Component, OnInit } from '@angular/core';
import { starWarsService } from '../service/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private starWarsService: starWarsService) { }

  ngOnInit(): void {
    this.infoStarWars();
  }

  infoStarWars() {
    this.starWarsService.getData().subscribe(
      (response: any) => {
        if (response.hasOwnProperty('results')) {
          this.data = response.results;
          console.log(this.data);
        } else {
          console.error('No se encontró la propiedad "results" en la respuesta.');
        }
      },
      error => {
        console.error('Error al obtener datos de Star Wars:', error);
      }
    );
  }
}
