import { Component ,OnInit} from "@angular/core";
import { FormGroup  } from "@angular/forms";




@Component ({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss'],
})


export class LoginComponent implements OnInit{

    opacity = 10 ;

    isLoading=false;

    loginform!: FormGroup;
    
    constructor ( 
       
    ){}

    ngOnInit(){


        // this.loginform = this.fb.group({
        //     name: '',
        //     password: ''
        // });
    }

    
  
    login(){
    }
}