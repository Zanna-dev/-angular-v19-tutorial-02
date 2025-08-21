import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit {

  apiData: Iuser[] = [];
  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe(res => {
      this.apiData = res;
    })
  }

   addNewUser() {
    this.router.navigateByUrl('adduser');
  }

  onUpdate(id : number) {
    this.router.navigate(['updateuser',id]);
  }

  onView(id : number) {
   this.router.navigate(['viewuser',id]);
  }

  onDelete(id: number) {
    this.crud.deleteData(id).subscribe(res => {
      alert("Record deleted successfully!");
      this.getAllData();
    })
  }
}
