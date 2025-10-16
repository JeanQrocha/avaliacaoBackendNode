import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from "../src/services/calculadora.js"

describe('testando função somar', () => {
    it('somando dois numeros positivos', () => {
        const resultado = ServiceCalculadora.Somar(1, 2)
        expect(resultado).toBe(3);
    })

     it('somando dois numeros negativos', () => {
        const resultado = ServiceCalculadora.Somar(-1, -2)
        expect(resultado).toBe(-3);
    })
     it('somando dois numeros com casa decimal', () => {
        const resultado = ServiceCalculadora.Somar(1.1, 2.1)
        expect(resultado).toBe(3.2);
    })
     it('somando um numero com zero', () => {
        const resultado = ServiceCalculadora.Somar(1, 0)
        expect(resultado).toBe(1);
    })
     it('somando zero com um numero', () => {
        const resultado = ServiceCalculadora.Somar(0, 2)
        expect(resultado).toBe(2);
    })
})

