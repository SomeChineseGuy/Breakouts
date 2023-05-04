/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // add everything into an obj
  // I want to have a number that is going ot check for the max occurance and set it as the that key number 
  // I want to set a another num maxOcc this will show the second largest occurance number.
  // let obj = {};
  let maxOcc = 0;
  let occurance = 0;

  // arr.forEach((item) => {
  //     obj[item] ? obj[item] ++ : obj[item] = 1
  //     if(obj[item] > maxOcc) {
  //       maxOcc = obj[item]
  //       occurance = item
  //     }
  // })

  arr.reduce((obj, item ) => {
    obj[item] ? obj[item] ++ : obj[item] = 1
    if(obj[item] > maxOcc) {
      maxOcc = obj[item]
      occurance = item
    }
    return obj
  }, {})

  // for(let item of arr) {
  //   if(obj[item]) {
  //     obj[item] ++
  //   } else {
  //     obj[item] = 1
  //   }
  //   if(obj[item] > maxOcc) {
  //     maxOcc = obj[item]
  //     occurance = item
  //   }
  // }

  return occurance

  // console.log(obj);

};


module.exports = { mode };


