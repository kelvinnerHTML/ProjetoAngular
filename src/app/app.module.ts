import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MenuPositionExampleComponent } from './menu-position-example/menu-position-example.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { AtivAgricComponent } from './ativ-agric/ativ-agric.component';
import { AdraComponent } from './adra/adra.component';
import { HabDomComponent } from './hab-dom/hab-dom.component';
import { MesEspComponent } from './mes-esp/mes-esp.component';
import { ATMComponent } from './atm/atm.component';
import { AtivRecComponent } from './ativ-rec/ativ-rec.component';
import { EstNatComponent } from './est-nat/est-nat.component';
import { CieSauComponent } from './cie-sau/cie-sau.component';
import { HabManComponent } from './hab-man/hab-man.component';
import { AtivProfComponent } from './ativ-prof/ativ-prof.component';
import { BreadcrumbModule} from 'angular-crumbs'
 
 

@NgModule({
  declarations: [
    AppComponent,
    MenuPositionExampleComponent,
    AtivAgricComponent,
    AdraComponent,
    HabDomComponent,
    MesEspComponent,
    ATMComponent,
    AtivRecComponent,
    EstNatComponent,
    CieSauComponent,
    HabManComponent,
    AtivProfComponent,
    
    
  ],
  imports: [
    BreadcrumbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
