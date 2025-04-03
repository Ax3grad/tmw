const colorNames = {
    '#1f3a57': 'Navy Blue',
    '#b0b0b0': 'Light Gray',
    '#5a5a5a': 'Dark Gray',
    '#800020': 'Burgundy',
    '#333333': 'Charcoal',
    '#000000': 'Black',
    '#f5f5dc': 'Beige',
    '#d2b48c': 'Tan',
    '#006400': 'Green',
    '#ffffff': 'White',
    '#f5f5f5': 'Off-White',
    '#e0e0e0': 'Light Gray',
    '#d3d3d3': 'Silver',
};

const suitColors = Object.keys(colorNames).slice(0,9);
const shirtColors = Object.keys(colorNames).slice(9);

document.getElementById('generate-btn').addEventListener('click', generateOutfit);
document.getElementById('generate-tie-btn').addEventListener('click', generateTieColor);

function generateOutfit() {
    const suitColor = randomColor(suitColors); // Generate a single color for both Coat and Pants
    const tieColor = getRandomColor(); // Random tie colors
    const shirtColor = randomColor(shirtColors); // Generate a separate color for the Dress Shirt

    setColor('top', suitColor);
    setColor('bottom', suitColor);
    setColor('middle', shirtColor);
    setColor('tie', tieColor, getColorName(tieColor));

    // Set the background color for Coat and Pants to the same color
    document.getElementById('top').style.backgroundColor = suitColor;
    document.getElementById('bottom').style.backgroundColor = suitColor;
    document.getElementById('tie').style.backgroundColor = tieColor;

    // Set the background color for the Dress Shirt
    document.getElementById('middle').style.backgroundColor = shirtColor;
}

function generateTieColor() {
    const tieColor = getRandomColor();
    setColor('tie', tieColor, getColorName(tieColor));
}

function setColor(elementId, color, colorName = null) {
    document.getElementById(elementId).style.backgroundColor = color;
    document.getElementById(`${elementId}-name`).textContent = colorName || colorNames[color] || 'Unknown Color';
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function getColorName(hex) {
    return colorNames[hex] || 'Unknown Color';
}

function randomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

