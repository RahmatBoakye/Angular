import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//Types of JS
//ES5 = older js
//ES6 = new js (which is TypeScript)
//TypeScript = ES6 + some specific typescript features

//Browsers don't support TS, they barely support ES6 js
//To convert from TS to ES6 or ES5 vesion of js, we use a Transpiler
