import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { StudentsService } from '..//../students.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(
    private student: StudentsService, 
    private snackBar: MatSnackBar,
    private router: ActivatedRoute,
    private routerlink: Router,
  ) { }
    
   

    editStudent = new FormGroup({
      email: new FormControl(''),
      nome: new FormControl(''),
      sobrenome: new FormControl('')
  });

  

  ngOnInit(): void {
    //console.log(this.router.snapshot.params['id']);
    this.student.getStudentById(this.router.snapshot.params['id']).subscribe((result: any) => {
        console.log(result);
        this.editStudent = new FormGroup({
          email: new FormControl(result.email),
          nome: new FormControl(result.nome),
          sobrenome: new FormControl(result.sobrenome),
          });
      });
  }
   

  updateData(){
    //console.log(this.addStudent.value)
    this.student.updateStudent(this.router.snapshot.params['id'] , this.editStudent.value).subscribe((result)=>{
      console.log(result);
      this.snackBar.open('Aluno atualizado com sucesso!' , 'ok', {duration:3000});
      this.routerlink.navigate(['/list']);
      this.editStudent.reset();
    });
  }


}




