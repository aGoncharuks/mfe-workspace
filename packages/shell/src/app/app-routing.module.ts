import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_REGISTRY } from '../app-registry';
import { buildRoutesFromAppRegistry } from './utils/router.utils';


@NgModule({
	imports: [RouterModule.forRoot(
		buildRoutesFromAppRegistry(APP_REGISTRY)
	)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
