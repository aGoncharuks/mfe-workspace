import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_REGISTRY } from '../../registry';

@Component({
  template: '<div id="appOne"></div>',
})
export class RouteContainerComponent implements AfterContentInit {
  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {
    const importName = this.route.snapshot.data['importName'];
    const importFn = APP_REGISTRY[importName];
    
    importFn()
      .then((module: any) => {
      	module.default(importName);
      	console.debug(`element ${importName} loaded!`);
      })
      .catch(err => console.error(`error loading ${importName}:`, err));
  }

}
