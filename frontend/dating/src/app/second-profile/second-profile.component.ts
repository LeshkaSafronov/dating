import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import {icon, latLng, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-second-profile',
  templateUrl: './second-profile.component.html',
  styleUrls: ['./second-profile.component.css']
})
export class SecondProfileComponent implements OnInit {

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
    new Photo('Alexey', 'Safronov', 'https://pp.userapi.com/c626325/v626325794/1e3e6/sItGU2UGOKU.jpg', 'https://pp.userapi.com/c626517/v626517794/23ee9/3vtYdmeYeRU.jpg', 0, 20, '21h')
  ];

  constructor() { }

  ngOnInit() {
  }

}
