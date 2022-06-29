import { Injectable } from '@angular/core';
//importa o http client 
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  //criando URL
  url = 'http://localhost:3000/Alunos'

  //métodos listar todos alunos
  getAllStudent() {
    return this.http.get(this.url);
  }

  //método para cadastrar um novo aluno
  saveStudentData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);

  }

  //método deletar aluno pelo ID
  deleteStudent(id: any) {
    return this.http.delete(`${this.url}/${id}`)

  }

  //método para editar aluno pelo ID
  getStudentById(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }

  //método para atualizar aluno pelo ID
  updateStudent(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }

  //método para registrar um usuario
  register(data: any) {
    return this.http.post("http://localhost:3000/singupUsers", data)
  }

}
