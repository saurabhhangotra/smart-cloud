import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  public hoveredElement:any;
  

  sub!: Subscription;

    constructor(public ms: MovieService) {
      //console.log(this);
    }
  
    ngOnInit() {
      this.ms.searchMovie();
      this.sub = this.ms.searchMovie().subscribe(data => {
        console.log("hello");
        console.log(data.data)
        this.movies = data.data;
      });

      
    }
}
