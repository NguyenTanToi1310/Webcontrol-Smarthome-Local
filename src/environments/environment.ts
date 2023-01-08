// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  cognito: {
    region: 'ap-southeast-1',
    userPoolId: 'ap-southeast-1_J7vJimaTM',
    userPoolWebClientId: '2ahhouuiiu8eho8e041sifhtag',
    identityPoolId: 'ap-southeast-1:d908bfe4-825c-44f2-ab08-675e39bfadd1',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
