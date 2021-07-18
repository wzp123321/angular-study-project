import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}
  /**
   * promise实现异步
   * @returns
   */
  getPromiseData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('我是promise返回的');
      }, 1000);
    });
  }

  getObservableData() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next('我是rxjs返回的');
        // observer.error('我是错误处理')
      }, 2000);
    });
  }
}
