function joinAndLeave() {
    let startCall = document.querySelector('[aria-label="Start Voice Call"]');
    let endCall = document.querySelector('[aria-label="Disconnect"]');
    let joinCall = document.querySelector('[aria-label="Join Call"]')
    console.log(startCall);
    console.log(endCall);
    if (startCall == null && endCall == null) {
        joinCall.click();
    } else if (startCall == null) {
        endCall.click();
    } else {
        startCall.click();
    }
}

let intV = setInterval(joinAndLeave, 1000);
