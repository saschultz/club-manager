import {Pipe, PipeTransform} from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'medium',
  pure: false
})


export class MediumPipe implements PipeTransform {

  transform(input: Member[], desiredMedium) {
    var output: Member[] = [];
    if (input != null) {
      if(desiredMedium === "charcoal"){
        for (var i = 0; i < input.length; i++) {
          if (input[i].medium === "charcoal") {
            output.push(input[i]);
          }
        }
        return output;
      } else if(desiredMedium === "graphite") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].medium === "graphite") {
            output.push(input[i]);
          }
        }
        return output;
      } else if(desiredMedium === "chalk") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].medium === "chalk") {
            output.push(input[i]);
          }
        }
        return output;
      } else if(desiredMedium === "all mediums") {
        return input;
      } else {
        console.log('test');
      }
    }
  }
}
