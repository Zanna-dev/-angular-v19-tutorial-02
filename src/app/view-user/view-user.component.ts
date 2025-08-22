import { Component, Inject } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResusableComponent } from '../resusable/resusable.component';

@Component({
  selector: 'app-view-user',
  imports: [ResusableComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
   parentProperty : string = "View-user : Kindly read the user details.";


  constructor(@Inject(CrudService) private crud: CrudService, private activeRoute: ActivatedRoute, private router: Router) { }
  userData: any;

  userId!: {
    uid: number;
  };

  ngOnInit(): void {

    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    }
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
    })

  }

  onClose(){
    this.router.navigateByUrl('crud');
  }

}
