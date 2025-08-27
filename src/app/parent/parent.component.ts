import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { ResusableComponent } from '../resusable/resusable.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, Sibling1Component, Sibling2Component, ResusableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
  parentProperty: string = "This is the parent component data";

  recieveMessage: string = "";
  sibling1Data: any;
  sibling2Data: any;

  @ViewChild('reusable')
  resusableComp: ResusableComponent = new ResusableComponent;

  ngAfterViewInit(): void {
    this.resusableComp.childProperty = "Greeting from Parent Component."
  }
 
  recieveData(data: any) {
    this.recieveMessage = data;
  }

  receiveEvent1(data: any) {
    this.sibling1Data = data;
    console.log(this.sibling1Data);
  }

  receiveEvent2(data: any) {
    this.sibling2Data = data;
  }
}