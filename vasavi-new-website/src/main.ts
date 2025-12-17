import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app/app';
import { appConfig } from './app/app.config';
import { NgHcaptchaModule } from 'ng-hcaptcha';

bootstrapApplication(App, {
  ...appConfig, 
  providers: [
    ...(appConfig.providers || []),

    provideHttpClient(),
    provideAnimations(),

    importProvidersFrom(
      NgHcaptchaModule.forRoot({
        siteKey: '2d86ca1a-fb4c-4bc0-aae6-9d9e0cb2db86', 
      })
    )
  ]
}).catch(err => console.error(err));
