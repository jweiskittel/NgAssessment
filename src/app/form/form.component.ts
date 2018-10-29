import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  select = new FormControl('')
  input = new FormControl('')

  results: Object

  constructor(private data: DataService) { }

  ngOnInit() {

  }

  fetchData() {
    this.data.getData(this.select.value, this.input.value).subscribe(data => {
      this.results = JSON.stringify(data)
      console.log(data)
    })
  }

}
