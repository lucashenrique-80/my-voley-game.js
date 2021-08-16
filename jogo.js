module.exports = class jogo{
    constructor(data, hora, local){
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.sets = [];
    }
    infor(){
        console.log(' o jogo acontece em ' + this.data + ' as ' + this.data + ' em ' + this.local);
    }
}