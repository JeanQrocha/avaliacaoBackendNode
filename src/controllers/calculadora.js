import ServiceCalculadora from "../services/calculadora.js";

class ControllerCalculadora {

    calculadoraSomar(req, res) {
        try {
            const { num1, num2 } = req.body


            const result = ServiceCalculadora.Somar(num1, num2);

            res.status(200).send({ data: { result } })

        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }
    calculadoraSub(req, res) {
        try {
            const { num1, num2 } = req.body


            const result = ServiceCalculadora.Sub(num1, num2);

            res.status(200).send({ data: { result } })

        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }
    calculadoraMult(req, res) {
        try {
            const { num1, num2 } = req.body


            const result = ServiceCalculadora.Multiplicar(num1, num2);

            res.status(200).send({ data: { result } })

        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }

    calculadoraDiv(req, res) {
        try {
            const {num1, num2} = req.body


            const result = ServiceCalculadora.Dividir(num1, num2);

            res.status(200).send({ data: { result } })

        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }

    calculadoraPotencia(req, res) {
        try {
            const {num1, num2} = req.body


            const result = ServiceCalculadora.Potencia(num1, num2);

            res.status(200).send({ data: { result } })

        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }



}

export default new ControllerCalculadora()