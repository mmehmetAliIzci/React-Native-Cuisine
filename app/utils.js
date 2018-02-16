
/**
 * Responsible for holding calculations that can be accessible anywhere
 * in the app
 */



/**
 * searchDish - Responsible for returning the filteredList by searching
 * Every jsonVALUE in the arrayELEMENT
 * @param  {String} filterText  text To Be Searched
 * @param  {Array} arrayToSearch   Array to be searched through.
 * @return {Array} results
 */
export const searchDish = (filterText, arrayToSearch) => {
  filterText = filterText.toLowerCase()
  let results = arrayToSearch.filter((item) => {
    for (var variable in item) {
      if (item.hasOwnProperty(variable)) {
        if (JSON.stringify(item[variable]).toLowerCase().includes(filterText)) {
          return true
        }
      }
    }
  })

  return results
}

/**
 * sortDishesByName - Responsible for returning the filteredList by searching
 * Every jsonVALUE in the arrayELEMENT
 * @param  {Array} arrayToSort   Array to be sorted by Name ASC
 * @return {Array} results
 */
export const sortDishesByName = (arrayToSort) => {
  let results = arrayToSort.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return results;
}
