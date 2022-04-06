function datos() {
    let numero = 15;
    let decimal;
    let octal;
    let binario;
    let ecxadecimal;
    let base;
}

function dividiendo(numero, base) {
    let ultimo;
    let binario = " ";
    do {
        ultimo = Math.floor(numero / base);
        ultimo = numero % base;
        numero = ultimo;

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
        numero = ultimo;
        binario = ultimo + binario;
        console.log(binario, " es binario")
    } while (ultimo > 0);
    console.log(" el numero en binario es ==> " + binario);



}

function binarioDecimal(numero, base) {
    let abajo = 2;
    let ultimo = 0;
    let final = " ";
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        ultimo = ultimo * Math.pow(abajo, i);
        numero = Math.floor(numero / 10);
        sumador = sumador + parseInt(ultimo);
    }
    console.log("El numer decimal es " + sumador);
}

function binarioOctal(numero, base) {
    let abajo = 2;
    let ultimo = 0;
    let final = " ";
    let nBinario = numero;
    let hasta = Math.floor(numero.toString().length / 3);
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 1000);
        switch (ultimo) {
            case 000:
                ultimo = 0;
                break;
            case 001:
                ultimo = 1;
                break;
            case 010:
                ultimo = 2;
                break;
            case 011:
                ultimo = 3;
                break;
            case 100:
                ultimo = 4;
                break;
            case 101:
                ultimo = 5;
                break;
            case 110:
                ultimo = 6;
                break;
            case 111:
                ultimo = 7;
                break;

        }
        numero = Math.floor(numero / 1000);
        final = ultimo + final;
    }
    console.log("El numer Binario #" + nBinario + " pasado a Octal es ==>" + final);

}

function binarioHexa(numero, base) {
    numero = numero.trim();

    if (!(numero.toString().length % 4 == 0)) {
        let relleno = 4 - (numero.toString().length % 4);
        for (let i = 0; i < relleno; i++) {
            let agregado = "0";
            numero = agregado.concat(numero);

        }

    }

    let prueba;


    let abajo = 2;
    let ultimo = 0;
    let final = " ";
    let nBinario = numero;
    let a = -4;
    let b = numero.toString().length;
    let hasta = (Math.ceil(numero.toString().length / 4));
    for (let i = 0; i < hasta; i++) {

        prueba = numero.toString().slice(a, b);

        console.log(prueba);
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
    //0000 1111 1101  0 1111 1101
    console.log("El numero Binario #" + nBinario + " pasado a Hexadecimal es ==>" + final);
}

function octalBinario(numero, base) {
    let abajo = 2;
    let ultimo = 0;
    let final = " ";
    let nBinario = numero;
    //154
    // let hasta = Math.floor(numero.toString().length / 3);
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
    console.log("El numero Octal #" + nBinario + " pasado a Binario es ==>" + final);
    return final;
}

function octal_Decimal(numero, base) {
    //412
    let abajo = 8;
    let ultimo = 0;
    let final = " ";
    let sumador = 0;
    let hasta = numero.toString().length;
    for (let i = 0; i < hasta; i++) {
        let ultimo = (numero % 10);
        ultimo = ultimo * Math.pow(abajo, i);
        numero = Math.floor(numero / 10);
        sumador = sumador + parseInt(ultimo);
    }
    console.log("El numer decimal es " + sumador);

}

function octal_Hexadecimal(numero, base) {
    binarioHexa(octalBinario(numero, 4));
    //0 1111 1101 
}

function hexa_Binario(numero, base) {
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
                ultimo = "0001";
                break;
            case "2":
                ultimo = "0010";
                break;
            case "3":
                ultimo = "0011";
                break;
            case "4":
                ultimo = "0100";
                break;
            case "5":
                ultimo = "0101";
                break;
            case "6":
                ultimo = "0110";
                break;
            case "7":
                ultimo = "0111";
                break;
            case "8":
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
    console.log("El número Hexadecimal #" + nBinario + " pasado a Binario es ==>" + final);
    return final;
}

function hexa_Decimal(numero, base) {
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
    console.log("El número Hexadecimal #" + nBinario + " pasado a Binario es ==>" + sumador);
    return final;
}