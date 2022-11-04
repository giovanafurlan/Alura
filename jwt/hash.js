import { createHash } from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('Uma string qualquer'));

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado com sucesso");
            return true;
        }
        console.log("Usuário ou senha incorretos");
        return false;
    }
}

const usuario = new Usuario('Giovana Furlan', 'minhaSenha');
console.log(usuario);

usuario.autentica('Giovana Furlan', 'minhaSenha');

usuario.autentica('Giovana Furlan', 'MinhaSenha');