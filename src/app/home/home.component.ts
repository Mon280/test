import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info: any[] = [];
  constructor(private starWarsService: StarwarsService) { }

  ngOnInit(): void {
    this.infoStarWars();
  }
  
  infoStarWars(){
    this.starWarsService.getInfo().subscribe( info => {
      this.info = info;
      console.log(this.info)
    })
  }

}
