function date(year, month, day) {
    let date = new Date(year, month - 1, day);

    date.setDate(date.getDate() + 1);

    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate();

    return `${newYear}-${newMonth}-${newDay}`;
}
date(2016, 9, 30);