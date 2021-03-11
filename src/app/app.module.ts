
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { AdminComponent } from './admin/admin/admin.component';
import { CategoryComponent } from './Category/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';
import { LeagueComponent } from './league/league.component';


const routes: Routes=[ //aqui declaramos una array de todas las rutas existentes en la aplicasion
    {path:'category',component: CategoryComponent},
    {path:'team',component: TeamComponent},
    {path:'game',component: GameComponent},
  // {path:'persona',component: PersonaComponent},
  // {path:'categoria',component: CategoriaComponent},
  // {path:'reportes',component: ReportesComponent},
  // {path:'user',component: UserComponent},
  // {path:'clientes',component: ClienteComponent},
  // {path:'vendedor',component: VendedorComponent},
  // {path:'empresa',component: EmpresaComponent},
  // {path:'producto/:nombre/:iden',component: ProductoComponent},
  // {path:"categoria",component: CategoriaComponent},
  // {path:"proforma",component: ProformaComponent},
 // {path:"admincliente",component: AdminClienteComponent}
 
  
 

   // en caso de queramos  pasar parametros  mediante una ruta , se realiza de la siguiente manera
  // {path:'componente2/:id/:titulo',component: Componente2Component},
 // {path:'**',component: Componente0Component}// una ruta de este tipo siempre de ultimo, caso contrario afecta a las otras rutas
 

]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoryComponent,
    TeamComponent,
    GameComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule, //aqui tambien lo añadimos
    FormsModule ,         //aqui tambien
    //aqui agregamos esta funcion y le pasmos nuestro array de rutas -> routes declarado arriba
    RouterModule.forRoot(routes),
    
     BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [], //exportamos como provider ProductosServices
  bootstrap: [AppComponent]
})
export class AppModule { }
