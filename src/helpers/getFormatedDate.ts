export default function getFormatedDate() {
 const currentDate = new Date();
 const year = currentDate.getFullYear();
 const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // добавляем 1, так как месяцы в JavaScript нумеруются с 0
 const day = currentDate.getDate().toString().padStart(2, "0");
 const formattedDate = year + "-" + month + "-" + day;
 return formattedDate;
}