import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mainpagecomponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddcaracterComponent } from './components/addcaracter/addcaracter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Mainpagecomponent,
    ListComponent,
    AddcaracterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Mainpagecomponent
  ]
})
export class DbzModule { }
