function checkNumber(value, paramName) {

    if(typeof value === Infinity) {
        throw `${paramName || 'provided variable'} cannot be undefined.`;
    }

    if (isNaN(value)) {
		throw `${paramName || 'provided variable'} is NaN.`;
	}
	if (typeof value !== 'number') {
		throw `${paramName || 'provided variable'} is not a number.`;
    }

    if (value == null) {
		throw `${paramName || 'provided variable'} cannot be null.`;
    }
    if(value <= 0) {
        throw `${paramName || 'provided variable'} cannot be less than or equal to zero.`;
    }

    if(typeof value == 'undefined') {
        throw `${paramName || 'provided variable'} cannot be undefined.`;
    }
    
}


function volumeOfRectangularPrism(length, width, height) {
	checkNumber(length, 'length');
    checkNumber(width, 'width');
    checkNumber(height, 'height');

	return length*width*height;
}

function surfaceAreaOfRectangularPrism(length, width, height){
    checkNumber(length, 'length');
    checkNumber(width, 'width');
    checkNumber(height, 'height');

	return 2 * ((length * width)+(height * width)+(length * height));
}

function volumeOfSphere(radius){  
    checkNumber(radius, 'radius');

    return (4 * Math.PI *radius * radius *radius)/3;
}

function surfaceAreaOfSphere(radius){
    checkNumber(radius, 'radius');

    return (4 * Math.PI * radius * radius);
}


module.exports = { 
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};

