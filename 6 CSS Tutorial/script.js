

const now = new Date()

const config ={
    timeSpeed: 0,  // 1 = normal speed (real time)
    timeTravel: 0, // offset from current time in milliseconds
    timeOffset: 0, // only programmatically

    // now
    now: {
        year: now.getYear(),
        month: now.getMonth(),
        day: now.getDay(),
        // 
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        millisecond: now.getMilliseconds(),
    }
}


/* –––––––––––––––––– Get all Elements from the DOM –––––––––––––––––– */

const digitalHour = document.getElementById("digital-hour")
const digitalMinute = document.getElementById("digital-minute")
const digitalSecond = document.getElementById("digital-second")


const analogueHour = document.getElementById("analogue-hour")
const analogueMinute = document.getElementById("analogue-minute")
const analogueSecond = document.getElementById("analogue-second")

const calendar = document.getElementById("calendar")


/* –––––––––––––––––– Updateing Time –––––––––––––––––– */


// handle interval 
// -- Every 10 Milliseconds the code inside this function gets called!
setInterval(() => {


    // we are offsetting time, based on the speed set.
    config.timeOffset += config.timeSpeed

    // Update the time
    const now = new Date(Date.now() + config.timeTravel + config.timeOffset) 

    config.now = {
        year: now.getYear(),
        month: now.getMonth(),
        day: now.getDay(),
        // 
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        millisecond: now.getMilliseconds(),
    }

    /* –––––––––––––––––– Update digital Watch –––––––––––––––––– */


    digitalHour.innerHTML = config.now.hour
    digitalMinute.innerHTML = config.now.minute
    digitalSecond.innerHTML = config.now.second


    /* –––––––––––––––––– Update analogue Watch –––––––––––––––––– */


    const hourAngle = ((config.now.hour % 12 + (config.now.minute + config.now.second / 60) / 60) / 12) * 360;
    const minuteAngle =  ((config.now.minute + config.now.second / 60) / 60) * 360;
    const secondAngle =  (config.now.second / 60) * 360

    // Update analogue watch
    analogueHour.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`
    analogueMinute.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`
    analogueSecond.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`


    /* –––––––––––––––––– Update Calendar –––––––––––––––––– */
    const oneDayOfst = 1000 * 60 * 60 * 24

    const todayOfst = Date.now() + config.timeTravel + config.timeOffset
    // Update Calendar based on now!!!
    const beforeYesterday = new Date(todayOfst - oneDayOfst * 2)
    const yesterday = new Date(todayOfst - oneDayOfst)
    const today = now
    const tomorrow = new Date(todayOfst + oneDayOfst)
    const afterTomorrow = new Date(todayOfst + oneDayOfst * 2)


    const days = [
        beforeYesterday,
        yesterday,
        today,
        tomorrow,
        afterTomorrow
    ]

    // calendar
    calendar.innerHTML = `
            ${days.map(day => (
                `
                    <div>${day.toLocaleString('de', { weekday: 'long' })}</div>
                    <div>${day.getDate()}</div>
                    <div>${day.toLocaleString('de', { month: 'long' })}</div>
                    <div>${day.getFullYear()}</div>
               `
            )).join("")}
    `

}, 10)



// Handle inputs

const inputTimeTravel = document.getElementById("input-time-travel")
const inputTimeWarp = document.getElementById("input-time-warp")

const labelTimeTravel = document.getElementById("label-time-travel")
const labelTimeWarp = document.getElementById("label-time-warp")


inputTimeTravel.addEventListener("input", (e) => {

    config.timeTravel = parseInt(e.currentTarget.value * 1000)

    const seconds = config.timeTravel/1000

    const s = seconds % 60
    const m = Math.floor(seconds / 60) % 60
    const h = Math.floor(Math.floor(seconds / 60) / 60)


    const time = `${h !== 0 ? `${h}h ` : ''}${m !== 0 ? `${m}m ` : ''}${s !== 0 ? `${s}s` : ''}`

    labelTimeTravel.innerHTML = `Time Travel (${time})`
})


inputTimeWarp.addEventListener("input", (e) => {

    config.timeSpeed = parseInt(e.currentTarget.value)
    labelTimeWarp.innerHTML = `Time Warp (${config.timeSpeed})`
})