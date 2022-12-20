import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { EncuestasComponent } from './shared/dashboard/pages/encuestas/encuestas.component';
import { DocumentosComponent } from './shared/dashboard/pages/documentos/documentos.component';
import  { ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'panel',
      component: PanelComponent,
      children: [{
        path: 'encuestas',
        component: EncuestasComponent
      },{
        path: 'documentos',
        component: DocumentosComponent
      },
    ]
  },
  { path: '**', component: PanelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
