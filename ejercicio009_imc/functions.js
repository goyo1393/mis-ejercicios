function calculateIMC() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (!name || !age || !weight || !height) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const heightInMeters = height / 100;
    const imc = (weight / (heightInMeters**2)).toFixed(2);

    let classification = '';

    if (imc < 18.5) {
        classification = 'badge3';
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = 'badge2';
    } else if (imc >= 25 && imc < 29.9) {
        classification = 'badge1';
    } else {
        classification = 'badge3';
    }

    document.getElementById('result').innerHTML = `
        <p>${name}, tienes ${age} años.</p>
        <p>Tu IMC es: ${imc}</p>
        <div class="${classification}"></div>`
}
