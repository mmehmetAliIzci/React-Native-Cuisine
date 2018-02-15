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
