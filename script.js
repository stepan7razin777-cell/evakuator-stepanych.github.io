// Плавное появление элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
});

// Калькулятор (есть на странице цен)
function calculateCost() {
    const from = document.getElementById('from')?.value;
    const to = document.getElementById('to')?.value;
    const vehicleType = document.getElementById('vehicleType')?.value;
    let distance = parseFloat(document.getElementById('distance')?.value);
    if (isNaN(distance)) distance = 0;
    let pricePerKm = 0;
    if (vehicleType === 'legkovoy') pricePerKm = 75;
    else if (vehicleType === 'vnedorozhnik') pricePerKm = 80;
    else if (vehicleType === 'spectechnika') pricePerKm = 80;
    let total = distance * pricePerKm;
    if (total < 3000 && distance > 0) total = 3000;
    const resultDiv = document.getElementById('calcResult');
    if (resultDiv) {
        if (distance <= 0) resultDiv.innerHTML = '⚠️ Укажите расстояние (км)';
        else resultDiv.innerHTML = `💰 Примерная стоимость: <strong>${total} ₽</strong> (минимальная цена по городу 3000 ₽)`;
    }
}