import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { ENAMETOOLONG } from 'constants';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  list: any;
  chosenId: any;
  value: any;
  arr = [0, 1, 2, 3, 4];
  obj = { a: 0, b: 1, c: 2 };
  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe(res => {
      console.log(res);
      this.chosenId = (res as any).params.id;
    });
  }
  ngOnInit() {
    this.list = HEROES;
    setTimeout(() => {
      this.op();
    }, 2000);
  }
  getNumber(e) {
    return Number(e);
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (this.value) {
      const p = confirm('xxxxx，确定要xxxx吗');
      return p;
    } else {
      return true;
    }
  }
  myfn<T>(args: T): T {
    return args;
  }
  op() {
    const output = this.myfn<string>('hujunlei');
    console.log(output);
  }
}
