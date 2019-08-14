import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/Services/data-source.service';
import { Application } from 'src/app/Application';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private DataSource: DataSourceService) { }

  ngOnInit() {
    this.getData();
    // let a:any=this.getForm();
    // for(let item of a){
    //   this.loginForm = new FormGroup(item);
    // }

  }

  // getForm(){
  //   let b=[{ password: new FormControl(null, [Validators.required, Validators.maxLength(8)])},
  //           {password1: new FormControl(null, [Validators.required, Validators.maxLength(8)])}];


  //  return b;
  // }

  Display() {
    let allJson = this.DataSource.getAllJsonFiles();
    console.log('aldn ' + allJson);
  }
  jsons:any[];

  getData():void{
    console.log('ksdfsnld');
    this.DataSource.getRecords()
    .subscribe(jsons=>(this.jsons=jsons));
    console.log(';sfdgklkdfl')
    console.log(this.jsons);
  }

  delete(json: Application): void {
    this.jsons = this.jsons.filter(h => h !== json);
    this.DataSource
      .delete(json.id)
      .subscribe();
  }
  Validate(){

  }
  submit(){
    console.log(this.jsons)
  }
  CanminLength:boolean=false;

  ValidateField(value,json){

    if(value.toString().length<json.minLength){
     json.isMinLengthSatisfied=true
    }
    else if(value.toString().length>json.minLength){
      json.isMinLengthSatisfied=false
    }
    // else if(value.toString().length==0 && )
  }
  loginForm: FormGroup;
  loginUser(){
    console.log(this.loginForm.status);
    console.log(this.loginForm.value);
  }

  onSubmit() { }
}
