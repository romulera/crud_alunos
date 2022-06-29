import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css']
})
export class RegistrationStudentComponent implements OnInit {

  registrationForm = new FormGroup({
    email: new FormControl('email', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.required, Validators.minLength(6)])
  
  });
  

  constructor(
    private http: HttpClient, 
    private student: StudentsService, 
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }


  register() {
    console.log(this.registrationForm.value);
    this.student.register(this.registrationForm.value).subscribe((result)=>{
      console.log(result);
      this.snackBar.open('Usuario cadastrado com sucesso !' , 'ok')
      this.registrationForm.reset();
      this.router.navigate(['/login']);

    }, (error)=>{
      console.log(error);
      this.snackBar.open('Erro ao cadastrar usuario !' , 'ok')
    }
    );
  }



}
