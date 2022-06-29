import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//importando os componentes para ele ficarem disponveis para as rotas
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';


//construindos os endpoints dos components
const routes: Routes = [
    { 
        path: '', redirectTo: 'login', pathMatch: 'full'
     },
    {
        path:'add',
        component:AddStudentComponent
    },
    {
        path:'edit/:id',
        component:EditStudentComponent
    },
    {
        path:'list',
        component:ListStudentComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegistrationStudentComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }