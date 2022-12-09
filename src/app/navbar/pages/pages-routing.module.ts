import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestasComponent} from './encuestas/encuestas.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EncuestasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
