export function formatDate(tdate: number) {
  const tyear = new Date(tdate).getFullYear();
  const tmonth = new Date(tdate).getMonth();
  const tday = new Date(tdate).getDate();
  const thours = new Date(tdate).getHours();
  const tminutes = new Date(tdate).getMinutes();

  const transactionDate = [tyear, tmonth, tday].join("/");
  const transactionTime = [thours, tminutes].join(":");

  return `${transactionDate}, ${transactionTime}`;
}
