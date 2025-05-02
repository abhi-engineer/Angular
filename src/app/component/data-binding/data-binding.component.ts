import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  title= "Data binding"; // Interpolation
  
  isDiabled = true; // Property Binding

  onClick(){
    alert("Event Binding")  //Event Binding
  }

  name= " ";  // Two way binding

}
