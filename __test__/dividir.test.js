import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from "../src/services/calculadora.js"

describe('testando função dividir', () => {
    it('dividindo dois numeros positivos', () => {
        const resultado = ServiceCalculadora.Dividir(2, 1)
        expect(resultado).toBe(1);
    })

     it('dividindo dois numeros negativos', () => {
        const resultado = ServiceCalculadora.Dividir(2,1 )
        expect(resultado).toBe(2);
    })
     it('dividindo dois numeros com casa decimal', () => {
        const resultado = ServiceCalculadora.Dividir(1.1, 1.1)
        expect(resultado).toBe(0.01);
    })
   
})

