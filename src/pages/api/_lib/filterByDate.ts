export const filterByDate = (date: string | Date, data: any[], field: string) => {
  const selectedDate = new Date(date);

  const initialDate = new Date(
    selectedDate.getFullYear(), 
    selectedDate.getMonth(),
    selectedDate.getDate(),
    0,
    0,
    0
  );

  const finalDate = new Date(
    selectedDate.getFullYear(), 
    selectedDate.getMonth(),
    selectedDate.getDate(),
    23,
    59,
    59
  );
  
  return data.filter(item => (
    new Date(item[field]) >= initialDate && new Date(item[field]) <= finalDate
  ));
}