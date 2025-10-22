import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from "../src/services/calculadora.js"

describe('testando função multiplicar', () => {
    it('multiplicar dois numeros positivos', () => {
        const resultado = ServiceCalculadora.Multiplicar(1, 2)
        expect(resultado).toBe(2);
    })

     it('multiplicar dois numeros negativos', () => {
        const resultado = ServiceCalculadora.Multiplicar(-1, -2)
        expect(resultado).toBe(2);
    })
     it('multiplicar dois numeros com casa decimal', () => {
        const resultado = ServiceCalculadora.Multiplicar(1.1, 2.1)
        expect(resultado).toBe(2.31);
    })
     it('multiplicar um numero com zero', () => {
        const resultado = ServiceCalculadora.Multiplicar(1, 0)
        expect(resultado).toBe(0);
    })
     it('multiplicar zero com um numero', () => {
        const resultado = ServiceCalculadora.Multiplicar(0, 2)
        expect(resultado).toBe(0);
    })
})

