import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TextBoxComponent } from "./Components/text-box/text-box.component";
import { CheckBoxComponent } from "./Components/check-box/check-box.component";
import { RadioButtonComponent } from "./Components/radio-button/radio-button.component";
import { StartingComponent } from "./starting/starting.component";
import { PreviewComponent } from "./Components/preview/preview.component";
import { DataSourceService } from "./Services/data-source.service";

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    StartingComponent,
    PreviewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [DataSourceService],
  bootstrap: [AppComponent],
  entryComponents: [
    TextBoxComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    PreviewComponent
  ]
})
export class AppModule {}
