// Filtering the results
export function filterItems(items, query = '') {
  /*
   * This is a really naive approach to filtering our results,
   * you'll want to use something more robust in a real-world
   * application, but it'll get the job done for us.
   */
  return items.filter(({value, keywords}) =>
    value.toLowerCase().includes(query.toLowerCase()) ||
    keywords.toLowerCase().includes(query.toLowerCase())
  );
}

/*
 * The Array.push and Array.splice methods operate on the original array,
 * which ends up mutating state directly. In React, we want to always avoid
 * mutating `this.state` directly. By manipulating this.state directly you
 * end up circumventing React’s state management, which may have potential
 * side-effects.
 *
 * Instead, we want to always create new copies of the objects and arrays
 * we want to update and and manipulate the copies. Once we're done mutating
 * the copies, we assign them back using this.setState().
 */

export function addItemToArray(array, item) {
  return [...array, item];
}

export function removeItemFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
