import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, leaflet } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: Map;

  constructor() { }

  ngOnInit() {
    // this.leafletMap();
  }

  ionViewDidEnter () {
    this.leafletMap();
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('map').setView([28.644800, 77.216721], 10);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© projeto unisse',
    }).addTo(this.map);


    marker([28.6, 77]).addTo(this.map)
      .bindPopup('Ionic 4 <br> Leaflet.')
      .openPopup();
  }

  // /** Remove map when we have multiple map object */
  // ionViewWillLeave() {
  //   this.map.remove();
  // }

}
