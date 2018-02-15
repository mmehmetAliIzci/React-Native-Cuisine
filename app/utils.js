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

export const sortDishes = (arrayToSort) => {
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
