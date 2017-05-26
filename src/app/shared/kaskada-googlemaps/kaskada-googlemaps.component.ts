import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MapsAPILoader }            from 'angular2-google-maps/core';
declare let google: any;

@Component({
  selector: 'kaskada-googlemap',
  templateUrl: './kaskada-googlemaps.component.html',
  styleUrls: ['./kaskada-googlemaps.component.css']
})

export class KaskadaGoogleMapsComponent implements OnChanges{
  @Input()
  adres: string;

  lat;
  lng;
  geocoder;
  zoom: number = 14;

  constructor (private mapsAPILoader : MapsAPILoader) {
    this.adres = "";
  }

  ngOnChanges () {

    var _this = this;

    this.mapsAPILoader.load().then(function() {

      _this.geocoder = new google.maps.Geocoder();
      if(_this.adres != ""){
        _this.geocoder.geocode({ 'address': _this.adres }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            _this.lat = results[0].geometry.location.lat();
            _this.lng = results[0].geometry.location.lng();
          }
          else {
            if (status == "ZERO_RESULTS") {
              alert('Jest problem ze znalezieniem adresu w Google maps');
            }
            else {
              alert('Wystąpił nieoczekiwany błąd ze strony Google maps (problem :' + status + ')');
            }
          }
        });
      }
    });
  }
}
