import { Routes } from '@angular/router';

import { authGuard, publicGuard } from './core/guards';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VideospublicitariosComponent } from './pages/videospublicitarios/videospublicitarios.component';
import { WoocommerceComponent } from './pages/woocommerce/woocommerce.component';
import { CampanaadsComponent } from './pages/campanaads/campanaads.component';
import { MenudigitalComponent } from './pages/menudigital/menudigital.component';
import { EstrategiasComponent } from './pages/estrategias/estrategias.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { PaginaswebComponent } from './pages/paginasweb/paginasweb.component';
import { MarketingdigitalComponent } from './pages/marketingdigital/marketingdigital.component';
import { DisenograficosComponent } from './pages/disenograficos/disenograficos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { WordpressyelementorComponent } from './pages/cursos/wordpressyelementor/wordpressyelementor.component';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura.component';
import { PoliticasComponent } from './pages/politicasdeprivacidad/politicas.component';
import { TarjetadigitalComponent } from './pages/tarjetadigital/tarjetadigital.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { TiendawordpressComponent } from './pages/cursos/tiendawordpress/tiendawordpress.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { MarketingymediosocialesComponent } from './pages/cursos/marketingymediosociales/marketingymediosociales.component';
import { AlquilerwebComponent } from './pages/alquilerweb/alquilerweb.component';




export const routes: Routes = [
 /*  {
    path: '', redirectTo: '/', pathMatch: 'full'
  }, */
  {
    path: '',
    /* canActivate: [authGuard], */
    component: HomeComponent
  },
  {
    path: 'disenograficos',
    component: DisenograficosComponent
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'registrame',
        loadComponent: () => import('./pages/auth/register/register.component'),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component'),
      },

    ],
  },
  {
    path: 'dasboard',
    canActivate: [authGuard],
    component: DashboardComponent
  },
  {
    path: 'promociones',
    component: PromocionesComponent
  },
  {
    path: 'alquilerweb',
    component: AlquilerwebComponent
  },
  {
    path: 'preguntas-frecuentes',
    component: PreguntasFrecuentesComponent
  },
  {
    path: 'aviso-legal',
    component: AvisoLegalComponent
  },
  {
    path: 'politicas',
    component: PoliticasComponent
  },
  {
    path: 'marketingdigital',
    component: MarketingdigitalComponent
  },
  {
    path: 'paginasweb',
    component: PaginaswebComponent
  },
  {
    path: 'contactos',
    component: ContactosComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'hosting',
    component: HostingComponent
  },
  {
    path: 'estrategias',
    component: EstrategiasComponent
  },
  {
    path: 'menudigital',
    component: MenudigitalComponent
  },
  {
    path: 'tarjetadigital',
    component: TarjetadigitalComponent
  },
  {
    path: 'campañas-adwords',
    component: CampanaadsComponent
  },
  {
    path: 'tiendas-online',
    component: WoocommerceComponent
  },
  {
    path: 'videos',
    component: VideospublicitariosComponent
  },
  {
    path: 'wordpressyelementor',
    component: WordpressyelementorComponent
  },
  {
    path: 'marketingymediosociales',
    component: MarketingymediosocialesComponent
  },
  {
    path: 'tiendawordpress',
    component: TiendawordpressComponent
  },
  {
    path: 'arquitectura',
    component: ArquitecturaComponent
  },
  {
    path: 'catalogo',
    component: CatalogosComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
