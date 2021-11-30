import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdraComponent } from './adra/adra.component';
import { AtivAgricComponent } from './ativ-agric/ativ-agric.component';
import { AtivProfComponent } from './ativ-prof/ativ-prof.component';
import { AtivRecComponent } from './ativ-rec/ativ-rec.component';
import { ATMComponent } from './atm/atm.component';
import { CieSauComponent } from './cie-sau/cie-sau.component';
import { EstNatComponent } from './est-nat/est-nat.component';
import { HabDomComponent } from './hab-dom/hab-dom.component';
import { HabManComponent } from './hab-man/hab-man.component';
import { MesEspComponent } from './mes-esp/mes-esp.component';
import { MenuPositionExampleComponent } from './menu-position-example/menu-position-example.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full',
  },
    
  {
    path:'AtivProf', component: AtivProfComponent,
    data: { 
      breadcrumb: 'AtividadesProfissionais'
    }, 
  },
  { 
    path:'AtivAgric', component: AtivAgricComponent,
    data: {
      breadcrumb: 'AtividadesAgricolas'
    },
    children: [
    {
      path:'',
      component: AtivAgricComponent
    }
  ] 
  },
  {
    path:'AtivRec', component: AtivRecComponent,
    data: {
      breadcrumb: 'AtividadesRecreativas'
    },
    children: [ 
    {
      path:'',
      component: AtivRecComponent
    }
  ] 
  },
  { 
    path:'ATM', component: ATMComponent,
    data: {
      breadcrumb: 'ATM'
    },
    children: [
    {
      path:'',
      component: ATMComponent
    }
  ] 
  },
  { 
    path:'CieSau', component: CieSauComponent,
    data: {
      breadcrumb: 'CienciaSaude'
    },
    children: [
    {
      path:'',
      component: CieSauComponent
    }
  ] 
  },
  { 
    path:'EstNat', component: EstNatComponent,
    data: {
      breadcrumb: 'EstudosNatureza'
    },
    children: [
    {
      path:'',
      component: EstNatComponent
    }
  ] 
  },
  { 
    path:'HabDom', component: HabDomComponent,
    data: {
      breadcrumb: 'HabilidadesDomesticas'
    },
    children: [
    {
      path:'',
      component: HabDomComponent
    }
  ] 
  },
  { 
    path:'ADRA', component: AdraComponent,
    data: {
      breadcrumb: 'ADRA'
    },
    children: [
    {
      path:'',
      component: AdraComponent
    }
  ] 
  },
  {
    path:'MesEsp', component: MesEspComponent,
    data: {
      breadcrumb: 'MestradoEspecialidades'
    },
    children: [
    {
      path:'',
      component: MesEspComponent
    }
  ] 
  },
  {
    path:'HabMan', component: HabManComponent,
    data: {
      breadcrumb: 'HabilidadesManuais'
    },
    children: [
    {
      path:'',
      component: HabManComponent
    }
  ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
