function carregar () {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 5) {    // Mostrar a imagem certa.
        //BOA MADRUGADA
        img.src = "img/Madrugada (00h - 05h).png"
        document.body.style.background = "#041e38"   
    } else if (hora >= 5 && hora < 7) {
        //BOM DIA
        img.src = "img/Amanhecer (05h - 07h).png"
        document.body.style.background = "#083d75"  
    } else if (hora >= 7 && hora < 12) {
        //BOM DIA 2
        img.src = "img/Manhã (07h - 12h).png"
        document.body.style.background = "#52c3ff"  
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = "img/Tarde (12h - 18h).png"
        document.body.style.background = "#007df5"   
    } else if (hora >= 18 && hora < 19) {
        //BOA TARDE 2
        img.src = "img/Entardecer (18h - 19h).png"
        document.body.style.background = "#c06b5a" 
    } else if (hora >= 19 && hora < 21) {
        //BOA NOITE
        img.src = "img/Anoitecer (19h - 21h).png"
        document.body.style.background = "#182e44"  
    } else {
        //BOA NOITE 2
        img.src = "img/Noite (21h - 00h).png"
        document.body.style.background = "#06121e" 
    }
}


