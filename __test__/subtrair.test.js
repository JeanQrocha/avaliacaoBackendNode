import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from "../src/services/calculadora.js"


describe('testando função sub', () => {
    it('subtraindo dois numeros positivos', () => {
        const resultado = ServiceCalculadora.Sub(2,1 )
        expect(resultado).toBe(1);
    })

     it('subtraindo dois numeros negativos', () => {
        const resultado = ServiceCalculadora.Sub(-1, -2)
        expect(resultado).toBe(1);
    })
     it('subtraindo dois numeros com casa decimal', () => {
        const resultado = ServiceCalculadora.Sub(1.1, 2.1)
        expect(resultado).toBe(-1);
    })
     it('subtraindo um numero com zero', () => {
        const resultado = ServiceCalculadora.Sub(1, 0)
        expect(resultado).toBe(1);
    })
     it('subtraindo zero com um numero', () => {
        const resultado = ServiceCalculadora.Sub(0, 2)
        expect(resultado).toBe(2);
    })
})