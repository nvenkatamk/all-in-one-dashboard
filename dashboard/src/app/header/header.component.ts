import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedProject : any;

  projectList = [{key:'blueStream',value:'BlueStream'},{key:'linq',value:'Linq'},{key:'cyber',value:'Cyber'}];

  constructor(){

  }

  onButtonClick(){

  }
}
