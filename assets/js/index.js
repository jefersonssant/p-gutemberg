//Títulos da página principal
const titulos = ['Conheça o Escritório de Gutemberg Santana', 'Experiência em diversas áreas do Direito', 'Equipe de profissionais altamente qualificados'];

let textoAtual = 0;

function alteraTexto() {
    const h1 = document.querySelector('#titulo');
    h1.textContent = titulos[textoAtual]
    textoAtual = (textoAtual + 1) % titulos.length;
}

setInterval(alteraTexto, 5000);
//
//Animação
function showItens() {
    const oneItem = document.querySelector("#introone");
    const twodItem = document.querySelector(".profileimg");
    const difTitle = document.querySelector("#difTitle");
    const treeItem = document.querySelector("#difTree");
    const fourItem = document.querySelector("#difFour");
    const fiveItem = document.querySelector("#difFive");
    const sixItem = document.querySelector("#difSix");
    const sevenItem = document.querySelector("#difSeven");

    if (window.scrollY > 490) {
        oneItem.classList.add('showItens');
        setTimeout(() => twodItem.classList.add('showItens'), 500)
    } else {
        oneItem.classList.remove('showItens');
        twodItem.classList.remove('showItens');
    }

    if (window.scrollY > 1230) {
        difTitle.classList.add('showItens');
        setTimeout(() => treeItem.classList.add('showItens'), 500)
        setTimeout(() => fourItem.classList.add('showItens'), 1000)
        setTimeout(() => fiveItem.classList.add('showItens'), 1500)
        setTimeout(() => sixItem.classList.add('showItens'), 2000)
        setTimeout(() => sevenItem.classList.add('showItens'), 2500)
    } else {
        difTitle.classList.remove('showItens');
        treeItem.classList.remove('showItens');
        fourItem.classList.remove('showItens');
        fiveItem.classList.remove('showItens');
        sixItem.classList.remove('showItens');
        sevenItem.classList.remove('showItens');
    }
}

window.addEventListener('scroll', showItens);
// window.addEventListener('resize', showItens);


const menuIcon = document.querySelector('#menu__icon');
const menuUL = document.querySelector('.menu')

function menuResponsivo() {
    
    
    
    if(menuIcon.innerHTML == "menu" && menuUL.style.display == "none") {
        menuIcon.innerHTML = "close";
        menuUL.style.display = "block";
    } else {
        menuIcon.innerHTML = "menu";
        menuUL.style.display = "none";
    }
    
};

function menuRedimencionamento() {
    if(window.innerWidth > 1138) {
        menuUL.style.display = "none";
    } else {
        menuIcon.innerHTML = "menu";
        menuUL.style.display = "none";
    }
}

menuIcon.addEventListener('click', menuResponsivo);
window.addEventListener('resize', menuRedimencionamento);

menuRedimencionamento();
