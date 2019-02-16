import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DirectiveComponent } from './directive/directive.component';
import { AngularComponent } from './angular/angular.component';
import { FocusGuard } from './routeguard.service';
import {ContainerComponent } from './container/container.component';
const routes: Routes = [
  { path: '', redirectTo: '/directive', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'angular/:id', component: AngularComponent, canDeactivate: [FocusGuard] }
];
@NgModule({
  // 导出表，导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用
  exports: [RouterModule],
  // 导入表，把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了。
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
