export const filterData = (searchTxt, resturents) => {
  const filteredData = resturents.filter((resturent) =>
    resturent.info.name.toLowerCase().includes(searchTxt)
  );
  return filteredData;
};
 