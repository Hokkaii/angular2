import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 带有 @Input() 装饰器的 hero 属性；这个属性用于让父组件的属性传值流入这个属性内
  @Input() hero: Hero;
  // @Input('master') masterName: string;
  // ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。 这个组件对从 URL 中提取的路由参数感兴趣。 其中的 id 参数就是要现实的英雄的 id。
  // HeroService 从远端服务器获取英雄数据，本组件将使用它来获取要显示的英雄。
  // location 是一个 Angular 的服务，用来与浏览器打交道。 稍后，你就会使用它来导航回上一个视图。
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
  that = this;
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // subscribe用于订阅可观察对象实例发布的值。在这里我们订阅了一个值
    // 一个可观察对象的实例的subscribe() 方法还可以接收定义在同一行中的回调函数，可以接受next、error 还有complete 处理器
    this.heroService.getHero(id).subscribe(next => this.hero = next);
  }
  ngOnInit(): void {
    this.getHero();
  }
}
