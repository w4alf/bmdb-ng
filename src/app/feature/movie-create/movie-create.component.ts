import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = new Movie();
  title: string ="Movie Create";

  constructor(private movieSvc: MovieService, private router:Router) { }

  ngOnInit() {
  }

  save(): void {

    this.movieSvc.save(this.movie).subscribe(jresp=>{
      console.log("saved movie..");

      console.log(this.movie);
      this.router.navigateByUrl("/movies/list")
    });
  }

}
