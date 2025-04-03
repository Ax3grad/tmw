const suitColorsR = ['#1f3a57', '#b0b0b0', '#5a5a5a', '#800020', '#333333', '#f5f5dc', '#d2b48c', '#006400'];
const suitPantsColorsR = ['#1f3a57', '#b0b0b0', '#5a5a5a', '#800020', '#333333', '#f5f5dc', '#d2b48c', '#006400']; // Navy, Light Gray, Dark Gray, Burgundy, Charcoal, Black, Beige, Tan, Green
const shirtColorsR = ['#ffffff', '#f5f5f5', '#e0e0e0', '#d3d3d3', '#b0b0b0','#fffff0','#000000']; // White, Off-White, Light Gray

document.getElementById('generate-btnR').addEventListener('click', generateOutfit);

function generateOutfit() {
    const suitColorR = randomColor(suitColorsR);
    const suitPantsColorR = randomColor(suitPantsColorsR); // Generate a single color for both Coat and Pants
    const shirtColorR = randomColor(shirtColorsR); // Generate a separate color for the Dress Shirt

    // Set the background color for Coat and Pants to the same color
    document.getElementById('topR').style.backgroundColor = suitColorR;
    document.getElementById('bottomR').style.backgroundColor = suitPantsColorR;

    // Set the background color for the Dress Shirt
    document.getElementById('middleR').style.backgroundColor = shirtColorR;
}

function randomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
