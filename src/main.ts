import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment.development';

console.log('Environment Config: ' + JSON.stringify(environment));

/*
  More about examples/ explanation of environment variable:
    https://dev.to/this-is-angular/angular-15-what-happened-to-environmentts-koh
*/
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
