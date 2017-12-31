import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { RestaurantListComponent } from './components/restautants-list.component';
import { RestaurantDetalleComponent } from './components/detalles.component';
import { AddRestaurantComponent } from './components/addRestaurant';
import { EditRestaurantComponent } from './components/EditRestaurantComponent';
import { RestaurantService } from './services/restaurante.service';




@NgModule({
  declarations: [AppComponent, RestaurantListComponent,
    RestaurantDetalleComponent,
    AddRestaurantComponent,
    EditRestaurantComponent], //directivas del componente
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [appRoutingProviders,RestaurantService],
  bootstrap: [AppComponent]
})

export class AppModule {
}