const wait = ms => new Promise(r => setTimeout(r, ms));
const findElementClassName = className => document.getElementsByClassName(className)[0]

async function loginPageAction(mode = "show") {
    const profileImage = findElementClassName("profileImage"),
        leftArea = findElementClassName("leftArea"),
        rightArea = findElementClassName("rightArea");
    if (mode === "hide") {
        profileImage.style.transform = "translate(-50%, -50%)"
        await wait(4000);
        profileImage.style.transform = "translate(-50%, -50%) rotate(-360deg)";
        leftArea.style.width = "0";
        rightArea.style.width = "0";
        await wait(3500);
        leftArea.style.display = "none"
        rightArea.style.display = "none";
        profileImage.style.transform = "translate(-50%, -50%)";
    } else if (mode === "show") {
        profileImage.style.transform = "translate(-50%, -50%) rotate(-360deg)";
        leftArea.style.display = "block";
        rightArea.style.display = "block";
        await wait(1);
        leftArea.style.width = "50%";
        rightArea.style.width = "50%";
        await loginPageAction("hide")
    }
}

document.addEventListener("DOMContentLoaded", () => loginPageAction("hide"));