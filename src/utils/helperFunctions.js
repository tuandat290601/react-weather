const convertDeg = (degF) => {
    return (degF - 273.15).toFixed(1)
}

const convertMsToTime = (ms) => {
    return (new Date(ms)).toLocaleString().split(",")[1]
}

const convertMsToDayInWeek = (ms) => {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[ (new Date(ms)).getDay() ];
    return day
}

const convertMstoDate = (ms) => {
    return (new Date(ms)).toLocaleString('en-GB').split(",")[0]
}

const convertMsToFullDatetime = (ms) => {
    return convertMsToTime(ms) + " " +convertMstoDate(ms)
}

export {convertDeg, convertMsToTime, convertMsToDayInWeek, convertMstoDate, convertMsToFullDatetime}