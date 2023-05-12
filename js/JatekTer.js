import Lampa from "./Lampa.js";
import InfoPanel from "./InfoPanel.js";

class Jatekter {
    #db;
    #allapotLista = [];
    #meret;
    #lepes;

    constructor() {
        this.#meret = 3;
        this.#db = this.#meret * this.#meret;
        const MAINELEM = $("main");
        for (let index = 0; index < this.#db; index++) {
            let bool = Math.random() < 0.2
            let a = new Lampa(index, bool, MAINELEM);
            this.#setAllapotLista(bool);
        }
        new InfoPanel(MAINELEM);

        $(window).on("kattintas", (event) => {
            this.#szomszedokKeresese(event.detail);
            if (event.detail == false) {
                this.#allapotLista[event.detail] = true;
            } else {
                this.#allapotLista[event.detail] = false;
            }
            if (this.#ellenorzes() == 0) {
                MAINELEM.html("<p>Nyertél</p><button>Új játék</button>");
            }
        });

    }

    #setAllapotLista(bool) {
        this.#allapotLista.push(bool);
    }

    #szomszedokKeresese(id) {

        console.log(id);
    }

    #init() {
        this();
    }

    #ellenorzes() {
        let db = 0;
        for (let index = 0; index <= this.#allapotLista.length; index++) {
            if (this.#allapotLista[index] === true) {
                db++;
            }

        }
        return db;
    }
}

export default Jatekter;