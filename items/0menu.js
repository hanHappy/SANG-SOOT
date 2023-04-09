export default class Menu {
    #posX;
    #posY;
    #rstIndex;

    constructor() {
        this.#posX = RestaurantCanvas.x;
        this.#posY = RestaurantCanvas.y;
        this.#rstIndex = 0;

        // 식당
        let posX = RestaurantCanvas.x;
        let posY = RestaurantCanvas.y;

        if (posX == 440 && posY == 316)
            this.#rstIndex = 0;
        if (posX == 647 && posY == 316)
            this.#rstIndex = 1;
        if (posX == 850 && posY == 316)
            this.#rstIndex = 2;
        if (posX == 440 && posY == 520)
            this.#rstIndex = 3;
        if (posX == 647 && posY == 520)
            this.#rstIndex = 4;
        if (posX == 850 && posY == 520)
            this .#rstIndex = 5;

        this.#rstrnt = TownCanvas.rstrnts[this.#rstIndex];

    }
}