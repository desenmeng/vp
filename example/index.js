'use strict';
const co = require('co');


const delay = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number);
            resolve(number)
        }, 100)
    })
};

const vp = require('../');

const items = [1, 2, 3, 4, 5];



co(function*() {
    console.time('time');
    try{
        const t = yield vp(items, delay); //串行
        let arr = [];
        for(let i of items){
            arr.push(yield delay(i)); //串行
        }
        yield arr; //串行得到结果

        for(let i of items){
            yield delay(i);
        }
        //并行
        yield items.map(function*(i){
            return yield delay(i);
        });
        // 串行
        yield [yield delay(1), yield delay(2),yield delay(3), yield delay(4), yield delay(5)]
    }catch (e){
        console.log(e);
    }
    console.timeEnd('time');
});
