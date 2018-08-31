import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {

  viewRef: ViewContainerRef;
  constructor(private factResolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }

  addComponent(comToAdd: any): void {

   const factory = this.factResolver.
            resolveComponentFactory(comToAdd);

            console.log(this.viewRef.injector);
            console.log(this.viewRef.parentInjector);
    const compRef = factory.create(this.viewRef.injector);

        console.log(compRef);
        console.log(compRef.hostView);
     this.viewRef.insert(compRef.hostView);

  }
}
