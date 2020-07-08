
let s = `2016-07-01`
let e = `2016-08-04`

function splitDate(date){
    return date.split("-")
}

function isSame(start, end){
    return start === end
}

function isSameYear(startYear, endYear){
    return isSame(startYear, endYear)
}

function isSameMonth(startMonth, endMonth){
    return isSame(startMonth, endMonth)
}

function isCurrentYear(year){
    const date = new Date(Date.now())
    const currentYear = date.getFullYear()
    return Number(currentYear) === Number(year)
}



function convertMonth(month){
    let numMonth = Number(month)

    let conversionMonth = {
        1 : 'January',
        2 : 'Feburary',
        3 : 'March',
        4 : 'April',
        5 : 'May',
        6 : 'June',
        7 : 'July',
        8 : 'August',
        9 : 'September',
        10 : 'October',
        11 : 'November',
        12 : 'December'
    }

    return conversionMonth[numMonth]
}

function convertDateCardinal(day){
    let toNumDay = Number(day)
    let dateCardinal = {
        1 : '1st',
        2 : '2nd',
        3 : '3rd',
        21 : '21st',
        22 : '22nd',
        23 : '23rd',
        31 : '31st'
    }

    return dateCardinal[toNumDay] === undefined ? `${toNumDay}th` : dateCardinal[toNumDay]
}

function constructfriendlyDate(day = "", month = "", year = ""){
    let monthAndDay = [month, day].join(" ")
    let newDate = [monthAndDay, year].join(", ")
    return newDate
}

function constructfriendlyMonthAndDay(month, day){    
    let monthAndDay = [month, day].join(" ")
    return monthAndDay
}


function makeFriendlyDates(startDate, endDate){
        let splitStartDate = splitDate(startDate)
        let splitEndDate = splitDate(endDate)

        let startYear = splitStartDate[0]
        let endYear = splitEndDate[0]

        let startMonth = convertMonth(splitStartDate[1])
        let endMonth = convertMonth(splitEndDate[1])

        let startDay = convertDateCardinal(splitStartDate[2])
        let endDay = convertDateCardinal(splitEndDate[2])  

        let newStartDate = constructfriendlyDate(startDay, startMonth, startYear)
        let newEndDate = constructfriendlyDate(endDay, endMonth, endYear)

        // current Year and same year
        if(isSameYear(startYear, endYear) && isCurrentYear(startYear)){
            if (isSameMonth(startMonth, endMonth)){
                let friendlyStartMonthAndDay = constructfriendlyMonthAndDay(startDay, startMonth)

                return [friendlyStartMonthAndDay, endDay]
            }else{
                let friendlyStartMonthAndDay = constructfriendlyMonthAndDay(startDay, startMonth)
                let friendlyEndMonthAndDay = constructfriendlyMonthAndDay(endDay, endMonth)

                return [friendlyStartMonthAndDay, friendlyEndMonthAndDay]
            }

        } else if(isSameYear(startYear, endYear) && !isCurrentYear(startYear)) {
                if(isSameMonth(startMonth, endMonth)){
                    let friendlyStartDate = constructfriendlyDate(startDay, startMonth, startYear)
                    return [friendlyStartDate, endDay]
                }else{
                    let friendlyStartDate = constructfriendlyDate(startDay, startMonth, startYear)
                    let friendlyEndMonthAndDay = constructfriendlyMonthAndDay(endDay, endMonth)
                    return [friendlyStartDate, friendlyEndMonthAndDay]

                }

        }
        
    return [newStartDate, newEndDate]
}

console.log(makeFriendlyDates(s, e))
