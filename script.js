/**
 *  ICS4U - Mr. Brash 🐿️
 * 
 *  3.1 - Insertion Sort
 *
 *  Author:
 **/


/**
 * Returns a sorted array utilizing the Insertion Sort method
 *
 * @param {Array} unsortedArray The data to be sorted
 * @param {Boolean} debug Whether or not to print debug information
 * @returns {Array} A sorted copy of the given unsortedArray
 */
function insertSort(unsortedArray, debug = false) {
  // 'data' will be a copy of the given array (so we don't destroy the original)
  let data = Array.from(unsortedArray);
  // For timing the function. Leave this here!
  const start = performance.now();




  // These two lines should remain right before the return statement
  const end = performance.now() - start;
  if (debug) log("Sorting " + data.length + " items took: " + Library.round(end, 2) + " ms");

  return data;
}

/**
 * Returns the median value in a given unsorted array
 *
 * @param {Array} data The numeric data in which to find the median
 * @returns {Number} The median of the set of data (not rounded)
 */
function median(data) {

}


/* /////////   Helper Function(s):   ////////// */

/**
 * Log the given string to the debug div
 * @param {String} str The information to log to the debug div on the page
 * @returns undefined
 */
function log(str) {
  document.getElementById("debug").innerHTML += "<br>" + str.toString();
}

