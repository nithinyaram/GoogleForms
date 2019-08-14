import { Component, OnInit } from "@angular/core";



import { TextBoxComponent } from '../Components/text-box/text-box.component';
import { CheckBoxComponent } from "../Components/check-box/check-box.component";
import { RadioButtonComponent } from "../Components/radio-button/radio-button.component";
import { PreviewComponent } from '../Components/preview/preview.component';
import { DataSourceService } from '../Services/data-source.service';
import { Hero } from '../hero';

@Component({
  selector: "app-starting",
  templateUrl: "./starting.component.html",
  styleUrls: ["./starting.component.css"]
})
export class StartingComponent implements OnInit {
  constructor(private data:DataSourceService){}

  ngOnInit() {}
  allComponents = [null];
  canDisplay:boolean=false;
  parseData:String=''
  assignComponent(component) {
    if (component === "Text") {
      this.allComponents.push(TextBoxComponent);
    } else if (component === "Check") {
      this.allComponents.push(CheckBoxComponent);
    } else if(component === 'Radio'){
      this.allComponents.push(RadioButtonComponent);
    }else{
      // Preview();
    }
    console.log(this.allComponents);
  }
  Display(){
    let JsonData=this.data.getAllJsonFiles();
    this.parseData=JsonData;
    this.canDisplay=true;

  }

  name={name:'yashwanth',salary:10000}


  addToServer(name :string):void{
      // this.data
      // .addRecord()
  }


}
