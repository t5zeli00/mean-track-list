<<<<<<< HEAD
import './polyfills.ts';
=======
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.log(err));
=======
  .catch(err => console.error(err));
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f

