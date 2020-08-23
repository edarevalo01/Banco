// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const BASE_URL: string = 'http://localhost:8080/api/';
export const environment = {
  production: false,

  urlSaveLocation: `${BASE_URL}saveLocation`,
  urlGetLocations: `${BASE_URL}getAllLocations`,
  urlGetLocationById: `${BASE_URL}getLocationById`,
  urlGetLocationByParent: `${BASE_URL}getLocationByParent`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
