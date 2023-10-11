    
    class Animal {
        constructor(nome) {
        this.nome = nome;
        }
        fazerBarulho() {
        throw new Error("Método fazerBarulho deve ser implementado nas classes filhas.");
        }
    }
    
    
    class Cachorro extends Animal {
        fazerBarulho() {
        return `${this.nome} faz au au!`;
        }
    }
    
    
    class Gato extends Animal {
        fazerBarulho() {
        return `${this.nome} faz miau!`;
        }
    }
    
    
    const cachorro1 = new Cachorro("Rex");
    const gato1 = new Gato("Mittens");
    const cachorro2 = new Cachorro("Buddy");
    
    
    console.log(cachorro1.fazerBarulho());
    console.log(gato1.fazerBarulho());
    console.log(cachorro2.fazerBarulho());