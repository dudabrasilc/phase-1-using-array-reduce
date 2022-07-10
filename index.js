// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// // Code your solution here

// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
//   ];

//   function getTotalAmountforProducts(array) {
//     let total = 0    
//     for (const element of array) {
//             total += element.price;
//         }
//         return total;
//   }

// // console.log(getTotalAmountforProducts(products))

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];


// function ourReduce(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {
//         accum = reducer(accum, element)
//     }
//     return accum;
// }

// function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
// }

// // console.log(ourReduce(couponLocations, couponCounter, 0))


// // console.log(couponLocations.reduce(couponCounter, 0))

// const doubleAndSummed = [1,2,3,4].reduce((accum, num) => {
//     return accum + num * 2})

// // console.log(doubleAndSummed)

// const addAll = [1,2,3,4].reduce((accum, element) => {
//     return accum + element;
// })
// console.log(addAll)



// --------------------- LAB

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((element, accum) => {
    return accum + element;
}, 0);

console.log(totalBatteries)