import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  actor: Actor = new Actor();
  title: string ="Actor Create";


  constructor(private actorSvc: ActorService, private router:Router) { }


  ngOnInit() {

  }

  save(): void {

    this.actorSvc.save(this.actor).subscribe(jresp=>{
      console.log("saved actor..");

      console.log(this.actor);
      this.router.navigateByUrl("/actors/list")
    });
  }


}
