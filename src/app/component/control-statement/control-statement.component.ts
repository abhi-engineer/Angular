import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.scss'
})
export class ControlStatementComponent {

  user = {
    isLoggedIn: false,
    name: 'Alice'
  };

  products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Smartphone' },
    { id: 103, name: 'Headphones' },
    { id: 104, name: 'Keyboard' }
  ];

  status: string = 'success'; // Try changing this to 'success' or 'error'

  
  dataLoaded = false;
  ngOnInit() {
    // Simulate data load after 2 seconds
    setTimeout(() => {
      this.dataLoaded = true;
    }, 2000);
  }

}
