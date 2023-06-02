import { Component } from '@angular/core';

@Component({
  selector: 'app-heroess-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public heroslist: string[] = ['Spiderman','Thor','Hulk','Hawk eye'];
  public heroeborrado?: string;

  
  Borrarultimoheroe() : void{
   this.heroeborrado = this.heroslist.pop();
  }

}
