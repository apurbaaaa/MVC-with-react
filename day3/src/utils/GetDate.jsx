export function todaysDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();
    const day1 = today.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[day1];
    const minutes= padNumber(today.getMinutes());
    const hour = today.getHours();

    return {month, date, year, day, hour, minutes};
    
}

function padNumber(num) {
    return num.toString().padStart(2, '0');
}