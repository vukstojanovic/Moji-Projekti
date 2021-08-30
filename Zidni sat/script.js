
// DOM elementi

const kazaljkaSekunde = document.querySelector(".sekunde");
const kazaljkaMinuti = document.querySelector(".minuti");
const kazaljkaSati = document.querySelector(".sati");

setInterval(() => {
    const datum= new Date();
    let sekunde = datum.getSeconds();
    let minuti = datum.getMinutes();
    let sati = datum.getHours();
    let sekundaStepeni = 360/60 * sekunde;
    let minutiStepeni = 360/60 * minuti;
    let satiStepeni = 360/12 * sati;
    kazaljkaSekunde.style.transform = `rotate(${sekundaStepeni}deg)`;
    kazaljkaMinuti.style.transform = `rotate(${minutiStepeni}deg)`;
    kazaljkaSati.style.transform = `rotate(${satiStepeni}deg)`;
}, 1000);















