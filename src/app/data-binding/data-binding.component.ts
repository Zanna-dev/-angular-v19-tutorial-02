import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

    dummyData : any;
    isEligible : boolean;
    constructor(private _sharedData: SharedDataService) { 
     this.dummyData = this. _sharedData.userData;
     this.isEligible = this._sharedData.isEligibleForSubscription();
    }
  // name :string = "FEDLearning";
  // topic : string = "Data Binding";
  // image : string = "https://media.istockphoto.com/id/1405973719/photo/automation-software-to-archiving-and-efficiently-manage-and-information-files-document.jpg?s=612x612&w=0&k=20&c=MyC_nm0Ro5wzbi6YexDGUzRNzZlkXlXHyoiIyfDFyjI="
  // random = "";

  // onSave() {
  //   alert("Data Saved Successfully");
  // }

  // onChange() {
  //   alert("Country Changed Successfully");
  // }
}
