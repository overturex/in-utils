const CM_INCH_RATIO = 2.54;

function cmToInch(valueInCm) {
    return valueInCm / CM_INCH_RATIO;
}

module.exports.cmToInch = cmToInch;