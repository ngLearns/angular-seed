import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ApiAuthenticationInterceptor } from './http/api-authentication.interceptor';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { CacheInterceptor } from './http/cache.interceptor';
import { CommonModule } from '@angular/common';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpCacheService } from './http/http-cache.service';
import { HttpService } from './http/http.service';
import { I18nService } from './i18n.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { offlineProviders } from '@ngx-pwa/offline';
import { RouteReusableStrategy } from './route-reusable-strategy';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, HttpClientModule, TranslateModule, RouterModule, FormsModule],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    I18nService,
    HttpCacheService,
    ApiPrefixInterceptor,
    ApiAuthenticationInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    },
    offlineProviders({ guardsRedirect: true })
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
