const fs = require('fs');

// Function to decode a value based on the given base
function decodeBase(value, base) {
    return parseInt(value, base);
}

// Function to apply Lagrange interpolation and find the constant term (c)
function lagrangeInterpolation(points) {
    let constant = 0;

    for (let i = 0; i < points.length; i++) {
        const [x_i, y_i] = points[i];
        let term = y_i;

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const [x_j] = points[j];
                term *= x_j / (x_j - x_i);
            }
        }

        constant += term;
    }

    return Math.round(constant);
}

// Function to parse the input and solve for the constant term
function solvePolynomial(filename) {
    try {
        const data = fs.readFileSync(filename);
        const input = JSON.parse(data);

        const { n, k } = input.keys;
        let points = [];

        // Decode each root and store as (x, y)
        Object.keys(input).forEach(key => {
            if (!isNaN(key)) {
                const base = parseInt(input[key].base, 10);
                const value = input[key].value;
                const x = parseInt(key, 10);
                const y = decodeBase(value, base);

                points.push([x, y]);
            }
        });

        // Ensure we have enough points to calculate the polynomial
        if (points.length < k) {
            throw new Error(`Not enough points to calculate the polynomial. Expected: ${k}, Found: ${points.length}`);
        }

        // Only use the first k points to solve the polynomial
        const requiredPoints = points.slice(0, k);

        // Calculate the constant term using Lagrange interpolation
        const constantTerm = lagrangeInterpolation(requiredPoints);

        console.log(`The secret constant term (c) from ${filename} is: ${constantTerm}`);
    } catch (error) {
        console.error(`Error processing ${filename}: ${error.message}`);
    }
}

// Run the solver with the JSON test cases
const testCases = ['testcase.json', 'testcase2.json'];
testCases.forEach(file => solvePolynomial(file));
