function resize() {
    parent.postMessage(document.body.scrollHeight, '*');
}

window.addEventListener('load', resize)
window.addEventListener('resize', resize)