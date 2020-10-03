import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStatusPipe'
})
export class FormatStatusPipe implements PipeTransform {

  transform(value: String): String {

    switch (value) {
      case '1': { return 'Activo.'                    }
      case '2': { return 'Desactivado.'               }
      case '3': { return 'Pendiente de validación.'   }
      case '4': { return 'Suspendido.'                }
      case '5': { return 'Cambio de contraseña.'      }
      case '6': { return 'Validacion de información.' }
      case '7': { return 'Otros'                      }
      case '0': { return 'Desconocido'                }


    }
  }

}
