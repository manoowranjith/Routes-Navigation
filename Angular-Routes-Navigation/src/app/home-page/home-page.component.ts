import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  view()
  {
    if(localStorage.getItem("Role")!= "no-access")
    {
      this.router.navigate(['/home/viewinvoice'])
    }
  }
  create()
  {
    if(localStorage.getItem("Role")!= "no-access")
    {
      this.router.navigate(['/home/createinvoice'])
    }
  }
  update()
  {
    if(localStorage.getItem("Role")!= "no-access")
    {
      this.router.navigate(['/home/updateinvoice'])
    }
  }
}
