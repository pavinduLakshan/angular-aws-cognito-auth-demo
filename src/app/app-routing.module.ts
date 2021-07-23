import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent,},
  { path: 'signin', component: SignInComponent,},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
