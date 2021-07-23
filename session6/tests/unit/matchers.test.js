// const {evaluation, person } = require('./matchers')

// //Using toBe on person
// test ('person.firstname toBe David', () => {
//     expect(person.firstname).toBe('David');
// });

// test ('Object values', () => {
//     expect(person).toStrictEqual({'firstname':'David',
// 'lastname':'Wampamba'});
// });

// test ('Test null', () => {
//     expect(null).toBeNull();
// });

// test ('Null toBeFalsy', () =>{
//     expect(null).toBeFalsy();
// });


// // toBe matcher is better for single values but toEqual and
// //toStrictEqual are good for objects since they reecursively
// // run through the object keys.

// // This test will fail 
// //test('Object values', () =>{
// //  expect(person).toBe('firstname':'David',
// //  'lastname':'Wampamba'});
// //})

// // this test will pass 

// //In Javascript everything that if statement will evaluate as false
// // is considered falsy. So 0, null, undefined, false, {}



// test ('Empty array is considered false', () =>{
//     expect([]).toBeTruthy()
// })

// // Asynchronous

// // Don't do this!
// // test('the data is peanut butter', () => {
// //     function callback(data) {
// //       expect(data).toBe('peanut butter');
// //     }
  
// //     fetchData(callback);
// //   });


// // test('the data is peanut butter', done => {
// //     function callback(data) {
// //       try {
// //         expect(data).toBe('peanut butter');
// //         done();
// //       } catch (error) {
// //         done(error);
// //       }
// //     }
  
// //     fetchData(callback);
// //   });

// /*
// test ('the data is peanut butter', () =>{
//     return fetchData().then(data => {
//         expect(data).toBe('peanut butter');
//     });
// });
// */

// test ('the data is peanut butter', async() =>{
//     let data = await fetchData()
//     expect(data).toBe('peanut butter');
// });