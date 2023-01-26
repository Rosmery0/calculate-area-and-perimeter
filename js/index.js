'use strict'
// Inputs
const sidesInputTriangle = document.getElementById("sidesInputTriangle");
const sidesInputSquare = document.getElementById("sidesInputSquare");
const diameterInputCircle = document.getElementById("diameterInputCircle");
const baseInputRectangle = document.getElementById("baseInputRectangle");
const heightInputRectangle = document.getElementById("heightInputRectangle");

// Spans
const spanTriangleArea = document.getElementById("triangleArea");
const spanTrianglePerimeter = document.getElementById("trianglePerimeter");
const spanSquareArea = document.getElementById("squareArea");
const spanSquarePerimeter = document.getElementById("squarePerimeter");
const spanCircleArea = document.getElementById("circleArea");
const spanCirclePerimeter = document.getElementById("circlePerimeter");
const spanRectangleArea = document.getElementById("rectangleArea");
const spanRectanglePerimeter = document.getElementById("rectanglePerimeter");

// P Error
const pTriangleError = document.getElementById("pTriangleError");
const pSquareError = document.getElementById("pSquareError");
const pRectangleError = document.getElementById("pRectangleError");
const pCircleError = document.getElementById("pCircleError");

// Calculate triangle area and perimeter function
const calculateTriangleArea = () => {
    if(sidesInputTriangle.value <= 0 || isNaN(sidesInputTriangle.value)) {
        pTriangleError.className = "error";
    } else {
        let area = sidesInputTriangle.value * 3;
        let h = Math.sqrt(sidesInputTriangle.value**2 - (sidesInputTriangle.value/2)**2);
        let perimeter = (sidesInputTriangle.value * h).toFixed(2);

        spanTriangleArea.innerHTML = `${area}cm`;
        spanTrianglePerimeter.innerHTML = `${perimeter}cm`;

        pTriangleError.className = "blind";
    }
}

// Calculate square area and perimeter function
const calculateSquareArea = () => {
    if(sidesInputSquare.value <= 0 || isNaN(sidesInputSquare.value)){
        pSquareError.className = "error";
    } else {
        let perimeter = sidesInputSquare.value * 4;
        let area = sidesInputSquare.value ** 2;

        spanSquareArea.innerHTML = `${area}cm`;
        spanSquarePerimeter.innerHTML = `${perimeter}cm`;

        pSquareError.className = "blind";
    }
}

// Calculate rectangle area and perimeter function
const calculateRectangleArea = () => {
    if(baseInputRectangle.value <= 0 || heightInputRectangle.value <= 0 || isNaN(baseInputRectangle.value) || isNaN(heightInputRectangle.value)){
        pRectangleError.className = "error";
    } else {
        let area = baseInputRectangle.value * heightInputRectangle.value;
        let perimeter = (heightInputRectangle.value * 2) + (baseInputRectangle.value * 2);

        spanRectangleArea.innerHTML = `${area}cm`;
        spanRectanglePerimeter.innerHTML = `${perimeter}cm`;

        pRectangleError.className = "blind";
    }
}

// Calculate circle area and perimeter function
const calculateCircleArea = () => {
    if(diameterInputCircle.value <= 0 || isNaN(diameterInputCircle.value)) {
        pCircleError.className = "error";
    } else {
        let area = (Math.PI * ((diameterInputCircle.value / 2) ** 2)).toFixed(2);
        let perimeter = (diameterInputCircle.value * Math.PI).toFixed(2);
        
        spanCircleArea.innerHTML = `${area}cm`;
        spanCirclePerimeter.innerHTML = `${perimeter}cm`;

        pCircleError.className = "blind";
    }
}