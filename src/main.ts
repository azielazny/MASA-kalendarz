import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


//jquery stosowany w plikach TS
$(document).ready(function () {
  $('h2').css('color', 'blue');
  $('h1').css('color', 'black');
});
