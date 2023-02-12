import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(valor: string, inMayusculas: boolean = true): string {
        return (inMayusculas) ? valor.toUpperCase() : valor.toLocaleLowerCase();
    }

}