import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { registerLocaleData, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImageComponent } from './components/image/image.component';
import { IonicModule } from '@ionic/angular';

import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    FilterPipe,
    ImageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    FilterPipe,
    ImageComponent,
    TranslateModule
  ],
  providers: [],
})
export class SharedModule { }
