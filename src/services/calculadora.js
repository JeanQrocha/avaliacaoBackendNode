class ServiceCalculadora {
    Somar(num1, num2) {
        if (isNaN(num1), isNaN(num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro + num2Inteiro

        return result / 100;
    }

    Sub(num1, num2) {
        if (isNaN(num1), isNaN(num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro - num2Inteiro

        return result / 100;
    }

    Multiplicar(num1, num2) {
        if (isNaN(num1), isNaN(num2)) {
            throw new Error("Favor informar somente numeros!");

        }
      
        const result = num1 * num2

        return result;
    }

    Dividir(num1, num2) {
        if (isNaN(num1, isNaN(num2))) {
            throw new Error("Favor informar somente numeros!");

        }
       
        const result = num1 / num2

        return result / 100;
    }

    Potencia(num) {
        if (isNaN(num)) {
            throw new Error("Favor informar somente numeros!");

        }

        const result = num * num

        return result;
    }

    Raiz(num) {
        if (isNaN(num)) {
            throw new Error("Favor informar somente numeros!");
        }

        const result = Math.sqrt(num)

        return result;
    }

    operacoes() {
        const result = [
            "Somar dois Números",
            "Subtrair dois Números",
            "Multiplicar dois Números",
            "Dividir dois Números",
            "Potencis de um Número",
            "Raiz quadrada de um Número"
        ]

        return result;
    }



}

export default new ServiceCalculadora()