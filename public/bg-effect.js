function updateBackground(condition) {
    let hour = new Date().getHours();
    let body = document.body;
    
    if (condition.includes("Rain")) {
        body.className = "rain-effect";
    } else if (condition.includes("Snow")) {
        body.className = "snow-effect";
    } else if (hour >= 6 && hour < 12) {
        body.className = "morning-effect";
    } else if (hour >= 12 && hour < 18) {
        body.className = "evening-effect";
    } else {
        body.className = "night-effect";
    }
}
