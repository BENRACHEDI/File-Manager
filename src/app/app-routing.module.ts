import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PartagedocumentComponent } from './pages/partagedocument/partagedocument.component';
import { DocumentComponent } from './pages/document/document.component';
import { ClassementComponent } from './pages/classement/classement.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
        { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'partage', component: PartagedocumentComponent},
        { path: 'document', component: DocumentComponent},
        { path: 'classement', component: ClassementComponent},
        { path: 'workflow', component: WorkflowComponent},
        { path: 'adminitration', component: AdministrationComponent},
        { path: 'login', component: LoginComponent},
        { path: 'register', component: RegisterComponent},

          // otherwise redirect to login
        { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
