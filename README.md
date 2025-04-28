# 3.1 Sorting an Array – Insertion Sort

###### ICS4U - Mr. Brash 🐿️

An extremely common method which finds the correct location for a single item at a time. Only the positions below the current item’s position (left) are considered.

  |![Insertion Sort Animation](assets/Insertion-sort-example-300px.gif)|
  |:---:|
  |<div style="font-size:smaller">Insertion Sort Demo Animation [Swfung8](https://commons.wikimedia.org/wiki/File:Insertion-sort-example-300px.gif) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0)</div>|

- Here's [the slideshow used in class](https://docs.google.com/presentation/d/1D54JqwOoEqW-VT7kqKcXhxgVKTY__LxsI-aUGJFtxvA/edit?usp=sharing)
- YouTube [video of visualization](https://www.youtube.com/watch?v=8oJS1BMKE64)
- [Interactive demonstration](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
- Another excellent [visual demonstration](https://math.hws.edu/eck/js/sorting/xSortLab.html)

### The algorithm in a nutshell:

Starting with the second item in the list:
  - Place that item in temporary memory
  - Look to the left, shifting any items _larger_ than the current item to the right by one spot
    - If the next item left is not larger than the current item, _insert_ the current item back into the list at this new location
  - Repeat until sorted or end of list

**Note:** When searching for the correct position, only positions _below_ (to the left of) the current position are considered. When the new location is discovered, stop looking left.

## Your Job

You will code the following functions _and_ answer the [discussion questions](#discussion-questions).

### Code:

Printing to the `console` is getting _old_. We are going to - very lightly - practice using HTML as a front-end to our code from now on. The majority of the work has been done for you already. You should examine the code to ensure you understand how it works.

- Make sure you have the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension installed in VSCode
  - The extension has some settings you _might_ want to change (personal preferences)
- To see your web page _live_, right click the `index.html` file in VSCode and select "Show Preview"
- Instead of using `console.log()` you can use `log()` (a helper function you'll find in [`script.js`](script.js)) which prints to the HTML file instead of the console. Read it to learn how it works.


1.  Read the `index.html` and `script.js` files. Make sure you understand the pre-filled code before you begin.
2.  Complete the function `insertSort(unsortedArray, debug = false)` that sorts _a copy_ of the given **unsortedArray** into _ascending_ order (lowest to highest) using the Insertion Sort algorithm described in class. 
    - It will _return_ a sorted array.
    - If **debug** is **true**, the algorithm will print the array _after each completed pass_ for tracing and testing purposes.

3.  The _median_ of any list of numerical values is defined in the following way:
    - The data must be in sorted order (lowest to highest).
    - If the number of values is _odd_, the median is the _middle_ value.
    - If the number of values is _even_, the median is the _average of the two middle values_.
  
    Complete the function `median(data)` that finds and _returns_ the median of the given array of `data`. Assume the input to the function is a proper, unsorted, array of numbers. Do _not_ round the return value.


### Discussion Questions:

Answer the following discussion questions in the `index.html` file of your repository. You can utilize `HTML` tags to format your answers (numbered lists, tables, etc).

1. What changes would need to be made to your `insertSort()` function in order to sort the values in descending order?

2. An insertion sort is to be used to put the values `[ 7, 2, 8, 3, 1, 6, 5 ]` in _ascending_ order (lowest to highest). _Show the values as they would appear after each **pass** of the sort using your algorithm._

3. A sort is said to be _**stable**_ if it leaves equal values in the same order after the sort is complete. Is the insertion sort algorithm _stable_? Justify your answer.

---

The following are **food-for-thought** questions. Feel free to discuss with classmates and then leave your answers / discussion in your `index.html` file.
- If the number of items in an array is `n` and the array is _already sorted_ (best-case), approximately how many _passes_ and how many total _comparisons_ will your algorithm complete?

- If the number of items in an array is `n` and the array is _backwards_ (worst-case), approximately how many _passes_ and how many _total comparisons_ will your algorithm need to complete?
