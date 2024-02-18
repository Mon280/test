import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { starWarsService } from 'src/app/service/starwars.service';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.scss']
})
export class FichaTecnicaComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private starWarsService: starWarsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const characterUrl = atob(params.get('id') || '');
      this.starWarsService.getCharacterByUrl(characterUrl).subscribe(
        (character: any) => {
          this.character = character;
          this.assignImageUrl(character);
        },
        error => {
          console.error('Error al obtener datos del personaje:', error);
        }
      );
    });
  }

  private assignImageUrl(character: any): void {
    switch (character.name.toLowerCase()) {
      case 'luke skywalker':
        character.imageUrl = 'assets/personajes/luke.jpg';
        break;
      case 'darth vader':
        character.imageUrl = 'assets/personajes/vader.webp';
        break;
      case 'c-3po':
        character.imageUrl = 'assets/personajes/c3po.jpeg';
        break;
      case 'r2-d2':
        character.imageUrl = 'assets/personajes/r2d2.webp';
        break;
      case 'leia organa':
        character.imageUrl = 'assets/personajes/leia.webp';
        break;
      case 'owen lars':
        character.imageUrl = 'assets/personajes/owen.jpeg';
        break;
      case 'beru whitesun lars':
        character.imageUrl = 'assets/personajes/beru.webp';
        break;
      case 'r5-d4':
        character.imageUrl = 'assets/personajes/r5.jpg';
        break;
      case 'biggs darklighter':
        character.imageUrl = 'assets/personajes/biggs.webp';
        break;
      case 'obi-wan kenobi':
        character.imageUrl = 'assets/personajes/obi.jpg';
        break;
      default:
        character.imageUrl = 'assets/personajes/default.png';
        break;
    }
  }
}
