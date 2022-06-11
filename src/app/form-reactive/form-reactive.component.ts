import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorService } from '../color.service';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Admin','admin'];
  btnSubmitColor: string = '#286090';
  btnResetColor: string ='gray';

  constructor(private router: Router, private colorService: ColorService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male')
    });   
    this.signupForm.patchValue({
      'gender': 'male'
    })
  }
   onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
    this.router.navigate(['/']);
  }
  onReset(){
    this.signupForm.reset();
    this.colorService.choosenColor.next({ default : true, color : ""  })
    this.btnSubmitColor = '#286090';
    this.btnResetColor = 'gray';
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  onMenuItemClick(liEl: HTMLUListElement){
    let newColor = liEl.style['background-color'];
    this.btnSubmitColor = newColor;
    this.btnResetColor = newColor;
    this.colorService.choosenColor.next({default: false, color: newColor});    
  }
}
