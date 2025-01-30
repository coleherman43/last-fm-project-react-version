export const formatTime = (seconds) => {
    const totalSeconds = seconds;
    console.debug(`Total seconds: ${totalSeconds}`);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 60) / 60);
    const newSecs = seconds % 60;
    // Always display minutes and seconds, even if minutes is 0
    if (seconds == 0) {
        return "No data";
    }
    return `${hours}h ${minutes}m ${newSecs}s`;
};