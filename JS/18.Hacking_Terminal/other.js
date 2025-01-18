const box=document.querySelector(".box")
function waitfor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function dots(count) {
    return ".".repeat(count % 5); // Cycles through ".", "..", "...", "...."
}

async function main() {
    let time;

    async function animateText(message, duration) {
        const startTime = Date.now();
        while (Date.now() - startTime < duration) {
            for (let i = 0; i < 5; i++) {
                box.innerHTML = message + dots(i);
                await waitfor(200); 
            }
        }
    }

    time = 1 + Math.floor(Math.random() * 7);
    console.log(time);
    await animateText("Initializing Hacking", time * 1000);

    time = 1 + Math.floor(Math.random() * 7);
    console.log(time);
    await animateText("Reading your Files", time * 1000);

    time = 2 + Math.floor(Math.random() * 7);
    console.log(time);
    await animateText("Password files Detected", time * 1000);

    time = 2 + Math.floor(Math.random() * 7);
    console.log(time);
    await animateText("Sending all passwords and personal files to server", time * 1000);

    time = 2 + Math.floor(Math.random() * 7);
    console.log(time);
    await animateText("Cleaning up", time * 1000);

    box.innerHTML = "Your Computer is Hacked";
    console.log("Completed");
}

main()
