import { Component, OnInit } from '@angular/core';
// 引入angular服务
import { RequestService } from '../../services/request.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
})
export class RequestComponent implements OnInit {
  constructor(public requestService: RequestService, public http: HttpClient) {
    console.log('requestService---------------------', requestService);
  }

  ngOnInit(): void {
    this.requestService.getPromiseData().then((res) => {
      console.log('res--------------------', res);
    });

    const rxData = this.requestService.getObservableData();
    const d = rxData.subscribe((res) => {
      console.log('res-----------------------', res);
    });

    setTimeout(() => {
      console.log('我是取消subscribe');
      d.unsubscribe();
    }, 1000);
    const url = 'http://a.itying.com/api/productionList';
    this.http.get(url).subscribe((res) => {
      console.log('http----------------resp-----------------', res);
    });

    const httpOptions = { headers: { 'Content-Type': 'application/json' } };
    this.http.post(url, { id: 1 }, httpOptions).subscribe((res) => {
      console.log('post-=-----------------', res);
    });
  }
}
