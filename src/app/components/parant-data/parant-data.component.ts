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
}
