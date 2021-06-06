import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startsWith } from '../router.utils';
import { RouteContainerComponent } from './route-container/route-container.component';

const routes: Routes = [
	{ matcher: startsWith('appOne'), component: RouteContainerComponent, data: { importName: 'appOne' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
