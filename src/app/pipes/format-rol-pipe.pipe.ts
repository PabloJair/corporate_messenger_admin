import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format_rol_pipe'
})
export class FormatRolPipePipe implements PipeTransform {
 
  transform(value:number): String {

    switch (value){
      case 1:{ return 'Activo'}
      case 2:{ return 'Desactivo'}
      case 3:{ return ''}
      case 4:{ return ''}
      case 5:{ return ''}
      case 6:{ return ''}
      case 7:{ return ''}
      case -1:{ return 'Desconocido'}


  };
  }

}
