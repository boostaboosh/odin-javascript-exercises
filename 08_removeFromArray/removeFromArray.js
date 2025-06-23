let removeElement = function removeAllInstancesOfElementFromArray (array, elementToRemove) {
    for ( let index = 0; index < array.length; index ++ ) {
        if ( array[index] === elementToRemove ) {
            array.splice( index, 1 );
        }
    }
}

const removeFromArray = function(array, ...theElementsToRemove) {
    for ( let elementToRemoveFromArray of theElementsToRemove) { 
        removeElement(array, elementToRemoveFromArray);
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
