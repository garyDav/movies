document.addEventListener('DOMContentLoaded', function () {
    const inicioButton = document.getElementById('inicio-button');
    const candybarButton = document.getElementById('candybar-button');
    const inicioSection = document.querySelector('.inicio');
    const candybarSection = document.querySelector('.Candybar');

    inicioButton.addEventListener('click', function () {
        inicioSection.classList.remove('hidden');
        candybarSection.classList.add('hidden');
    });

    candybarButton.addEventListener('click', function () {
        candybarSection.classList.remove('hidden');
        inicioSection.classList.add('hidden');
    });
});
