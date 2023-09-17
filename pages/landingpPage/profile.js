
function toggleDescription() {
    const descriptionSection = document.querySelector('.bio');
    const toggleButton = document.getElementById('toggle-description');

   
    const isDescriptionVisible = descriptionSection.style.display !== 'none';

    // Altera o estado de exibição e o texto do botão
    if (isDescriptionVisible) {
        descriptionSection.style.display = 'none';
        toggleButton.textContent = 'Mostrar Descrição';
    } else {
        descriptionSection.style.display = 'block';
        toggleButton.textContent = 'Ocultar Descrição';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-description');
    toggleButton.addEventListener('click', toggleDescription);
});
