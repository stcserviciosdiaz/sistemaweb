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
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '',
    /* canActivate: [authGuard], */
    component: HomeComponent
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/auth/sign-up/sign-up.component'),
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
    path: 'disenograficos',
    component: DisenograficosComponent
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
    path: 'registrame',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
