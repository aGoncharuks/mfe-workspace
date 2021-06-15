import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_REGISTRY } from '../../app-registry';
import { AppName } from '../../types';

@Component({
  template: '<div id="appOne"></div>',
})
export class RouteContainerComponent implements AfterContentInit {
  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {
    const appName: AppName = this.route.snapshot.data['appName'];
    
	  APP_REGISTRY[appName].importFn()
      .then((module: any) => {
      	module.default(appName);
      	console.debug(`element ${appName} loaded!`);
      })
      .catch(err => console.error(`error loading ${appName}:`, err));
  }

}
