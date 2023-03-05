dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element,dayString){
    const targetDate=dayjs(dayString);

    document.querySelector(".until__event").textContent = `Until${targetDate.format (" DD MMMM YYYY")}`;
    

    setInterval(()=>{
        const now = dayjs();
        const duration= dayjs.duration(targetDate.diff(now));

        document.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2,"0")
        document.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2,"0")
        document.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2,"0")
        document.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2,"0")
    }, 250)

}

activateCountdown(document.getElementById("myCountdown"), "2023-04-05")