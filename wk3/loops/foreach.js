/**
 * Use of forEach method
 * 1. It can be used to access the array's element
 * 
 * 
 */

let windows = ["Google", "Amazon", "Youtube"]

/* () => {} */
windows.forEach((val, index, arr) => {
    console.log(`${index} - ${val} -> ${arr}`);
})