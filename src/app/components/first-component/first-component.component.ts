import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = "Pedro";
  age: number = 30;
  job: string = "Programador";
  hobbies = ["Programar", "Estudar", "Tocar Violão"];
  car = {
    name: "Ferrari",
    year: 2024,
  }
}
