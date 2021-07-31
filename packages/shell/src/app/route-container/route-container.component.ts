import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_REGISTRY } from '../../app-registry';
import { AppName } from '../../types';

@Component({
  template: '<div [id]="appName"></div>',
})
export class RouteContainerComponent implements AfterContentInit {
	public appName: AppName = this.route.snapshot.data['appName'];
	
  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {
	  APP_REGISTRY[this.appName].importFn()
      .then((module: any) => {
      	module.default(this.appName);
      	console.debug(`element ${this.appName} loaded!`);
      })
      .catch(err => console.error(`error loading ${this.appName}:`, err));
  }

}
