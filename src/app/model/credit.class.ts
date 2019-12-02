import { Movie } from './movie.class';
import { Actor } from './actor.class';

export class Credit {

    id: number;
    movie: Movie;
    actor: Actor;
    role: string;
    
    constructor(id: number= 0 , movie: Movie = new Movie(), actor: Actor = new Actor()) {
            
        this.id = id;
        this.movie = movie;
        this.actor = actor;
   
    
    }


}
