import { Routes } from '@angular/router';
import { startsWith } from '../../router.utils';
import { AppData, AppName } from '../../types';
import { RouteContainerComponent } from '../route-container/route-container.component';

export function buildRoutesFromAppRegistry(appRegistry: Record<AppName, AppData>): Routes {
	if (Array.isArray(appRegistry)) {
		throw new Error('Provided app registry is now an array');
	}
	return Object.entries(appRegistry).map(([key, value]) => {
		if (value.isNative) {
			return {
				matcher: startsWith(key),
				loadChildren: () => value.importFn().then(m => m.EntryModule)
			}
		}
		return {
			matcher: startsWith(key),
			component: RouteContainerComponent,
			data: { appName: key }
		}
	});
}
