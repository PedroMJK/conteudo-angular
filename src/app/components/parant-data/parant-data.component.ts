import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parant-data',
  standalone: true,
  imports: [],
  templateUrl: './parant-data.component.html',
  styleUrl: './parant-data.component.css'
})
export class ParantDataComponent {
  @Input() name: string = '';
  @Input() userData!: {email: string, role: string};
  // "!" garante para o typescript que o dado será iniciado.  Da mesma forma que string vazia no exemplo acima.
  @Input() userHobbies!: string[];

}
