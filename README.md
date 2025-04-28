# 18 - Insertion Sort

###### ICS4U - Mr. Brash 🐿️

An extremely common method which finds the correct location for a single item at a time. Only the positions _below_ the current item’s position (left) are considered.

---


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
    - If the next item left is _not_ larger than the current item, _insert_ the current item back into the list at this new location
  - Repeat until sorted or end of list is reached

### Some Notes

- You can print an array much nicer by using its `.toString()`. You can see an example on line 23 of [script.js](./script.js). It would look something like this: `console.log(my_array.toString())`
- Adding debugging printouts with `console.log()` is useful but you don't always want to see the output. Try using the `debug` flag to control your testing output. Again, you can see an example on line 23 of [script.js](./script.js).

## Your Job

### Code:

1.  Read the `script.js` and `library.js` files, they are well-documented.
2.  Complete the function `insert_sort()`. Your code will go between the comment blocks that you will see. The function will sort _a copy_ of the given `unsortedArray` called `data` into _ascending_ order (lowest to highest) using the [Insertion Sort algorithm](https://docs.google.com/presentation/d/1D54JqwOoEqW-VT7kqKcXhxgVKTY__LxsI-aUGJFtxvA/edit?usp=sharing) described in class. 
    - It will _return_ the sorted array.
    - If `debug` is `true`, the algorithm will print the array _after each completed pass_ for tracing and testing purposes.

3.  The _median_ of any list of numerical values is defined in the following way:
    - The data must be in sorted order.
    - If the number of values is _odd_, the median is the _middle_ value.
    - If the number of values is _even_, the median is the _average of the two middle values_.
  
    Complete the function `median()` determines and _returns_ the median of the given array of `data`. Assume the input to the function is a proper, _unsorted_, array of _numbers_. **Do _not_ round the return value**.


### Code Submission & Discussion Questions:

1. Commit your code back to GitHub with the commit message "Finished".

2. Go to [Google Classroom](https://classroom.google.com) and follow the instructions in the document for this task.
