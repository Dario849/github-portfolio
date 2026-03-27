const printBtn = document.getElementById('btnPdf');
const AppGroLink = document.getElementById('OpenAppGro');
const ImportantLists = document.querySelectorAll('.importantList');
const defaultLang = 'es';
const qrcodeElement = document.getElementById("qrcode");
var currentLang = LoadFromLocalStorage('languageSelect') || defaultLang;
GetFromLocalStorageAndSetValues();

ImportantLists.forEach(list => {
    list.children[0].classList.toggle('importantListCollapsed');
    list.addEventListener('click', function () {
        list.children[0].classList.toggle('importantListCollapsed');
    });
});
CollapseImportantLists();
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

qrcodeElement.title = "Podes escanear este QR para ver la versión web \n desde cualquier dispositivo movil";
// Function detects if all the lists are expanded, if they are, on print, body needs to change from val zoom: 0.81 to zoom: 0.59.
window.onbeforeprint = function () {
    const allExpanded = Array.from(ImportantLists).some(list => list.children[0].classList.contains('importantListCollapsed') === false);
    if (allExpanded) {
        document.body.style.zoom = '0.59';
    } else {
        document.body.style.zoom = '0.81';
    }
};
window.onafterprint = function () {
    document.body.style.zoom = 'initial'; // Reset zoom to default after printing
};
// 1. Fetch translation file
async function loadTranslations(lang) {
    const response = await fetch(`./locales/${lang}.json`);
    return response.json();
}

// 2. Update DOM elements
async function changeLanguage(lang) {
    const translations = await loadTranslations(lang);
    currentLang = lang;
    SaveToLocalStorage('languageSelect', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });
    // On change from language, the script that collapses the lists is overridden, so I need to reapply the event listeners to the lists after changing the language
    CollapseImportantLists();
}
function CollapseImportantLists() {
    document.querySelectorAll('.importantList').forEach(list => {
        list.children[0].classList.add('importantListCollapsed');
    });
}
function toggleNightMode() {
    var checkbox = document.getElementById('themeCheckbox');
    SaveToLocalStorage('darkMode', checkbox.checked);
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
function GetFromLocalStorageAndSetValues() {
    const darkMode = LoadFromLocalStorage('darkMode');
    const themeCheckbox = document.getElementById('themeCheckbox');
    if (darkMode) {
        themeCheckbox.checked = darkMode === 'true' ? true : false;
        if (darkMode === 'true') {
            var qrcode = new QRCode(qrcodeElement, {
                text: "https://dario849.github.io/github-portfolio/",
                width: 128,
                height: 128,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.Q
            });
            qrcodeElement.classList.add('QrcodeDarkMode');
        } else {
            var qrcode = new QRCode(qrcodeElement, {
                text: "https://dario849.github.io/github-portfolio/",
                width: 128,
                height: 128,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.Q
            });
        }
        darkMode === 'true' ? toggleNightMode() : null;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeCheckbox.checked = true;
        toggleNightMode();
    }
    const languageStoraged = LoadFromLocalStorage('languageSelect');
    if (languageStoraged && languageStoraged !== defaultLang) {
        // Language is different from "es"
        document.getElementById('languageSelect').value = languageStoraged;
        changeLanguage(languageStoraged);
    }
}
function SaveToLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
}
function LoadFromLocalStorage(key) {
    return window.localStorage.getItem(key);
}

