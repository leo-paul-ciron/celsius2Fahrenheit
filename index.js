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
        fahrenheit = (valeur * (9/5) +32 );
       
    }
    
    document.getElementById("value_affiche").innerHTML = fahrenheit;
    return fahrenheit
}

function main() {
    let valeur = document.getElementById("InputConv").value;
    
    let fahrenheit = conversion(valeur);

   
}
