import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  public title  = '12122'

  public imgUrl:string = '../../../assets/bj.jpg'

  public case:number = 1;

  public className:boolean=true;

  public color:string = 'blue'

  public date:Date = new Date();

  public value:string =''

  constructor() { }

  ngOnInit(): void {
    console.log('components--------------news----------init');
  }

  onCaseAdd(){
    this.case+=1;
  }

}
