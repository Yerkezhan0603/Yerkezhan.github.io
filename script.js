document.getElementById('calculateBtn').addEventListener('click', function() {
    const basePrice = 100;

    const educationCoefficient = parseFloat(document.getElementById('education').value);
    const netWorthCoefficient = parseFloat(document.getElementById('netWorth').value);
    const casteValue = parseFloat(document.getElementById('caste').value);

    let skillsBonus = 0;
    if (document.getElementById('musician').checked) skillsBonus += 10;
    if (document.getElementById('cook').checked) skillsBonus += 20;
    if (document.getElementById('easygoing').checked) skillsBonus += 15;
    if (document.getElementById('singer').checked) skillsBonus += 10;

    const ageCoefficient = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationMultiplier = 1;
	if (document.getElementById('parentsAttitude').checked) reputationMultiplier *= 0.85;
	if (document.getElementById('characterGossip').checked) reputationMultiplier *= 0.9;

    let finalPrice = basePrice * educationCoefficient * netWorthCoefficient * ageCoefficient * reputationMultiplier + casteValue + skillsBonus;
	if (document.getElementById('generalGossip').checked) {
		finalPrice -= 20;
	}

    document.getElementById('finalPrice').innerText = `${finalPrice.toFixed(2)}`;
});