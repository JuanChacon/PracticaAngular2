import { Restaurant } from './../model/restaurant';
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { RestaurantService } from '../services/restaurante.service';
//import { Promise } from 'es6-shim';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurant-add',
    templateUrl: '/app/views/restaurant-add.html'
 

})

// Clase del componente donde iran los datos y funcionalidades
export class AddRestaurantComponent implements OnInit {
    //public parametro;
    public titulo = "Crear nuevo Restaurante"
    public restaurante: Restaurant;
    public errorMesage: string;
    public status:number;

    public filesToUpload: Array<File>;

    constructor( private _restaService: RestaurantService,  private _route:ActivatedRoute,
        private _router:Router) {}

        onSubmit(){
            this._restaService.addRestaurant(this.restaurante)
            .subscribe(
                respose =>{
                this.restaurante = respose;
                this.status = this.restaurante.id;
                if(this.status < -1){
                alert("error en el servidor");

                }
                },
                error=>
                {
                    this.errorMesage = <any>error;
                    if(this.errorMesage !== null){
                    //console.log(this.errorMesage);
                    alert("error en la peticion");
                   
                }

                }
            );

            this._router.navigate(["/"]);
        }

        callPrecio(value:string){
            this.restaurante.precio=value;
        }
        public resultUpload:any;
        //interactuar con la vista
        /*
        fileChangeEvent(fileInput:any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.makeFileRequest("direcccionDondeSeGuardara", [] , this.filesToUpload).then(
            (result) =>{
            this.resultUpload = result;
            this.restaurante.img = this.resultUpload.filename;
            console.log(result.filename);
            },
            (error)=>{
                console.log(error);
            }
        );
        }

        makeFileRequest(url:string, params:Array<string>, files: Array<string>){
        return new Promise((resolve, reject) =>{
           var formData:any = new FormData();
           var xhr = new XMLHttpRequest();
           for(var i = 0 ; i < files.length; i++){
            formData.append("uploads", files[i], files[i].name);
           } 

           xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 ){
            if(xhr.status == 200){ // ==200 quiere decir que es correcto
                resolve(JSON.parse(xhr.response));
            
            }else{
                reject(xhr.response);
            }
            }
           }

           xhr.open("POST",url,true);
           xhr.send(formData);
        });
        }
*/
    ngOnInit() {
        this.restaurante = new Restaurant(0,"","",
        "",
      "null", "bajo" );
    }


}