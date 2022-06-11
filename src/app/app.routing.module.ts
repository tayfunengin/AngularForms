import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { FormReactiveComponent } from "./form-reactive/form-reactive.component";
import { FormTdComponent } from "./form-td/form-td.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'formTd', component: FormTdComponent},
  { path: 'formReactive', component: FormReactiveComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}