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
  
  infoStarWars(){
    this.starWarsService.getData().subscribe( data => {
      this.data = data.results;
      console.log(this.data)
    })
}


}
