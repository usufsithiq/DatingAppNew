import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={}



  constructor(public accountService: AccountService,private router:Router,private toast :ToastrService) { }
  ngOnInit(): void {      
  }
  login()
  {
    this.accountService.login(this.model).subscribe(response=>{
      this.router.navigateByUrl('/members');
      console.log(response);      
    },
    error=>{
      console.log(error);
      this.toast.error(error.error);
    });
  }
  logout()
  {
    this.accountService.logout();    
    this.router.navigateByUrl('/');
  }

   
}
