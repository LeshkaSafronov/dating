import {Component, OnInit} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';
import {Photo} from '../photo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  layers = [
    marker([ 46.879966, -121.726909 ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    })
  ];

  photos: Photo[] = [
    new Photo('Женя', 'Гусаковская', 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg', 'https://pp.userapi.com/c627925/v627925827/2cd5f/ePoB3eeM98g.jpg', 1, 15, '2h'),
    new Photo('Женя', 'Гусаковская', 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg', 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg', 1, 4, '2h')
  ]

  constructor() { }

  ngOnInit() {
  }

}
