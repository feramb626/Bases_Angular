import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { __importDefault } from 'tslib';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public chaaracters: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  public Borrarpersonaje : EventEmitter<string> = new EventEmitter();



  public borrar(indice?:string):void{
    //TODO EMITIR ID DEL PERSONAJE
    // console.log('El indice es : ',indice)

    // this.Nuevopersonaje.emit(this.Character);
    if(!indice) return;

    this.Borrarpersonaje.emit(indice);
  }
}
