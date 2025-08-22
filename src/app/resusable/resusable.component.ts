import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resusable',
  imports: [],
  templateUrl: './resusable.component.html',
  styleUrl: './resusable.component.scss'
})
export class ResusableComponent {

  @Input() childProperty : string = "Hello All : Welcome to FED Learning.";

}
