import { Component, OnInit, Input } from "@angular/core";
import { DataSourceService } from 'src/app/Services/data-source.service';
import { factoryClass } from '../Factory';

@Component({
  selector: "app-text-box",
  templateUrl: "./text-box.component.html",
  styleUrls: ["./text-box.component.css"]
})
export class TextBoxComponent implements OnInit {

  @Input() jsonString:any;
  JsonParse;
  isCheck: boolean;
  CanGo: boolean = false;
  nameId: number;
  ty:any;

  // DataSource:any;
  Factory :any;
  constructor(private DataSource:DataSourceService) {
    this.Factory=new factoryClass();
  }

  ngOnInit() {this.getData();  }

  Obj = {
    'lable': "",
    'minLength': 0,
    'maxLenght': 1000,
    'isRequired': true,
    'textType': 0,
    'ty':this.ty,
    'isMinLengthSatisfied':false,
    'isMaxLengthSatisfied' :false
  };

  isChecked(e) {
    this.isCheck = e.target.checked;
  }

  selectName() {
    alert(this.nameId);
  }
  // tslint:disable-next-line: member-ordering
  nameList: any = [
    {
      Id: 1,
      Name: "TextBox"
    },
    {
      Id: 2,
      Name: "Password"
    },
    {
      Id: 3,
      Name: "email"
    }
  ];

  allJsonStrings:any[]=[JSON.stringify(this.Obj)];

  setConstraints(lable: string, minLen: number, maxLen: number) {
    console.log(lable);
    this.Obj.lable = lable;
    this.Obj.maxLenght = maxLen;
    this.Obj.minLength = minLen;
    this.Obj.isRequired = this.isCheck;
    this.Obj.textType = this.nameId;

    this.JsonParse = (this.jsonString);
    this.DisplayBox();
    this.addToServer();
    this.DataSource.my(this.Obj);//array

  }

  DisplayBox() {
    this.CanGo = true;

    switch(this.Obj.textType){
      case 1:{
        this.ty='text';
        break;
      }
      case 2:{
        this.ty='password';
        break;
      }
      case 3:{
        this.ty='email';
        break;
      }
    }
    this.Obj.ty=this.ty;

  }
  jsons:any[];

  getData():void{
    this.DataSource.getRecords()
    .subscribe(jsons=>(this.jsons=jsons));
  }

  addToServer():void{
    this.DataSource
    .addRecord(this.Obj)
    .subscribe();
}


}
