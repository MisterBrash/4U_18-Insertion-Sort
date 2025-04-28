/**
 *  ICS4U - Mr. Brash 🐿️
 * 
 *  18 - Insertion Sort
 *
 *  Author:
 **/

import { arrayOfInts, randInt, arrayOfStrings, round } from "./library.js";
import { performance } from "perf_hooks";

/**
 * Return a sorted array utilizing the Insertion Sort method
 *
 * @param {Array} unsortedArray The data to be sorted
 * @param {Boolean} debug Whether or not to print debug information
 * @returns {Array} A sorted copy of the given unsortedArray
 */
function insert_sort(unsortedArray, debug = false) {
  // 'data' will be a copy of the given array (so we don't destroy the original)
  let data = Array.from(unsortedArray);
  console.log(`Insert sort of ${unsortedArray.length} items`);
  if (debug) console.log(data.toString());
  // For timing the function. Leave this here!
  const start = performance.now();

  /*** Start of student code ***/

  let target = 1;
  while (target < data.length) {
    let temp = data[target];
    let i = target - 1;
    while (data[i] > temp) {
      data[i+1] = data[i]
      i--;
    }
    data[i+1] = temp;

    if (debug) console.log(data.toString());
    target++;
  }

  /*** End of student code ***/

  console.log(`Sorting took: ${round(performance.now() - start, 2)} ms`);
  return data;
}

/**
 * Return the median value from a given array.
 *
 * @param {Array} data The numeric data in which to find the median
 * @returns {Number} The median of the set of data (not rounded)
 */
function median(data) {

}

// Test a small array with debugging enabled
//insert_sort([6, 5, 3, 1, 8, 7, 2, 4], true)

// Test a large array of random integers with duplicates
// insert_sort(arrayOfInts(50000, -10000, 10000))

// Test a large array of random integers with no duplicates
// insert_sort(arrayOfInts(50000, -100000, 100000, true, false))

insert_sort(arrayOfInts(100000, -20000, 20000))
insert_sort(arrayOfInts(100000, -20000, 20000))
insert_sort(arrayOfInts(100000, -20000, 20000))
insert_sort(arrayOfInts(100000, -20000, 20000))
