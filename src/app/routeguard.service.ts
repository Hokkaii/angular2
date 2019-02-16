// import { Injectable } from '@angular/core';
// import { AngularComponent } from './angular/angular.component';
// import { Observable, of } from 'rxjs';
// import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { constants } from 'perf_hooks';

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }
// @Injectable()
// export class FocusGuard implements CanDeactivate<AngularComponent> {
//   // StockComponent 表示保护的组件，可以拿到当前的组件
//   canDeactivate(
//     component: AngularComponent,
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     console.log(component.value);
//     if (component.value) {
//       const bool = window.confirm('确定要离开吗');
//       return bool;
//     } else {
//       return true;
//     }
//   }
// }
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class FocusGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    console.log('触发了离开路由守卫！！！');
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
