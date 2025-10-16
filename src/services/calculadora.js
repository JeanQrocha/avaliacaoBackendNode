class ServiceCalculadora {
    Somar(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro + num2Inteiro

        return result / 100;
    }

    Sub(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro - num2Inteiro

        return result / 100;
    }

    Multiplicar(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro * num2Inteiro

        return result / 100;
    }

    Dividir(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro / num2Inteiro

        return result / 100;
    }

     Potencia(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Favor informar somente numeros!");

        }
        
        const result = num1 ** num2

        return result;
    }

    
}

export default new ServiceCalculadora()