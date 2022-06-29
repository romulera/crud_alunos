# Crud para cadastro de alunos - 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Servidor

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run Json Server and watch db.json file 

## Geral

Por se tratar de uma avaliação de front end com angular e angular material foram priorizados os desenvolvimentos dos componentes relacionados ao frontend da aplicação.
A solução do banco de dados MySQL foi substituída pela solução Json-Serve.

1)	Criação projeto com angular
2)	Criação dos componentes;Add, Edit, List, Login, Register
3)	Criação do Router com as rotas (endpoints)
4)	Criação do router-outlet no index.html
5)	Instalação do material e apenas os componentes que vou utilizar na aplicação dentro do app.module.ts
6)	Criação do Students.Service; HttpClient, e criação da url.
7)	Criação do método para listar todos alunos
8)	Importação do servisse dentro do componente de listagem de alunos
9)	Injeção de dependência 
10)	Inscrição no método getall do service
11)	Criação da mat-table para receber a lista de alunos
12)	Importação do reactive forms
13)	Importação do mat-form-field
14)	Criação do formgroup; nome, sobrenome, email.
15)	Criação do método para salvar dados utilizando método post
16)	Importação do Student.Service no componente Add
17)	Inscrição do método no de salvar dados
18)	Importação do snackbar para informar operações realizadas
19)	Criação da mensagem do snackbar no método que salva os dados
20)	Criação do comando que resta o formulário
21)	Criação de uma nova coluna com botões de editar e apagar aluno
22)	Na tabela de listar estudantes escutando um evento de click e recuperando o ID para remover o aluno do banco de dados 
23)	Crio o método deleteStudent que usa o parâmetro ID para buscar registro no DB
24)	Crio esse método no service também 
25)	No list-student uso método do service e faço  a inscrição.
26)	No Service passo os parâmetros para deleção 
27)	Coloco o método ngOnInit dentro do método de deletar estudante.
28)	No router declaro que a rota ira receber o ID como parâmetro 
29)	Importo o Formgroup, Service, Snackbar dentro do componente de edição 
30)	Injeção de dependência; StudentService, Snackbar
31)	Criação do formulário de edição 
32)	Criação do método de update
33)	Importação do RouterModule e ActivateRouter
34)	Injeção do ActivateRouter
35)	Faço snapshot para recuperar o ID da rota
36)	No Service crio o método getStudentById
37)	Uso o método getStudentById no OnInit do componente de edição 
38)	Passo o form como os dados do aluno para serem editados
39)	Criação do método PUT para atualizar o aluno no Service
40)	Método update usa o ID e os dados para atualizar
41)	Importação do Router no edit student para navegar até o componente Lista pois edição do aluno 
42)	Criação de Snackbar para deleção de aluno 
43)	Importação do MatTableDataSource para criação de filtro de busca de aluno 
44)	Criação da var DataSource para receber o StudentData
45)	Criação do método ApplyFilter que recebe os dados do input vindos do html via $event
46)	Criação da rota vazia para direcionamento da pagina de login
47)	Criação do formulário de login 
48)	Criação dos validators do formulário 
49)	Criação método de login
50)	Criação formulário de cadastro 
51)	Criação dos validators de cadastro 
52)	Criação do método cadastro
53)	Injeção de dependência no componente de registro 
54)	Inscrição no student 
55)	Importação de snackbar
56)	Importação router para navegar até pagina de login



