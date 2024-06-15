export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const sortItems = () => {};

export const getColummns = (data: any[] = []) => {
  const columns = data && data.length ? Object.keys(data[0]) : [];
  return columns.map((column) => ({
    name: capitalize(column),
    uid: column,
    sortable: false,
  }));
};
