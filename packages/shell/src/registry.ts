export const APP_REGISTRY: {[key: string]: () => Promise<unknown>} = {
  appOne: () => import('appOne/bootstrap'),
};
