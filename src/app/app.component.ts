import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-child';

  @ViewChild('dobInput') dateOfBirth!: ElementRef<any>;
  @ViewChild('ageInput')  age!: ElementRef<any>;

  @ViewChild(DemoComponent,{static: true}) demoComp: DemoComponent;
  constructor() {
    this.demoComp = new DemoComponent();
  }
  
calculateAge(){
  let birthYear=new Date(this.dateOfBirth.nativeElement.value).getFullYear();
  // console.log(this.dateOfBirth);
  // console.log(this.age);

  let cur=new Date().getFullYear();
  let age=cur-birthYear;
  this.age.nativeElement.value=age;
}

}
