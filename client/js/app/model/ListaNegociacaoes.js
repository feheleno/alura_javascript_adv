/* Legendas:
 * a1_Ref - O this de uma função é dinâmico, isto é, seu valor é determinado no momento em que a função é chamada. 
            Como o this é dinâmico, é possível usar artifícios da linguagem, como a API Reflect, para alterá-lo se 
            assim desejarmos. O this de uma arrow function é léxico, isto é, seu valor é determinado no local onde 
            a arrow function for definida, ela não cria um novo this. O this de uma arrow function não pode ser 
            alterado, mesmo se usarmos recursos da linguagem, como a API Reflect.

*/
class ListaNegociacoes {
    
    //(a1_Ref)constructor(contexto, armadilha) {
        constructor() {
        this._negociacoes = [];
        //this._contexto = contexto;
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        //(a1_Ref)Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    esvazia(){
        this._negociacoes = [];
        //(a1_Ref)Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}