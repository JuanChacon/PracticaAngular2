import { Restaurant } from './../model/restaurant';
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { RestaurantService } from '../services/restaurante.service';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurant-detail',
    templateUrl: '/app/views/restaurant-detail.html',

})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantDetalleComponent implements OnInit {
    public parametro:string;
    public restaurante: Restaurant;
    public errorMesage:string;
    public status:number;

    constructor( private _restaService:RestaurantService,private _route:ActivatedRoute,
        private _router:Router
        ){}
    
    ngOnInit(){
    // this.parametro = this._routerParams.get("id");
    this._route.params.forEach((params:Params) =>{
        this.parametro = params["id"];
    });
     this.getRestaurantt();
    }

    getRestaurantt(){
       // let id = this._routerParams.get("id");
        this._route.params.forEach((params:Params) =>{
            let id= params["id"];
           // this.parametro = params["id"];
           let random = params["id"];
            this._restaService.getRestaurant(id)
            .subscribe(
                response =>{
                    this.restaurante = response;
                    this.status = this.restaurante.id;
                    console.log(this.status);
                    console.log(id);
                    if( this.status > 100 ){
                        //alert("error en el servidor");
                      // this._router.navigate(["Home"]);
                    }
                         },
                         error => {
                    this.errorMesage = <any>error;
                    if(this.errorMesage !== null){
                    //console.log(this.errorMesage);
                    alert("error en la peticion");
                   this._router.navigate(["/"]);
                }
                         }
            );   
        });

      //  let random = this._routerParams.get("id");
          
    }
 }
