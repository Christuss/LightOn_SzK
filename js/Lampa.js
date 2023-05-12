class Lampa {
    #allapot;
    #id;
    #divElem;

    constructor(id, allapot, szuloElem) {
        this.#id = id;
        this.#allapot = allapot;
        let txt;
        if (allapot) {
            txt = '<div class = "zold" id = "' + this.#id + '"></div>';
        } else {
            txt = '<div class = "piros" id = "' + this.#id + '"></div>';
        }
        szuloElem.append(txt);
        this.#divElem = $("main div:last-child");

        this.#divElem.on("click", (event) => {
            this.#kattintasTrigger();
            this.setAllapot();
            this.#szinBeallit();
        })
        
    }

    setAllapot() {
        if (this.#allapot) {
            this.#allapot = false;
        } else {
            this.#allapot = true;
        }
    }

    #szinBeallit() {
        if (this.#divElem.attr("class") === "zold") {
            this.#divElem.attr("class", "piros");
        } else {
            this.#divElem.attr("class", "zold");
        }
    }

    #kattintasTrigger() {
        const EVENT = new CustomEvent("kattintas", { detail: this.#id });
        window.dispatchEvent(EVENT);

    }
}

export default Lampa;