import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse',
    pure: false
})
export class ReversePipe implements PipeTransform {

    transform(str: any) {
        const splitString = str.split(''); // var splitString = 'hello'.split('');
        // ['h', 'e', 'l', 'l', 'o']

        // Step 2. Use the reverse() method to reverse the new created array
        const reverseArray = splitString.reverse(); // var reverseArray = ['h', 'e', 'l', 'l', 'o'].reverse();
        // ['o', 'l', 'l', 'e', 'h']

        // Step 3. Use the join() method to join all elements of the array into a string
        const joinArray = reverseArray.join(''); // var joinArray = ['o', 'l', 'l', 'e', 'h'].join('');

        return joinArray;
    }

}
