
// Spreading
// ...varname

function multiParam(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const params = [1, 2, 3];
multiParam(...params);

// Merge by spread
const shplst1 = ['banana', 'apple', 'talong'];
const shplst2 = ['sayote', 'bawang', 'onions'];

const normalMerge = shplst1.concat(shplst2);
const spreadMerge = [...shplst1, ...shplst2];

console.log(spreadMerge);

// Object spreads
const defaultItem = {
    id: 0,
    name: 'Item name placeholder',
    qty: 1,
    price: 10,
    description: 'Lorem Ipsum'
};

const modifiedItem = {
    ...defaultItem,
    id: 2,
    newProp: 'this is appended',
    price: 20
};

console.log(defaultItem);
console.log(modifiedItem);

const newDefault = {
    id: 1,
    ...defaultItem
};

console.log(newDefault); //changes overwritten by defaultItem