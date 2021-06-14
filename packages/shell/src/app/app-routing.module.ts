import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startsWith } from '../router.utils';
import { RouteContainerComponent } from './route-container/route-container.component';

const routes: Routes = [
	{
		matcher: startsWith('appOne'),
		component: RouteContainerComponent,
		data: { importName: 'appOne' }
	},
	{
		matcher: startsWith('appTwo'),
		loadChildren: () => loadRemoteModule({
			remoteEntry: 'http://localhost:4200/remoteEntry.js',
			remoteName: 'appTwo',
			exposedModule: './EntryModule'
		}).then(m => m.AppTwoEntryModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
