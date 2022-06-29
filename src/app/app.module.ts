import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

///componentes do material 
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 



import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';









@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    LoginComponent,
    RegistrationStudentComponent, 
    
  ],
  imports: [
    BrowserModule, 
    //colocando routing module na cena
    AppRoutingModule, BrowserAnimationsModule,
    //importando os compnentes do material que vou precicsar para minha aplicação
    MatTabsModule,
    HttpClientModule, 
    MatTableModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
