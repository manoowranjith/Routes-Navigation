import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {

  userRole:any
  submitForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private http:HttpClient,private router:Router)
  {

  }
  ngOnInit(): void {
    localStorage.setItem("Role","no-access")
  }

  GetUserData()
  {
    // console.log(this.submitForm.value.email)
    // let url="http://localhost:3000/userData"
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    // let url="http://localhost:3000/userRole"
    // this.http.post(url,{name:'manoow'}).toPromise().then((data:any)=>{
    //   console.log(data)
    // })
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/userRole', JSON.stringify({email: this.submitForm.value.email, password:this.submitForm.value.password}), {
      headers: headers
    })
    .subscribe(data => {
      // console.log(data.role);
      this.userRole=data;
      console.log(this.userRole)
      this.role(this.userRole)
    });
    // if(this.userRole!=undefined)
    //   nextfun(this.userRole)
  }
  private role(userRole:any) {
    if(this.userRole.role != "no-access")
    {
      localStorage.setItem("Role",this.userRole.role)
      // this.router.navigateByUrl('home', { skipLocationChange: true });
      this.router.navigate(['/home'])
      if(this.userRole.role == "user")
      {
        alert("WELCOME USER")
      }
      else if(this.userRole.role == "admin")
      {
        alert("WELCOME ADMIN")
      }
      else if(this.userRole.role == "superadmin")
      {
        alert("WELCOME SUPERADMIN")
      }
    }
    else{
      // this.router.navigate(['/home'])
      alert("Incorrect Credentials")
    }
   }

}
