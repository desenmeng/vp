/**
 * Created by quanzhan on 11/01/2017.
 */

'use strict';

const arr = [1,2,3,4,5];

console.time('test');
for(let i in arr){
    setTimeout(()=>console.log(i), 100)
}
console.timeEnd('test');