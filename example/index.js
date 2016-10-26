const delay = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number);
            if(number === 4) {
                reject(new Error(number));
            }
            resolve(number)
        }, 100)
    })
};

const vp = require('../');
const co = require('co');
const items = [1, 2, 3, 4, 5];

co(function*() {
    console.time('time');
    try{
        yield vp(items, delay);
    }catch (e){
        console.log(e);
    }
    console.timeEnd('time');
});
