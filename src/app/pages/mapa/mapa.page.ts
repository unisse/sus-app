import { Component, OnInit } from "@angular/core";
import { Map, latLng, tileLayer, Layer, marker, leaflet } from "leaflet";
import { Geolocation } from "@ionic-native/geolocation/ngx";

declare var google;

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.page.html",
  styleUrls: ["./mapa.page.scss"]
})
export class MapaPage implements OnInit {
  map: Map;
  public isSearchBarOpened = false;
  map2: any;

  constructor(private geolocation: Geolocation) {}

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
    this.map2 = new google.maps.Map(document.getElementById("map"));
    this.map = new Map("map").setView([-15.8244864, -47.9510528], 10);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© projeto unisse"
    }).addTo(this.map);

    marker([-15.8244864, -47.9510528])
      .addTo(this.map)
      .bindPopup("Popup!.")
      .openPopup();

    // this.map2 = new google.maps.Map(document.getElementById("map2"));
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

  onSearch(event) {
    console.log(event);
    console.log(event.target.value);

    if (event.target.value.length > 2) {
      console.log("do google search");
      var service = new google.maps.places.PlacesService(this.map2);
      console.log(service);
      service.textSearch(
        {
          location: new google.maps.LatLng(-33.8665433, 151.1956316),
          radius: "500",
          query: "restaurant"
        },
        this.mapsCallback
      );
    }
  }

  mapsCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log (results);
    }
  }

  clickOnSearchIcon(searchBarInput) {
    this.isSearchBarOpened = true;
    this.setFocusToSearchBar(searchBarInput);
  }

  setFocusToSearchBar(searchBarInput) {
    searchBarInput.setFocus();
  }
}
