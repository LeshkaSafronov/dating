import {Component, OnInit} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

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
        iconSize: [ 60, 60 ],
        iconUrl: 'https://pp.userapi.com/c627925/v627925827/2cd5f/ePoB3eeM98g.jpg',
        className: 'ui medium circular image'
      })
    }),
    marker([ 43.879966, -118.726909 ], {
      icon: icon({
        iconSize: [ 60, 60 ],
        iconUrl: 'https://pp.userapi.com/c626325/v626325794/1e3e6/sItGU2UGOKU.jpg',
        className: 'ui medium circular image'
      })
    })
  ];

  constructor() { }

  ngOnInit() {
  }

}
