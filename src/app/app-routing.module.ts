import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyToDoListComponent } from './components/my-to-do-list/my-to-do-list.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SecureInnerPageGuard } from './guard/secure-inner-page.guard';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo:'/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'my-to-do-list', component: MyToDoListComponent, canActivate: [SecureInnerPageGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
