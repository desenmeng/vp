const factory = (items, promise) => items.map(item => () => promise(item));
module.exports = (items, promise) => factory(items, promise)
    .reduce((resolve, factory) => resolve.then(item => factory()), Promise.resolve());
