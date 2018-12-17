import { Component } from '@angular/core';
import { UserService } from './user.service';

import list_data from './list-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play-ng';
  message = "Hello World";
  click_msg: string = "没有被点击";
  click_count: number = 0;
  list_data: any[]= list_data;
  is_show: boolean = true;
  input_content: string = '表单数据';
  input_click_count: number = 0;
  ajax_data: string = '这是ajax初始的数据';

  textarea_content: string = '文本域内容';
  textarea_change_count: number = 0;

  clickBtn(){
  	this.click_msg = '点击了之后';
  	this.click_count++;
  }

  showOrHide(){
  	this.is_show = !this.is_show;
  }

  inputChange(){
    this.input_click_count++;
  }

  textAreaChange(){
    this.textarea_change_count++;
  }

  getUserInfo(): void{
    this.userService.getUser().subscribe(users => this.ajax_data = JSON.stringify(users));
  }

  constructor(private userService: UserService){

  }

  ngOnChanges(){
  	console.log('ngOnChanges');
  }

  ngOnInit(){
  	console.log('ngOnInit');
    this.getUserInfo();
  }

  ngDoCheck(){
  	console.log('ngDoCheck');
  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
  	console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
  	console.log('ngOnDestroy');
  }
}
