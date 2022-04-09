var resultado = document.getElementById(('numResultado'));
let btnConvertir = document.getElementById('btnConvert');
let btnBorrar = document.getElementById('btnClear');

function operaciones() {
    let opcionBase;
    let baseInicial;
    let baseFinal;
    let numero = document.getElementById('numIngresado').value;
    baseInicial = (document.getElementById('bases').value);
    baseFinal = (document.getElementById('basesResultado').value);
    let nameMetodo = baseInicial.concat(baseFinal);
    selectFunciones(nameMetodo, numero)
}

function selectFunciones(opcion, numero) {
    let resultado;
    switch (opcion) {

        case "12":
            resultado = binarioOctal(numero)
            break;
        case "13":
            resultado = binarioDecimal(numero)
            break;
        case "14":
            resultado = binarioHexa(numero)
            break;
        case "21":
            resultado = octalBinario(numero)
            break;
        case "23":
            resultado = octalDecimal(numero)
            break;
        case "24":
            resultado = octalHexadecimal(numero)
            break;
        case "31":
            resultado = decimalAx(parseInt(numero), 2)
            break;
        case "32":
            resultado = decimalAx(parseInt(numero), 8)
            break;
        case "34":
            resultado = decimalAx(parseInt(numero), 16)

            break;
        case "41":
            resultado = hexaBinario(numero)
            break;
        case "42":
            resultado = hexaOctal(numero)
            break;
        case "43":
            resultado = hexaDecimal(numero)
            break;
    }
    console.log(opcion)
    if (opcion == 11 || opcion == 22 || opcion == 33 || opcion == 44) {
        resultado = "Las Bases son las mismas";

    }

    document.getElementById(('numResultado')).value = resultado;
}

function relleno(numero, cant) {
    if (!(numero.toString().length % cant == 0)) {
        let relleno = cant - (numero.toString().length % cant);
        for (let i = 0; i < relleno; i++) {
            let agregado = "0";
            numero = agregado.concat(numero);
        }
    }
    return numero
}

function sacarCaracteres(numero, cantidad, end) {
    return numero.slice(cantidad, end);

}

function decimalAx(numero, base) {
    let ultimo;
    let binario = "";
    let sigDividendo;
    let resto;
    let resultado;
    do {
        sigDividendo = Math.floor(numero / base);
        ultimo = numero % base;
        numero = sigDividendo;

        if (base == 16) {
            switch (ultimo) {
                case 10:
                    ultimo = "A";
                    break;
                case 11:
                    ultimo = "B";
                    break;
                case 12:
                    ultimo = "C";
                    break;
                case 13:
                    ultimo = "D";
                    break;
                case 14:
                    ultimo = "E";
                    break;
                case 15:
                    ultimo = "F";
                    break;
                case 16:
                    ultimo = "A";
                    break;

            }

        }
        //numero = ultimo;
        binario = ultimo + binario;
        // console.log(binario, " es binario")
    } while (numero > 0);
    console.log(" el numero en binario es ==> " + binario);
    // document.getElementById('numResultado').value = binario

    return binario;


}

function binarioOctal(numero) {
    numero = numero.trim();
    let nBinario = numero;
    numero = relleno(numero, 3)
    let a = -3;
    let b = numero.length;
    let ultimo = 0;
    let final = " ";
    let hasta = Math.ceil(numero.length / 3)
    for (let i = 0; i < hasta; i++) {
        ultimo = sacarCaracteres(numero, a, b);
        switch (ultimo) {
            case "000":
                ultimo = 0;
                break;
            case "001":
                ultimo = 1;
                break;
            case "010":
                ultimo = 2;
                break;
            case "011":
                ultimo = 3;
                break;
            case "100":
                ultimo = 4;
                break;
            case "101":
                ultimo = 5;
                break;
            case "110":
                ultimo = 6;
                break;
            case "111":
                ultimo = 7;
                break;

        }
        final = ultimo + final;
        a += -3;
        b += -3;
    }
    console.log("El número Binario #" + nBinario + " pasado a Octal es ==>" + final);
    return final
}

function binarioDecimal(numero) {
    let abajo = 2;
    let nBinario = numero;
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        ultimo = ultimo * Math.pow(abajo, i);
        numero = Math.floor(numero / 10);
        sumador = sumador + parseInt(ultimo);
    }
    console.log("El número Binario #" + nBinario + " pasado a Decimal es ==>" + sumador);
    return sumador
}

