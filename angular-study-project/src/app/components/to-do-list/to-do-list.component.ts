import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less'],
})
export class ToDoListComponent implements OnInit {
  @Input() public todoTitle: string = '';

  public inputValue: string = '';

  public todoList: { title: string; checked: boolean }[] = [];
  public undoList: { title: string; checked: boolean }[] = [];

  @ViewChild('todList') todList: any;

  constructor() {}

  ngOnInit(): void {}

  @Output() public childEmit: EventEmitter<any> = new EventEmitter();

  sendMessage() {
    this.childEmit.emit('test');
  }

  ngAfterViewInit() {
    this.todList.nativeElement.style.color = 'red';
  }

  /**
   * 添加待办事件
   */
  onPush() {
    const { todoList } = this;
    const titles = todoList.map((item) => {
      return item.title;
    });
    if (titles.indexOf(this.inputValue) == -1) {
      this.todoList.push({
        title: this.inputValue,
        checked: false,
      });
    }
    this.inputValue = '';
  }
  /**
   * 校验是否可点击
   */
  checkTodoLen(list: { title: string; checked: boolean }[]) {
    return list.every((item) => {
      return !item.checked;
    });
  }
  /**
   * 修改
   */
  onTodoListStatusChange(type: string) {
    const list = type == 'todo' ? this.todoList : this.undoList;
    let unchecked = list.filter((item) => {
      return !item.checked;
    });
    unchecked = unchecked.map((item) => {
      item.checked = false;
      return item;
    });
    let checked = list.filter((item) => {
      return item.checked;
    });
    checked = checked.map((item) => {
      item.checked = false;
      return item;
    });
    if (type == 'todo') {
      this.undoList = [...this.undoList, ...checked];
      this.todoList = unchecked;
    } else {
      this.todoList = [...this.todoList, ...checked];
      this.undoList = unchecked;
    }
  }

  test() {
    console.log('这是test、');
  }
}
