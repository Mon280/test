import { Component, OnInit } from '@angular/core';
import { starWarsService } from '../service/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  selectedCharacter: any = null;
  searchText: string = '';

  constructor(private starWarsService: starWarsService) { }

  ngOnInit(): void {
    this.infoStarWars();
  }

  infoStarWars() {
    this.starWarsService.getData().subscribe(
      (response: any) => {
        if (response.hasOwnProperty('results')) {
          this.data = response.results;
        } else {
          this.data = response;
        }
        this.applyFilter();
      },
      error => {
        console.error('Error al obtener datos de Star Wars:', error);
      }
    );
  }

  applyFilter() {
    this.filteredData = this.data.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
  
    // Asignar la URL de la imagen a cada elemento de filteredData
    this.filteredData.forEach(item => {
      switch (item.name.toLowerCase()) {
        case 'luke skywalker':
          item.imageUrl = 'assets/personajes/luke.jpg';
          break;
        case 'darth vader':
          item.imageUrl = 'assets/personajes/vader.webp';
          break;
        case 'c-3po':
          item.imageUrl = 'assets/personajes/c3po.jpeg';
          break;
        case 'r2-d2':
          item.imageUrl = 'assets/personajes/r2d2.webp';
          break;
        case 'leia organa':
          item.imageUrl = 'assets/personajes/leia.webp';
          break;
        case 'owen lars':
          item.imageUrl = 'assets/personajes/owen.jpeg';
          break;
        case 'beru whitesun lars':
          item.imageUrl = 'assets/personajes/beru.webp';
          break;
        case 'r5-d4':
          item.imageUrl = 'assets/personajes/r5.jpg';
          break;
        case 'biggs darklighter':
          item.imageUrl = 'assets/personajes/biggs.webp';
          break;
        case 'obi-wan kenobi':
          item.imageUrl = 'assets/personajes/obi.jpg';
          break;
        default:
          item.imageUrl = 'assets/personajes/default.png'; 
          break;
      }
    });
  }
  

  openModal(character: any) {
    this.selectedCharacter = character;
  }

  getImageUrl(index: number): string {
    return this.filteredData[index].imageUrl;
  }
}
