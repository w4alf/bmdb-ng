import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actor: Actor = new Actor();
  title: string = "Actor Edit";
  id: number = 0;



  constructor(private actorSvc: ActorService, private router:Router, private route: ActivatedRoute, private loc: Location) { }

  ngOnInit() {

    //get the id from the URL
    this.route.params.subscribe(parms=>this.id=parms['id']);
    
    // get the movie from the movie service
    this.actorSvc.get(this.id).subscribe(jr=> {

      this.actor = jr.data as Actor;
    });


  }

  delete(): void {

    this.actorSvc.delete(this.id).subscribe(jr=>{
      console.log("deleting actor..");

   
      this.router.navigateByUrl("/actors/list")

      //sean need to fix

      

    });

  }


}
