import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pluralize'})
export class PluralizePipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        return value === 1 ? 'item' : 'items'
    }
}