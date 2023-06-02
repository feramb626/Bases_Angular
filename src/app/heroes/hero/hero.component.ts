import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = "ironman";
  public age:number = 45;

  get pepe(): string {
    return this.name.toUpperCase();
  }

  hdess():String{
    return `${ this.name } - ${ this.age }`; 
  }

  changename() :void{
    this.name = "Spiderman";
  }

  changeage() :void {
    this.age = 21;
  }
}
