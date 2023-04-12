import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiCallBackendInterceptor } from './interceptor/ApiCallTestInterceptor';

@NgModule({
  /*
    to make directives (including components and pipes) from the current module
    available to other directives in the current module
  */
  declarations: [AppComponent],
  /*
    to makes the exported declarations of other modules
    available (custom module, thrid party module) in the current module
  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
  ],
  /*
    to make services and values avaliable in DI (Dependency Injection).
    If we import service to a module it will be
    available to all the components under that module
  */
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiCallBackendInterceptor,
      multi: true,
    },
  ],
  /*
    contains the entry component of the application.
    This only exists in the root module.
    When we are creating an application it will create an app.module as root module.
  */
  bootstrap: [AppComponent],
})
export class AppModule {}
