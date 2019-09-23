import { Component, OnInit } from "@angular/core";
import { Map, latLng, tileLayer, Layer, marker, leaflet } from "leaflet";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.page.html",
  styleUrls: ["./mapa.page.scss"]
})
export class MapaPage implements OnInit {
  map: Map;
  public isSearchBarOpened = false;

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    // this.leafletMap();
  }

  ionViewDidEnter() {
    this.leafletMap();
    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => this.gotNewUserLocationData(data));
  }

  gotNewUserLocationData(data) {
    // console.log("inside gotNewUserLocationData");
    // console.log(data);
    this.map.panTo([data.coords.latitude, data.coords.longitude]);
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map("map").setView([-15.8244864, -47.9510528], 10);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© projeto unisse"
    }).addTo(this.map);

    marker([-15.8244864, -47.9510528])
      .addTo(this.map)
      .bindPopup("Popup!.")
      .openPopup();
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

  onSearch(event) {
    console.log(event);
  }

  clickOnSearchIcon(searchBarInput) {
    this.isSearchBarOpened = true;
    this.setFocusToSearchBar(searchBarInput);
  }

  setFocusToSearchBar(searchBarInput) {
    searchBarInput.setFocus();
  }
}
