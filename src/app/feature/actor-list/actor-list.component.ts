import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent extends BaseComponent implements OnInit {
    
    actors: Actor[] = [];
    jr: JsonResponse;
    title: string = "Actor-List";



  constructor(private actorSvc: ActorService) { 

    super();

  }

  ngOnInit() {

      super.ngOnInit();
      
      console.log("calling actor service list");

        this.actorSvc.list().subscribe(jr=> {
        this.actors = jr.data as Actor[];
      });

  }

  



}
