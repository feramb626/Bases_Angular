import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzservice } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class Mainpagecomponent {

  constructor( private dbzservice:  dbzservice ){}

  get characters(): Character[]{
    return[...this.dbzservice.characters];
  }

  public Ondeletecharacter(id:string):void{
    this.dbzservice.borrarpersonajeporid(id);
  }

  onaddcharacter(character:Character):void{
    this.dbzservice.nuevopersonaje(character);
  }

}
