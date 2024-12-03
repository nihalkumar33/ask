document.addEventListener("DOMContentLoaded", ()=>{
    const button = document.getElementById("noButton");
    button.addEventListener("mouseover", ()=>{
        const maxX = window.innerWidth - button.clientWidth;
        const maxY = window.innerHeight - button.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    })

})