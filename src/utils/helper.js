export const filterData = (searchTxt, resturents) => {
  const filteredData = resturents.filter((resturent) =>
    resturent.data.name.toLowerCase().includes(searchTxt)
  );
  return filteredData;
};
 