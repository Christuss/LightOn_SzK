import Lampa from "./Lampa.js";

class Jatekter {
    #db;
    #allapotLista = [];
    #meret;
    #lepes;

    constructor () {
        this.#meret = 3;
        this.#db = this.#meret * this.#meret;
        const MAINELEM = $("main");
        for (let index = 0; index < this.#db; index++) {
            let bool = Math.random() < 0.2
            let a = new Lampa(index, bool, MAINELEM);
            this.#setAllapotLista(bool);
        }

        $(window).on("kattintas", (event) => {
            console.log(event.detail);
            this.#szomszedokKeresese(event.detail);
        });
    }

    #setAllapotLista (bool) {
        this.#allapotLista.push(bool);
    }

    #szomszedokKeresese (id) {
        let szomszedok = [] ;
        switch (id) {
            case 0:
                this.#allapotLista[1] = false;
                break;
        
            default:
                break;
        }
    }

    #init() {

    }

    #ellenorzes() {

    }
}

export default Jatekter;