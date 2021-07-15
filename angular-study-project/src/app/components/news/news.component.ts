import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  public title  = '12122'

  public imgUrl:string = '../../../assets/bj.jpg'

  public case:number = 2;

  public className:boolean=true;

  public color:string = 'blue'

  constructor() { }

  ngOnInit(): void {
    console.log('components--------------news----------init');
  }

}
