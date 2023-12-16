import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');
export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(),  { provide: LOCALE_ID, useValue: 'pt-BR' }    ]

};
