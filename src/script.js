const printBtn = document.getElementById('btnPdf');
const AppGroLink = document.getElementById('OpenAppGro');
const ImportantLists = document.querySelectorAll('.importantList');
ImportantLists.forEach(list => {
    list.children[0].classList.toggle('importantListExpanded');
    list.addEventListener('click', function () {
        list.children[0].classList.toggle('importantListExpanded');
    });
});
AppGroLink.addEventListener('click', function (event) {
    event.preventDefault();
    Toastify({
        text: 'El proyecto fue entregado, pero se dio de baja el hosting gratuito, por lo que no es posible acceder a él. Sin embargo, el código fuente del proyecto está disponible en mi repositorio de GitHub.',
        duration: 5000,
        close: true,
    }).showToast();
});
printBtn.addEventListener('click', function () {
    print();
});
if (window.localStorage.getItem('darkMode')) {
    document.getElementById('themeCheckbox').checked = window.localStorage.getItem('darkMode') === 'true' ? true : false;
    window.localStorage.getItem('darkMode') === 'true' ? toggleNightMode() : null;
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('themeCheckbox').checked = true;
    toggleNightMode();
}
function toggleNightMode() {
    var checkbox = document.getElementById('themeCheckbox');
    window.localStorage.setItem('darkMode', checkbox.checked);
    const elements = document.querySelectorAll('body, .main, .aside, .footer, .contactItem, .footerPdf, .footerLink, .header');
    elements.forEach(element => {
        element.classList.toggle('darkMode');
    });
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        console.log('Email copiado al portapapeles: ' + text);
    }, function (err) {
        console.log('Error al copiar el email: ', err);
    });
}
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://dario849.github.io/github-portfolio/",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
document.getElementById("qrcode").title = "Podes escanear este QR para ver la versión web \n desde cualquier dispositivo movil";