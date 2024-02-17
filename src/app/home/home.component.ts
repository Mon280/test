import { Component, OnInit } from '@angular/core';
import { starWarsService } from '../service/starwars.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  dataSource: MatTableDataSource<any> | null = null; // Inicializado con valor nulo
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'gender']; // Columnas para la tabla

  constructor(private starWarsService: starWarsService) { }

  ngOnInit(): void {
    this.infoStarWars();
  }

  infoStarWars() {
    this.starWarsService.getData().subscribe(data => {
      this.data = data.results;
      this.dataSource = new MatTableDataSource<any>(this.data); // Asignar el valor después de obtener los datos
      console.log(this.data);
    })
  }

  cardData = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      content: 'Content for card 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      content: 'Content for card 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      content: 'Content for card 3',
      image: 'https://via.placeholder.com/150'
    },
    // Add more card data as needed
  ];

}
