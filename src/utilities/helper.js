const viberate = (duration = 50) => {
    if(navigator && navigator.vibrate){
        return navigator.vibrate(duration)
    }
}

export {viberate}