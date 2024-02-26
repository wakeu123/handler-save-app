import { ApplicationConfig } from "@angular/platform-browser";
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withDebugTracing } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withDebugTracing()),
        provideHttpClient(),
        importProvidersFrom(FormsModule, ReactiveFormsModule)

    ],
}