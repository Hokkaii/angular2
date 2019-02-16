import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { INCREMENT, DECREMENT, RESET } from '../redux/./counter';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState {
  count: number;
}


function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log('Hello!');
  };
}
@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}
const myGreeting = new Greeting();
myGreeting.greet();

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveComponent implements OnInit {
  count$: Observable<number>;
  p = 0;
  constructor(private router: Router, private store: Store<AppState>) {


    this.count$ = store.pipe(select('count')); // 从app.module.ts中获取count状态流
    // this.count$ = store.select('count');
  }

  ngOnInit() {

  }
  toAngular() {
    this.router.navigate(['/angular', 17]);
  }
  async change() {
    this.store.dispatch({ type: INCREMENT });
    this.count$.subscribe(res => {
      console.log(res);
    });
    // console.log(this.count$);
  }
}
