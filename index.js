//conversion


function verification(valeur) {
    console.log(valeur)
    
    let exp = new RegExp("^[0-9]+$","g");

    if (exp.test(valeur)) {
        return valeur;
    }
    else
    {
        return null;
    }

    
}

function conversion(valeur) {
    
    let celsius = verification(valeur);
    console.log(celsius)
    let fahrenheit = null;

    if (celsius != null) {
        let fahrenheit = (valeur * (9/5) +32 );
        console.log(fahrenheit)
    }
    
    return fahrenheit
}

function main() {
    let valeur = document.getElementById("InputConv").value;
    
    conversion(valeur);
}
