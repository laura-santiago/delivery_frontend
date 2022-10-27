import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
    endpoint = 'http://localhost:8080/api/items';
    httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json'} )
  };

  constructor( private httpClient: HttpClient ) { }
 
  createItem ( item, blob){
    let formData = new FormData();
    formData.append("description", item.description);
    formData.append("price", item.price);
    formData.append("file", blob);

    console.log('Itemservice - description= '+ item.description);
    console.log('Itemservice - price= '+ item.price);
    console.log('Itemservice - blob= '+ blob);
    console.log('Itemservice - formData= '+ formData);

    return this.httpClient.post(this.endpoint, formData);
    // return this.httpClient.post(this.endpoint, item, this.httpOptions);
  }

  getItem(id) {
    return this.httpClient.get (this.endpoint + '/' + id);
  }

  getItems() {
    return this.httpClient.get (this.endpoint);
  }

  deleteItem(id){
    console.log (this.endpoint + '/' + id, this.httpOptions);
    return this.httpClient.delete(this.endpoint + '/' + id, this.httpOptions);
  }

  updateItem(id, item): Observable<any> {
    let valores: string;
    valores = this.endpoint + '/' + id;
    console.log('Service ruta='+valores);
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify( { ...item} ), this.httpOptions);
  }
}
