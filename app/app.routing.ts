import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { RestaurantListComponent } from './components/restautants-list.component';
import { RestaurantDetalleComponent } from './components/detalles.component';
import { AddRestaurantComponent } from './components/addRestaurant';
import { EditRestaurantComponent } from './components/EditRestaurantComponent';

const appRoutes: Routes = [
    {
        //rutas por defecto
        path: ' ',//cuando este vacio se redireccione a /
        redirectTo: '/',
        pathMatch: 'full' //para que haga la redireccionae

    },
    {path:'',  component: RestaurantListComponent},
    {path: 'restaurante/:id',component: RestaurantDetalleComponent},
    {path: 'crear-restaurante', component: AddRestaurantComponent},
    {path: 'editar-restaurante/:id',  component: EditRestaurantComponent},
    {path: 'donde-como-hoy/:id',  component: RestaurantDetalleComponent}


];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);