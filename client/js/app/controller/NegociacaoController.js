class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        //(a1_Ref) this._listaNegociacoes = new ListaNegociacoes(this, function(modelo){
        //     this._negociacoesView.update(modelo);
        // });
        //this._listaNegociacoes = new ListaNegociacoes(modelo => this._negociacoesView.update(modelo));
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));

        
        this._mensagemView.update(this._mensagem);
    }

    _fieldReset(){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    novaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this.novaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso.';
        this._mensagemView.update(this._mensagem);
        this._fieldReset();
        
    }

    limpa(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Lista de Negociações Limpa com Sucesso!';
        this._mensagemView.update(this._mensagem);
    }
}