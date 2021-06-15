export enum AppName {
	AppOne = 'appOne',
	AppTwo = 'appTwo'
}

export interface AppData {
	route: AppName,
	remoteEntryHost: string,
	importFn: () => Promise<any>,
	isNative: boolean
}
