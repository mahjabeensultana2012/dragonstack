const Generation = require('./generation');
const generation = new Generation();

console.log('generation', generation);

const gooby = generation.newDragon();
console.log('gooby', gooby);

setTimeout(() => {
  const mimar = generation.newDragon();
  console.log('mimar', mimar);
}, 15000);

// const Dragon = require('./dragon');

// const fooey = new Dragon({ birthdate: new Date(), nickname: 'fooey' });
// const baloo = new Dragon({
//   birthdate: new Date(),
//   nickname: 'baloo',
//   traits: [
//     {
//       traitType: 'backgroundColor',
//       traitValue: 'green',
//     },
//   ],
// });

// const mimer = new Dragon();

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log('gooby', gooby);
// }, 3000);

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimer', mimer);
