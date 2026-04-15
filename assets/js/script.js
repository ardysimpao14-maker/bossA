const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

function showSkill(imagePath){
    const viewer = document.getElementById("skillViewer");

    if (viewer.style.display === "block" && viewer.src.includes(imagePath)) {
        viewer.style.display = "none";
    } else {
        viewer.src = imagePath;
        viewer.style.display = "block";
    }
}

function openVideo(videoFile){
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("myVideo");
    const source = document.getElementById("videoSource");

    source.src = "assets/video/" + videoFile;
    video.load(); // load new video

    modal.style.display = "flex";
}

function closeVideo(){
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("myVideo");

    modal.style.display = "none";

    // AUTO PAUSE + RESET
    video.pause();
    video.currentTime = 0;
}

const cards = document.querySelectorAll(".cyber-card");

cards.forEach(card => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

    // CLICK TO OPEN MODAL (reuse your existing function)
    card.addEventListener("click", () => {
        const src = video.getAttribute("src").split("/").pop();
        openVideo(src);
    });
});

const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            popup.style.display = "flex";
            form.reset();
        } else {
            alert("❌ Failed to send message.");
        }
    })
    .catch(() => {
        alert("❌ Error sending message.");
    });
});

function closePopup(){
    popup.style.display = "none";
}

////





