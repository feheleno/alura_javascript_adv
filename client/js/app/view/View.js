class View {
    constructor(elemento){
        this._elemento = elemento;
    }

    template(modelo){
        throw new Error('método template não implementado.');
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }
}