export function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData; 
  }

