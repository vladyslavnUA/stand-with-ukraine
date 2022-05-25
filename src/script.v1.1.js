var styles = `
    .ukraine {
        position: fixed;
        bottom: 12px;
        right: -108px;
        z-index: 999;
    }
    .ukraine #uawidget {
        width: 300px;
        transform: rotate(-45deg);
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

const ishere = document.getElementById('ukraine') || false
if (ishere) {
    document.getElementById("ukraine").innerHTML = `<div class="ukraine"><a href="https://www.standwithukraine.dev/" target="_blank" title="United for Ukraine"><img src="https://i.imgur.com/XAGrqkr.png" alt="" id="uawidget"></a></div>`;
}