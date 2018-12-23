import { Component, OnInit } from '@angular/core';
import {circle, icon, latLng, marker, polygon, tileLayer} from 'leaflet';

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
    circle([ 46.95, -122 ], { radius: 5000 }),
    polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
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
    }),
    marker([ 41.879966, -131.726909 ], {
      icon: icon({
        iconSize: [ 60, 60 ],
        iconUrl: 'https://pp.userapi.com/c631318/v631318897/d4d0/03ctBf6Kh90.jpg',
        className: 'ui medium circular image'
      })
    })
  ];

  constructor() { }

  ngOnInit() {
  }

}