function binarioHexa(numero) {
    numero = numero.trim();
    let nBinario = numero;
    numero = relleno(numero, 4)
    let prueba;
    let abajo = 2;
    let ultimo = 0;
    let final = " ";
    let a = -4;
    let b = numero.toString().length;
    let hasta = (Math.ceil(numero.length / 4));
    for (let i = 0; i < hasta; i++) {
        prueba = sacarCaracteres(numero, a, b);
        switch (prueba.toString()) {
            case "0000":
                ultimo = 0;
                break;
            case "0001":
                ultimo = 1;
                break;
            case "0010":
                ultimo = 2;
                break;
            case "0011":
                ultimo = 3;
                break;
            case "0100":
                ultimo = 4;
                break;
            case "0101":
                ultimo = 5;
                break;
            case "0110":
                ultimo = 6;
                break;
            case "0111":
                ultimo = 7;
                break;
            case "1000":
                ultimo = 8;
                break;
            case "1001":
                ultimo = 9;
                break;
            case "1010":
                ultimo = "A";
                break;
            case "1011":
                ultimo = "B";
                break;
            case "1100":
                ultimo = "C";
                break;
            case "1101":
                ultimo = "D";
                break;
            case "1110":
                ultimo = "E";
                break;
            case "1111":
                ultimo = "F";
                break;
        }
        final = ultimo + final;
        a = (a - 4);
        b = b - 4;
    }
    console.log("El número Binario #" + nBinario + " pasado a Hexadecimal es ==> " + final);
    return final;
}

function octalBinario(numero) {
    let abajo = 2;
    let final = " ";
    let nEntrada = numero;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        switch (ultimo) {
            case 0:
                ultimo = "000";
                break;
            case 1:
                ultimo = "001";
                break;
            case 2:
                ultimo = "010";
                break;
            case 3:
                ultimo = "011";
                break;
            case 4:
                ultimo = "100";
                break;
            case 5:
                ultimo = "101";
                break;
            case 6:
                ultimo = "110";
                break;
            case 7:
                ultimo = "111";
                break;

        }
        numero = Math.floor(numero / 10);
        final = ultimo + final;
    }
    console.log("El número Octal #" + nEntrada + " pasado a Binario es ==>" + final);
    return final;
}

function octalDecimal(numero) {
    let abajo = 8;
    let nEntrada = numero;
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        ultimo = ultimo * Math.pow(abajo, i);
        numero = Math.floor(numero / 10);
        sumador = sumador + parseInt(ultimo);
    }
    console.log("El número Octal #" + nEntrada + " pasado a Decimal es ==>" + sumador);
    return sumador
}

function octalHexadecimal(numero) {
    let final = binarioHexa(octalBinario(numero));
    console.log("El número Octal #" + numero + " pasado a Hexadecimal es ==> " + final);
    return final
}

function hexaBinario(numero) {
    let inicio = -1;
    let end = numero.length;
    let ultimo = 0;
    let final = " ";
    let nBinario = numero;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = numero.slice(inicio, end);
        switch (ultimo) {
            case "0":
                ultimo = "0000";
                break;
            case "1":
            case "2":
                ultimo = "0010";
                break;
            case "3":
                ultimo = "0011";
                break;
            case "4":
                ultimo = "0100";
                break;
                ultimo = "0101";
                break;
            case "6":
                ultimo = "0110";
                break;
            case "7":
                ultimo = "0111";
                break;
                ultimo = "1000";
                break;
            case "9":
                ultimo = "1001";
                break;
            case "A":
                ultimo = "1010";
                break;
            case "B":
                ultimo = "1011";
                break;
            case "C":
                ultimo = "1100";
                break;
            case "D":
                ultimo = "1101";
                break;
            case "E":
                ultimo = "1110";
                break;
            case "F":
                ultimo = "1111";
                break;



        }
        inicio--;
        end--;
        final = ultimo + final;
    }
    final = parseInt(final);
    final = final.toString();
    console.log("El número Hexadecimal #" + nBinario + " pasado a Binario es ==>" + final);
    return final;

}

function hexaOctal(numero) {
    console.log(typeof numero)
    return binarioOctal(hexaBinario(numero));
    //0110 1111 0101 
    //resultado 3365
}

function hexaDecimal(numero) {
    let inicio = -1;
    let end = numero.length;
    let abajo = 16;
    let nBinario = numero;
    let ultimo = 0;
    let final = " ";
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = numero.slice(inicio, end);

        switch (ultimo) {

            case "A":
                ultimo = "10";
                break;
            case "B":
                ultimo = "11";
                break;
            case "C":
                ultimo = "12";
                break;
            case "D":
                ultimo = "13";
                break;
            case "E":
                ultimo = "14";
                break;
            case "F":
                ultimo = "15";
                break;



        }

        ultimo = ultimo * Math.pow(abajo, i);

        inicio--;
        end--;
        sumador = sumador + parseInt(ultimo);
    }
    console.log("El número Hexadecimal #" + nBinario + " pasado a Decimal es ==>" + sumador);
    return sumador;
}