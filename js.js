function datos() {
    let numero = 15;
    let decimal;
    let octal;
    let binario;
    let ecxadecimal;
    let base;
}

function dividiendo(numero, base) {
    let resultado;
    let resto;
    let binario = " ";
    do {
        resultado = Math.floor(numero / base);
        resto = numero % base;
        numero = resultado;

        if (base == 16) {
            switch (resto) {
                case 10:
                    resto = "A";
                    break;
                case 11:
                    resto = "B";
                    break;
                case 12:
                    resto = "C";
                    break;
                case 13:
                    resto = "D";
                    break;
                case 14:
                    resto = "E";
                    break;
                case 15:
                    resto = "F";
                    break;
                case 16:
                    resto = "A";
                    break;

            }

        }
        numero = resultado;
        binario = resto + binario;
        console.log(binario, " es binario")
    } while (resultado > 0);
    console.log(" el numero en binario es ==> " + binario);



}

function binarioDecimal(numero, base) {
    let abajo = 2;
    let resultado = 0;
    let final = " ";
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        resultado = ultimo * Math.pow(abajo, i);
        numero = Math.floor(numero / 10);
        sumador = sumador + parseInt(resultado);
    }
    console.log("El numer decimal es " + sumador);
}

function binarioOctal(numero, base) {
    let abajo = 2;
    let resultado = 0;
    let final = " ";
    let nBinario = numero;
    let hasta = Math.floor(numero.toString().length / 3);
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 1000);
        switch (ultimo) {
            case 000:
                resultado = 0;
                break;
            case 001:
                resultado = 1;
                break;
            case 010:
                resultado = 2;
                break;
            case 011:
                resultado = 3;
                break;
            case 100:
                resultado = 4;
                break;
            case 101:
                resultado = 5;
                break;
            case 110:
                resultado = 6;
                break;
            case 111:
                resultado = 7;
                break;

        }
        numero = Math.floor(numero / 1000);
        final = resultado + final;
    }
    console.log("El numer Binario #" + nBinario + " pasado a Octal es ==>" + final);

}

function binarioHexa(numero, base) {
    numero = numero.trim();
    let a = -4;
    let b = numero.toString().length;
    if (!(numero.toString().length % 4 == 0)) {
        let relleno = 4 - (numero.toString().length % 4);
        for (let i = 1; i < relleno; i++) {

            numero.slice(0, relleno) + "0";

        }
        console.log(numero + "////////");

    }

    let prueba;


    let abajo = 2;
    let resultado = 0;
    let final = " ";
    let nBinario = numero;
    let hasta = (Math.ceil(numero.toString().length / 4));
    for (let i = 0; i < hasta; i++) {

        prueba = numero.toString().slice(a, b);
        console.log(typeof prueba);
        switch (prueba.toString()) {
            case "0000" || "0":
                resultado = 0;
                break;
            case "0001":
                resultado = 1;
                break;
            case "0010":
                resultado = 2;
                break;
            case "0011":
                resultado = 3;
                break;
            case "0100":
                resultado = 4;
                break;
            case "0101":
                resultado = 5;
                break;
            case "0110":
                resultado = 6;
                break;
            case "0111":
                resultado = 7;
                break;
            case "1000":
                resultado = 8;
                break;
            case "1001":
                resultado = 9;
                break;
            case "1010":
                resultado = "A";
                break;
            case "1011":
                resultado = "B";
                break;
            case "1100":
                resultado = "C";
                break;
            case "1101":
                resultado = "D";
                break;
            case "1110":
                resultado = "E";
                break;
            case "1111":
                resultado = "F";
                break;
        }
        final = resultado + final;
        a = (a - 4);
        b = b - 4;
    }
    console.log("El numero Binario #" + nBinario + " pasado a Hexadecimal es ==>" + final);
}

function octalBinario(numero, base) {
    let abajo = 2;
    let resultado = 0;
    let final = " ";
    let nBinario = numero;
    //154
    // let hasta = Math.floor(numero.toString().length / 3);
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        switch (ultimo) {
            case 0:
                resultado = "000";
                break;
            case 1:
                resultado = "001";
                break;
            case 2:
                resultado = "010";
                break;
            case 3:
                resultado = "011";
                break;
            case 4:
                resultado = "100";
                break;
            case 5:
                resultado = "101";
                break;
            case 6:
                resultado = "110";
                break;
            case 7:
                resultado = "111";
                break;

        }
        numero = Math.floor(numero / 10);
        final = resultado + final;
    }
    console.log("El numero Octal #" + nBinario + " pasado a Binario es ==>" + final);
    return final;
}

function octalDecimal(numero, base) {
    //412
    let abajo = 8;
    let resultado = 0;
    let final = " ";
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        resultado = ultimo * Math.pow(abajo, i);
        numero = Math.floor(numero / 10);
        sumador = sumador + parseInt(resultado);
    }
    console.log("El numer decimal es " + sumador);

}

function octalHexadecimal(numero, base) {
    binarioHexa(octalBinario(numero, 4));
    //0 1111 1101 
}