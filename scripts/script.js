const main = document.querySelector("main")

main.addEventListener("mouseover", (evento)=>{
    if(evento.target.className === "videosPequenios" || evento.target.className === "videosGrandes"){
        evento.target.play()
    }
})

main.addEventListener("mouseout", (evento)=>{
    
    if(evento.target.className === "videosPequenios" || evento.target.className === "videosGrandes"){
        evento.target.pause()
    }
    
})