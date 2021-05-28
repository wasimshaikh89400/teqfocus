import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Form, NgModel } from '@angular/forms'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }
  buttonNew: number = 0
  nameFirst: string = ''
  ngOnInit(): void {

  }
  clickMe() {
    let el = document.createElement('li');
    el.innerText = this.nameFirst;
    var i = document.getElementById('idContainer')?.appendChild(el)
  }
}
