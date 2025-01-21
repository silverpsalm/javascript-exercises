const removeFromArray = function(getArray, ...getFilter) {

    newArray = [];

    for (const item of getArray) {
        // filter match counter
        let filterMatches = 0;

            // add 1 for every match
            for (const filter of getFilter) {
                if (filter === item) {
                    filterMatches += 1;
                } 
            }
        
        if (filterMatches == 0) {
            newArray.push(item);
        }

        filterMatches = 0;
     
        
    }

    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
