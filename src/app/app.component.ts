import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParantDataComponent } from "./components/parant-data/parant-data.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParantDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Peter";  // Propiedade criada no componente pai para compartilhar

  userData = {
    email: "Peter@email.com",
    role: "Developer",
  } 

  userHobbies = ["Tocar violão", " Estudar"," Ler "]

  title = 'conteudo-angular';
}
