import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DisenograficosComponent } from './components/disenograficos/disenograficos.component';
import { MarketingdigitalComponent } from './components/marketingdigital/marketingdigital.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaswebComponent } from './components/paginasweb/paginasweb.component';
import { HostingComponent } from './components/hosting/hosting.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { MenudigitalComponent } from './components/menudigital/menudigital.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CampanaadsComponent } from './components/campanaads/campanaads.component';
import { WoocommerceComponent } from './components/woocommerce/woocommerce.component';
import { VideospublicitariosComponent } from './components/videospublicitarios/videospublicitarios.component';


const rutas: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'disenograficos', component: DisenograficosComponent },
  { path: 'marketingdigital', component: MarketingdigitalComponent },
  { path: 'paginasweb', component: PaginaswebComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'tienda', component: TiendaComponent},
  { path: 'hosting', component: HostingComponent},
  { path: 'estrategias', component: EstrategiasComponent},
  { path: 'menudigital', component: MenudigitalComponent},
  { path: 'campañas-adwords', component: CampanaadsComponent },
  { path: 'tiendas-online', component: WoocommerceComponent },
  { path: 'videos', component: VideospublicitariosComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registrame', component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
})
export class AppRoutingModule { }
