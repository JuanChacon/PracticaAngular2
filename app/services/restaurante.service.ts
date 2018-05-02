import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { Restaurant } from '../model/restaurant';

@Injectable()
export class RestaurantService{ 
    // modulo http
    //peticiones htttp, ajax
    constructor(private _http: Http){

    }
    //metodo con peticion AJAX
    getRestaurants() {
        return this._http.get("https://jsonplaceholder.typicode.com/posts")
        .map((res) => res.json());
    }

    getRestaurant(id:string ){
        return this._http.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .map((res) => res.json());   
    }

    addRestaurant(restaurant: Restaurant){
        let json = JSON.stringify(restaurant);
        let params = "json=" + json; // parametro de tipo json.
        let headers = new Headers({"Content-type":"application/x-www-form-urlencoded"}); // headers de la peticion http.
        return this._http.post("https://jsonplaceholder.typicode.com/posts", params,{headers:headers})
        .map(res => res.json());

    }

    editRestaurant(id: string,restaurant: Restaurant){
        let json = JSON.stringify(restaurant);
        let params = "json=" + json; // parametro de tipo json.
        let headers = new Headers({"Content-type":"application/x-www-form-urlencoded"}); // headers de la peticion http.
        return this._http.post("https://jsonplaceholder.typicode.com/posts/"+id, params,{headers:headers})
        .map(res => res.json());

    }

    deleteRestaurante(id:string){
        return this._http.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .map((res) => res.json()); 
    }
}


