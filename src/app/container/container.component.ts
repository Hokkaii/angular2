import {
  Component, ViewChild, ViewContainerRef, OnInit, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
import { PageComponent } from '../page/page.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  componentRef: ComponentRef<PageComponent>;
  @ViewChild('alertContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<PageComponent> =
      this.resolver.resolveComponentFactory(PageComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    //  this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

  ngOnInit() {
  }

}
