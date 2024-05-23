import dayjs from "dayjs";


const firstDay = dayjs('2024,06,12')
const secondDay = dayjs('2024,06,13')
const thirdDay = dayjs('2024,06,14')

const eventDays = {
    [firstDay]: "Event Start Day",
    [secondDay]: "Hackathon Continues",
    [thirdDay]: "Presentation, Prize Distribution and Closing Day"
}

console.log("eventDays", eventDays)

export const generateDate = (

    month = dayjs().month(),
    year = dayjs().year()
) => {
    console.log("inside generate days")

    console.log("month", month)
    console.log("year", year)
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const arrayOfDate = [];

    // create prefix date
    for (let i = 0; i < firstDateOfMonth.day(); i++) {
        const date = firstDateOfMonth.day(i);

        arrayOfDate.push({
            currentMonth: false,
            date,
        });
    }

    // generate current date
    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        if (eventDays.hasOwnProperty(firstDateOfMonth.date(i))) {
            arrayOfDate.push({
                currentMonth: true,
                date: firstDateOfMonth.date(i),
                today:
                    firstDateOfMonth.date(i).toDate().toDateString() ===
                    dayjs().toDate().toDateString(),
                questEvent: eventDays[firstDateOfMonth.date(i)]
            });

        }
        else {
            arrayOfDate.push({
                currentMonth: true,
                date: firstDateOfMonth.date(i),
                today:
                    firstDateOfMonth.date(i).toDate().toDateString() ===
                    dayjs().toDate().toDateString(),
            });

        }

    }

    const remaining = 42 - arrayOfDate.length;

    for (
        let i = lastDateOfMonth.date() + 1;
        i <= lastDateOfMonth.date() + remaining;
        i++
    ) {
        arrayOfDate.push({
            currentMonth: false,
            date: lastDateOfMonth.date(i),
        });
    }
    return arrayOfDate;
};


export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

generateDate()