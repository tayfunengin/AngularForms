import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent  {

  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false; 

  btnSubmitColor: string = '#286090';
  btnResetColor: string ='gray';
  constructor(private colorService: ColorService){}

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();   
  }
  onReset(){
    this.signupForm.reset();
    this.colorService.choosenColor.next({ default : true, color : ""  })
    this.btnSubmitColor = '#286090';
    this.btnResetColor = 'gray';  
    this.submitted = false;
  }
  onMenuItemClick(liEl: HTMLUListElement){
    let newColor = liEl.style['background-color'];
    this.btnSubmitColor = newColor;
    this.btnResetColor = newColor;
    this.colorService.choosenColor.next({default: false, color: newColor});    
  }

}
