import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ViewGuard } from './shared/view.guard';
import { CreateGuard } from './shared/create.guard';
import { UpdateGuard } from './shared/update.guard';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
const routes: Routes = [
  {
    path: 'home', 
    component: HomePageComponent,
    canActivate: [AuthGuardService],
    children:[
      {
        path: 'viewinvoice', 
        component: ViewInvoiceComponent,
        canActivate: [ViewGuard],
      },
      {
        path: 'createinvoice', 
        component: CreateInvoiceComponent,
        canActivate: [CreateGuard],
      },
      {
        path: 'updateinvoice', 
        component: UpdateInvoiceComponent,
        canActivate: [UpdateGuard],
      }
    ]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent]