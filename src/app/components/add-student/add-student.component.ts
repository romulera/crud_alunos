import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
//importa o service
import { StudentsService } from '../../students.service';
//importa o snackbar
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  //injecao de dependencia do service
  constructor(
    private student: StudentsService,
    private snackBar: MatSnackBar) { }

  addStudent = new FormGroup({
    email: new FormControl(''),
    nome: new FormControl(''),
    sobrenome: new FormControl('')
});

  ngOnInit(): void {
  }

  saveData(){
    //console.log(this.addStudent.value)
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      console.log(result);
      this.snackBar.open('Aluno cadastrado com sucesso!' , 'ok')
      this.addStudent.reset();
    });
  }

}



