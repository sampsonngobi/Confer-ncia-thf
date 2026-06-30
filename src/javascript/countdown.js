export function startCountDown(eventDate) {
    const daysElement = document.getElementById('days'); 
    const hoursElement = document.getElementById('hours'); 
    const minutesElement = document.getElementById('minutes'); 
    const secondsElement = document.getElementById('seconds'); 

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }


    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = eventDate - now;

        if(timeDifference<= 0){
            clearInterval(timer);

            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';

            return;
           
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');   
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
}

