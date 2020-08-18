const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime /60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime /3600 % 24)).slice(-2);
        


        return{
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours
           }

    
    
};






const countdown = (deadline, elem) => {
    const el = document.getElementById(elem);
    
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainHours}h: ${t.remainMinutes}m: ${t.remainSeconds}s`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate)
        }
    },1000)
};


countdown('Aug 19 2020 00:00:00','clock');