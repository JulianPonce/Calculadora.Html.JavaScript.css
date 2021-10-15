class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.tiposOperaciones = undefined;
        this.valorActual = ' ';
        this.valorAnterior = ' ';


    }
    borrar() {

        this.valorActual = this.valorActual.toString().slice(0, -1)
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tiposOperaciones = undefined;
        this.imprimirValores();

    }
    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
    calcular() {
        this.valorActual = parseFloat(this.valorActual);
        this.valorAnterior = parseFloat(this.valorAnterior);

        if (isNaN(this.valorActual) || isNaN(this.valorAnterior)) return
        this.valorActual = this.calculadora

    }
}