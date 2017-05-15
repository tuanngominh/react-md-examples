export const getMenuItems = (field) => {
  let data = [];
  let i = 0;
  while (i < 10) {
    data.push(`Value ${i}`);
    i++;
  }
  return data;
}