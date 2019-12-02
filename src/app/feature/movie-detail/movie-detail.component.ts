import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie = new Movie();
  title: string ="Movie Detail";
  id: number = 0;


  constructor(private movieSvc: MovieService, private router:Router, private route: ActivatedRoute, private loc: Location) {


   }

  ngOnInit() {
    //get the id from the URL
    this.route.params.subscribe(parms=>this.id=parms['id']);
    
    // get the movie from the movie service
    this.movieSvc.get(this.id).subscribe(jr=> {

      this.movie = jr.data as Movie;
    });
  }

  delete(): void {

    this.movieSvc.delete(this.id).subscribe(jr=>{
      console.log("deleting movie..");

   
      this.router.navigateByUrl("/movies/list")

      //sean need to fix

      

    });

  }


}
