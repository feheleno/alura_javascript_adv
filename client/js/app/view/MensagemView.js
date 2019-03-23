class MensagemView extends View {
    constructor(elemento){
        super(elemento);
    }

    template(modelo){
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : '<p></p>';
    }

    update(modelo){
        this._elemento.innerHTML = this.template(modelo);
    }
}