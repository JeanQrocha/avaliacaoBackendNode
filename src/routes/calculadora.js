import express from "express"
import ControllerCalculadora from "../controllers/calculadora.js"



const router = express.Router()


router.get('/op', ControllerCalculadora.operacoes)

router.post('/Somar', ControllerCalculadora.calculadoraSomar)

router.post('/Sub', ControllerCalculadora.calculadoraSub)

router.post('/Multplicar', ControllerCalculadora.calculadoraMult)

router.post('/Dividir', ControllerCalculadora.calculadoraDiv)

router.post('/Pot', ControllerCalculadora.calculadoraPotencia)

router.post('/Raiz', ControllerCalculadora.calculadoraRaiz)

export default router