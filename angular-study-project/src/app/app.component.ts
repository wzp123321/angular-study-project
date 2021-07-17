import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild('todoListComp')todoListComp:any;

  title = 'test';

  public todoTitle:string = '我是传给todo的'

  public newTitle:string = '传给news组建的值';

  public content:string="<h1>1111111111111111</h1>"

  public list:{[key:string]:string}[] = [{
    id:'11111111111',
    name:'11111111111'
  },{
    id:'2222222222222',
    name:'2222222222222'
  },{
    id:'333333333333333',
    name:'44443333333333'
  }];

  public flag:boolean = false;

  ngOnInit(){
    console.log('根组件init');
  }
  ngAfterViewInit(){
    this.todoListComp.test();
  }

  childEmit(){
    this.todoTitle = 'send--message'
  }
}
