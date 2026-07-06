

function setMobileViewport() {
    const meta = document.querySelector('meta[name="viewport"]') || document.createElement('meta');
    meta.name = 'viewport';
    // Ставим стандартную мобильную ширину
    meta.content = 'width=375, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

    if (!meta.parentNode) {
        document.head.appendChild(meta);
    }
}

setMobileViewport();

window.addEventListener('scroll', function() {
    const bg = document.querySelector('.parallax-bg');
    let offset = window.pageYOffset;
    // 0.5-ը փոխելով կարող եք արագացնել կամ դանդաղեցնել շարժումը
    bg.style.backgroundPositionY = (offset * 0.5) + 'px'; 
});