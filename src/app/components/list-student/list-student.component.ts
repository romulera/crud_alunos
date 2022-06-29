import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//import o service aqui 
import { StudentsService } from '../../students.service'
import {MatTableDataSource} from '@angular/material/table';


//interface acessar o DB
export interface Student {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
}


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  headers = ['id', 'nome', 'sobrenome', 'email', 'acoes'];

  

  //injecao de dependencias
  constructor(private student:StudentsService, private snackBar: MatSnackBar) { }

  //variavel que recebe os dados do subscribe, um array do tipo any (objeto aluno)
  studentData: any=[];
  //varial que recebe os dados para pesquisa
  dataSource = new MatTableDataSource<Student>();

  
  ngOnInit(): void {
    //quando iniciar o componente ja chama no metodo
    this.student.getAllStudent().subscribe((allData) => {
      console.log(allData);
      this.studentData = allData;
      console.log(this.studentData);
      this.dataSource = new MatTableDataSource<Student>(this.studentData);
    });
  }

  deleteStudent(student_id: any) {
    //console.log(student_id);
    this.student.deleteStudent(student_id).subscribe((result)=>{
      //console.log(result);
      this.snackBar.open('Aluno deletado com sucesso!' , 'ok', {duration:3000});
      this.ngOnInit();
    })
  }
  //filtro para pesquisa
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}

