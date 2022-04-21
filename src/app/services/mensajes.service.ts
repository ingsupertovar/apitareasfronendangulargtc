import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mensaje} from '../models/mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
    get(id: any) {
      throw new Error('Method not implemented.');
    }

 

    API_URI = 'https://608adc0d737e470017b7410f.mockapi.io/api/v1/todos';

    constructor(private http: HttpClient) { }

    getTipificaciones() {
      return this.http.get(`${this.API_URI}`);
    }

    getTipificacion(id: string) {
      return this.http.get(`${this.API_URI}/${id}`);
    }

    delete(id: string) {
      return this.http.delete(`${this.API_URI}/${id}`);
    }

    saveTipificacion(mensaje: Mensaje) {
      return this.http.post(`${this.API_URI}`, mensaje);
    }

  
  
  
   updateTipificacion(id: any, updateMensaje: Mensaje): Observable<Mensaje> {
      return this.http.put(`${this.API_URI}/${id}`, updateMensaje);
  }


 update(id: any, mensaje: any): Observable<any> {
  return this.http.put(`${this.API_URI}/${id}`, mensaje);
}

  }





