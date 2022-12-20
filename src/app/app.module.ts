import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { PanelComponent } from './panel/panel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



// Interceptors
import { JwtInterceptorService } from './jwt-interceptor.interceptor';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { UdenarHeaderComponent } from './headers/udenar-header.component';
//sidenav
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { EncuestasComponent } from './shared/dashboard/pages/encuestas/encuestas.component';
import { DocumentosComponent } from './shared/dashboard/pages/documentos/documentos.component';
import { GraficosComponent } from './shared/dashboard/pages/graficos/graficos.component';
import { AsignacionesComponent } from './shared/dashboard/pages/asignaciones/asignaciones.component';
import { AsigEstComponent } from './shared/dashboard/pages/asig-est/asig-est.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    NavbarComponent,
    UdenarHeaderComponent,
    EncuestasComponent,
    DocumentosComponent,
    GraficosComponent,
    AsignacionesComponent,
    AsigEstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatCardModule
  ],
  exports: [

    MatSidenav
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
