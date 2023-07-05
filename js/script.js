let number = document.querySelector('.number')
let openBtn = document.querySelector('.modal-btn') 
let btn = document.querySelector('.btn-modal')
let modal = document.querySelector('.modal')
let modalTime = document.querySelector('.modal-time')
let pmAm = document.querySelector('.pm')
let input = document.querySelector('.input-num')




let format = document.querySelector('.format'),
     gmt = document.querySelector('.gmt'),
     yourTmz = document.querySelector('.your-tmz'),
     relative = document.querySelector('.relative')



let unix = document.querySelector('.unix'),
     gmt2 = document.querySelector('.gmt2'),
     yourTmz2 = document.querySelector('.your-tmz2'),
     relative2 = document.querySelector('.relative2')

 let year = document.querySelector('.year'),
     month = document.querySelector('.month'),
     day = document.querySelector('.day'),
     hour = document.querySelector('.hour'),
     minutes = document.querySelector('.minutes'),
     seconds = document.querySelector('.seconds')

    //  function setInputTime(){
    //     let now = new Date()
    //     year.innerText = now.getFullYear()
    //     month.innerHTML = now.getMonth()
    //     day.innerText = now.getDay()
    //     hour.innerText = now.getHours()
    //     minutes.innerText = now.getMinutes()
    //     seconds.innerText = now.getSeconds()
    // }
    // setInputTime()


function showTime(){
    let date = Date.parse(new Date()) / 1000
    number.innerText = date

}
showTime()
setInterval(()=>{
    showTime()
    timer()
    // setInputTime()
},1000)


openBtn.addEventListener('click',()=>{
    modal.style.display = 'flex'
    function secMil(){
        if(input.value.length > 11){
            return 'Milliseconds (1/1,000 second)'
        }else {
            return 'Seconds'
        }
    }
    let sm = secMil()

    
    format.innerText = sm
    gmt.innerText = new Date(+input.value).toUTCString() + '+0000'
    yourTmz.innerText = new Date(+input.value)
    let x = new Date().getFullYear() - new Date(+input.value).getFullYear()

    relative.innerText = getYear(x)
})


btn.addEventListener('click',()=>{
    modalTime.style.display = 'flex'
    unix.innerText =  new Date(`${year.value}-${addzero(month.value)}-${addzero(day.value)}T${addzero(hour.value)}:${addzero(minutes.value)}:${addzero(seconds.value)}`).getTime() / 1000
    gmt2.innerText =  new Date(`${year.value}-${addzero(month.value)}-${addzero(day.value)}T${addzero(hour.value)}:${addzero(minutes.value)}:${addzero(seconds.value)}`).toUTCString()+ '+0000'
    yourTmz2.innerText = new Date(`${year.value}-${addzero(month.value)}-${addzero(day.value)}T${addzero(hour.value)}:${addzero(minutes.value)}:${addzero(seconds.value)}`)
    let v = new Date().getFullYear() - new Date(`${year.value}-${addzero(month.value)}-${addzero(day.value)}T${addzero(hour.value)}:${addzero(minutes.value)}:${addzero(seconds.value)}`).getFullYear()
    relative2.innerText = getYear(v)
})


function timer(){
    let date = new Date()
    let hour = addzero(date.getHours())
    let minute = addzero(date.getMinutes())
    let second = addzero(date.getSeconds())
    let isAm = date.getHours() < 12
    
    
    const clock =`${hour} : ${ minute} : ${second} ${isAm ? "AM" : "PM"}`
    pmAm.innerText = clock

}
timer()

function getYear(y){
    if(y > 0){
        return y + ' years ago'
    }else{
        return `in ${y * -1} years`
    }
}


function addzero(num){
    if(num >= 0 && num < 10){
        return `0${num}`
    }else{
        return num
    }
}


let copy = document.querySelector('.btn-copy')

copy.addEventListener('click',()=>{
    let date = new Date().getTime()/1000

    navigator.clipboard.writeText(date.toFixed(0))
    copy.innerText = 'Copied!'
    
})

setInterval(()=>{
    copy.innerText = 'Copy'
},2000)







