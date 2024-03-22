import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { PaginaswebComponent } from './components/paginasweb/paginasweb.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { MarketingdigitalComponent } from './components/marketingdigital/marketingdigital.component';
import { DisenograficosComponent } from './components/disenograficos/disenograficos.component';
import { ArquitecturaComponent } from './components/arquitectura/arquitectura.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { HostingComponent } from './components/hosting/hosting.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { MenudigitalComponent } from './components/menudigital/menudigital.component';

//firestore

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CampanaadsComponent } from './components/campanaads/campanaads.component';
import { VideospublicitariosComponent } from './components/videospublicitarios/videospublicitarios.component';
import { WoocommerceComponent } from './components/woocommerce/woocommerce.component';
import { MainComponent } from './components/main/main.component';


//login
import { HttpClientModule } from '@angular/common/http';
import { BtnwhatsappComponent } from './components/btnwhatsapp/btnwhatsapp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaswebComponent,
    NavmenuComponent,
    MarketingdigitalComponent,
    DisenograficosComponent,
    EstrategiasComponent,
    ArquitecturaComponent,
    TiendaComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    ContactosComponent,
    HostingComponent,
    MenudigitalComponent,
    LoginComponent,
    RegisterComponent,
    CampanaadsComponent,
    VideospublicitariosComponent,
    WoocommerceComponent,
    MainComponent,
    BtnwhatsappComponent,
    DashboardComponent,
    CatalogosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
