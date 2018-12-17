import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anohter',
  templateUrl: './anohter.component.html',
  styleUrls: ['./anohter.component.css']
})
export class AnohterComponent implements OnInit {
  content: string = '这是另一个组件的内容';
  constructor() { }

  ngOnInit() {
  }

}
