import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class dbzservice {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public nuevopersonaje(Character:Character):void{
    // console.log('Mainpage');
    // console.log(Character)

    const nuevopersonaje:Character = { id: uuid(), ...Character }

    this.characters.push(nuevopersonaje);
  }

  // public borrarpersonaje(indice:number):void{
  //   this.characters.splice(indice, 1);
  // }
    public borrarpersonajeporid(id:string):void{

      this.characters = this.characters.filter( Character => Character.id !== id );
  }

}
