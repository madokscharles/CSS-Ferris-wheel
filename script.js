document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const spinButton = document.getElementById("spin-button");
    const stopButton = document.getElementById("stop-button");
    const wheel = document.getElementById("wheel");

    console.log("spinButton:", spinButton);
    console.log("stopButton:", stopButton);
    console.log("wheel:", wheel);

    // Debugging: Check if the elements are correctly selected
    if (spinButton && stopButton && wheel) {
        console.log("Elements found successfully!");

        spinButton.addEventListener("click", () => {
            console.log("Spin button clicked");
            wheel.style.animationPlayState = "running";
            spinButton.style.display = "none";
            stopButton.style.display = "inline";
        });

        stopButton.addEventListener("click", () => {
            console.log("Stop button clicked");
            wheel.style.animationPlayState = "paused";
            spinButton.style.display = "inline";
            stopButton.style.display = "none";
        });
    } else {
        console.error("One or more elements are not found.");
    }
});
