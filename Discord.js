function joinAndLeave() {
    let startCall = document.querySelector('[aria-label="Start Voice Call"]');
    let endCall = document.querySelector('[aria-label="Disconnect"]');
    let joinCall = document.querySelector('[aria-label="Join Call"]')
    if (startCall == null && endCall == null) {
        joinCall.click();
    } else if (startCall == null) {
        endCall.click();
    } else {
        startCall.click();
    }
    sleep(1500);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(joinAndLeave, 1000);
