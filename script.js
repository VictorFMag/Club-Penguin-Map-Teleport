//tp
function showMap() {
    document.getElementById("openMap").style.visibility = "visible";
}
function hideMap() {
    document.getElementById("openMap").style.visibility = "hidden";
}
function tp_plaza() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_plaza.webp)";
    document.getElementById('cenario').style.backgroundSize = "cover";
    hideMap();
}
function tp_centro() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_center.webp)";
    document.getElementById('cenario').style.backgroundSize = "cover";
    hideMap();
}
function tp_iglu() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_iglooComBack.webp)";
    document.getElementById('cenario').style.backgroundSize = "cover";
    hideMap();
}
function tp_forte() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_forte.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}
function tp_praia() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_praia.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}
function tp_ancoradouro() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_ancoradouro.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}
function tp_prainha() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_prainha.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}
function tp_casinhaMina() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_casinhaMina.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}
function tp_patioDojo() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_patio_dojo.webp)";
    document.getElementById('cenario').style.backgroundSize = "cover";
    hideMap();
}
function tp_iceberg() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_iceberg.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}
function tp_estadio() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_estadio.webp)";
    document.getElementById('cenario').style.backgroundSize = "cover";
    hideMap();
}
function tp_estacaoEsqui() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_estacaoEsqui.webp)";
    document.getElementById('cenario').style.backgroundSize = "cover";
    hideMap();
}
function tp_montanha() {
    document.getElementById('cenario').style.backgroundImage = "url(./CP_map_teleport_images/maps/CP_montanha.webp)";
    document.getElementById('cenario').style.backgroundSize = "contain";
    hideMap();
}

//pré-loader
const fadeOut = () => {
    const loaderWrapper =
        document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}
window.addEventListener('load', fadeOut);