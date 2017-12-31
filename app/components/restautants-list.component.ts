// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { RestaurantService } from '../services/restaurante.service';
import { Restaurant } from '../model/restaurant';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurants-list',
    templateUrl: '/app/views/restaurant-list.html',
    providers: [RestaurantService]

})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantListComponent implements OnInit {

 public titulo:string = "lista de Restaurants";

 public restaurantes: Restaurant[];
 public status: number;
 public errorMesage: any;
 public loading: boolean;
 public confirmacion: any;


 constructor(private _restaService: RestaurantService,
private _route:ActivatedRoute,
private _router:Router){ }

 ngOnInit(){
     console.log("component cargado");
     this.getRestaurantesDelServicio();
     this.loading = true;
 }

 getRestaurantesDelServicio(){
     //let box_restaurantes = <HTMLElement>document.querySelector("#restaurantList .loading"); //con Jquery
     //box_restaurantes.style.visibility = "visible"; //con Jquery
     this._restaService.getRestaurants()
     //metodo subscribe, para recoger el resultado y capturar los errores.
     .subscribe(
         resul => {
    this.restaurantes =  resul;
    this.status = this.restaurantes[0].id;
    //console.log(this.restaurantes[0].id);
    //console.log(this.status);
    if(this.status === 0 ){
        alert("error en el servidor");
    }
    //box_restaurantes.style.display = "none"; //con Jquery
    this.loading = false;
         },
         error => {
    this.errorMesage = <any>error;
    if(this.errorMesage !== null){
    console.log(this.errorMesage);
    alert("error en la peticion");
}
         }
     );
 }


 onBorrarRestaurante(id:string){
    this._restaService.deleteRestaurante(id)
    //metodo subscribe, para recoger el resultado y capturar los errores.
            .subscribe(
                resul => {
           this.status = this.restaurantes[0].id;
           //console.log(this.restaurantes[0].id);
           //console.log(this.status);
           if(this.status === 0 ){
               alert("error en el servidor");
           }
           this._restaService.getRestaurants();
           //box_restaurantes.style.display = "none"; //con Jquery
           this.loading = false;
                },
                error => {
           this.errorMesage = <any>error;
           if(this.errorMesage !== null){
           console.log(this.errorMesage);
           alert("error en la peticion");
        }
        }
    );
 }
 
 onBorrarConfirm(id:string){
this.confirmacion = id;
 }

 onCancelarConfirm(id:string){
    this.confirmacion = null;
 }
}
