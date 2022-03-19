//conversion


function verification(valeur) {
    if ( (Number.isInteger(valeur))) {
        return valeur;
    }
    else{
        return null;
    }
}

function conversion(valeur) {
    
    let celsius = verification(valeur);

    if (celsius != null) {
        let fahrenheit = (valeur * (9/5) +32 );
    }
    
    return fahrenheit
}

