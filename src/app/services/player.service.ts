import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint = 'https://jsonplaceholder.typicode.com/users';
  }


  getAllUsers() {
    // return this.http.get(this.endPoint);
    const arr = [
      {
        id: '11111111A',
        name: 'Alejandro',
        lastname: 'Cantón García',
        fullname: 'Alejandro Cantón García',
        username: 'alexcan_97',
        acronym: 'EXACNG',
        job: 'Web Developer',
        img: 'https://mysite.gmv.com:443/User Photos/Imagenes del perfil/exacng_MThumb.jpg'
      },
      {
        id: '22222222B',
        name: 'Gabriel',
        lastname: 'Ibáñez Pérez',
        fullname: 'Gabriel Ibáñez Pérez',
        username: 'orionirico',
        acronym: 'EXGIBP',
        job: 'Web Developer',
        img: 'https://mysite.gmv.com:443/User Photos/Imagenes del perfil/exgibp_MThumb.jpg'
      },
      {
        id: '33333333C',
        name: 'Renato',
        lastname: 'Luigi Barra',
        fullname: 'Renato Luigi Barra',
        username: 'renato8000',
        acronym: 'RELB',
        job: 'Web Developer',
        img: 'https://mysite.gmv.com:443/User Photos/Imagenes del perfil/relb_MThumb.jpg'
      },
      {
        id: '44444444D',
        name: 'Pablo',
        lastname: 'Planelló San Segundo',
        fullname: 'Pablo Planelló San Segundo',
        username: 'plaxwell',
        acronym: 'TRPASS',
        job: 'Web Developer',
        img: 'https://mysite.gmv.com:443/User Photos/Imagenes del perfil/trpass_MThumb.jpg'
      },
      {
        id: '55555555E',
        name: 'Raúl',
        lastname: 'Tejedor García',
        fullname: 'Raúl Tejedor García',
        username: 'rtag_97',
        acronym: 'RTEG',
        job: 'Web Developer',
        img: 'https://mysite.gmv.com:443/User Photos/Imagenes del perfil/rteg_MThumb.jpg'
      }
    ];

    return arr;

  }
}
