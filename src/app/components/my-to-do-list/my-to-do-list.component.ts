import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-to-do-list',
  templateUrl: './my-to-do-list.component.html',
  styleUrls: ['./my-to-do-list.component.css']
})
export class MyToDoListComponent {

  tasks: any[] = [];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getGoogleTasks()
  }
  getGoogleTasks(): void {
    this.authService.getGoogleTasks().subscribe(
      (response) => {
        // Processar os dados da resposta da API e atualizar a lista de tarefas
        this.tasks = response.items;
      },
      (error) => {
        console.log('Erro ao obter as tarefas:', error);
      }
    );
  }
}
