function blowCandle() {

    let flames = document.querySelectorAll(".flame");

    flames.forEach(function(flame){
        flame.style.display = "none";
    });

    setTimeout(function() {
        document.getElementById("msg").classList.remove("hidden");
    }, 1000);
}
function playMusic() {
    document.getElementById("bgMusic").play();
}

function playMusic() {
    document.getElementById("bgMusic").play();
}