

const showTime = () => {
    let Days = ['Monday', ' Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday', 'Sunday']
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let date = time.getDate()
    let year = time.getFullYear()
    let day = time.getDay()
    let month = time.getMonth()
    document.querySelector('#date').innerHTML = `${date}:${month+1}:${year}`
    document.querySelector('#day').innerHTML = Days[day-1]
    if (hour >= 12){
        document.querySelector('#Time').innerHTML = `${hour-12}:${min}:${sec}`
        document.querySelector('#PMAM').innerHTML = 'PM'

    } else {
        document.querySelector('#Time').innerHTML = `${hour-12}:${min}:${sec}`
        document.querySelector('#PMAM').innerHTML = 'AM'
    }

}

setInterval(showTime , 1000)
// console.log(time)