import { AppData, AppName } from './types';

export const APP_REGISTRY: Record<AppName, AppData> = {
	[AppName.AppOne]: {
		route: AppName.AppOne,
		remoteEntryHost: 'http://localhost:5100/remoteEntry.js',
		importFn: () => import(`appOne/entryModule`),
		isNative: false,
	},
	[AppName.AppTwo]: {
		route: AppName.AppTwo,
		remoteEntryHost: 'http://localhost:5200/remoteEntry.js',
		importFn: () => import(`appTwo/entryModule`),
		isNative: true
	}
}

