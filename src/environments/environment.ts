// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  HOST: 'http://0.0.0.0:8000/api/',
  statusOptionsSelect: [
    { value: '1', label: 'Activo.'                    } ,
    { value: '2', label: 'Desactivado.'               } ,
    { value: '3', label: 'Pendiente de validación.'   } ,
    { value: '4', label: 'Suspendido.'                } ,
    { value: '5', label: 'Cambio de contraseña.'      } ,
    { value: '6', label: 'Validacion de información.' } ,
    { value: '7', label: 'Otros'                      } ,
    { value: '0', label: 'Desconocido'                } ,
  ],

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
