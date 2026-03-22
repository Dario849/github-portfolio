const printBtn = document.getElementById('btnPdf');
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