import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'dbz-addcaracter',
  templateUrl: './addcaracter.component.html',
  styleUrls: ['./addcaracter.component.css']
})
export class AddcaracterComponent {

  public Character: Character = {
    name: '',
    power: 0
  };

  @Output()
  public Nuevopersonaje : EventEmitter<Character> = new EventEmitter();


  emitCharacter():void{

    // debugger;
    console.log (this.Character);

    if (this.Character.name.length === 0) return;

    this.Nuevopersonaje.emit(this.Character);

    this.Character = { name: '', power: 0 };
  }

}
