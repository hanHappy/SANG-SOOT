//img name -> rstrnt

const timeOutsImg = [rstrnt0, rstrnt1, rstrnt2, rstrnt3];

for (let i = 0; i < timeOutsImg.length; i++) {
  //길이는 생성자에서 지정?

  setTimeout(() => {
    this.img = new 000();
    img.src = imgeArray[i];
    document.body.append("");
  }, 1000 * i); //1초간격
}
setTimeout(() => {
  let img1 = document.getElementById("talk00");
  this.#battleStartCtx.drawImage(
    img1,
    this.#imgX,
    this.#imgY,
    this.#imgW,
    this.#imgH
  );
  setTimeout(() => {
    let img2 = document.getElementById("talk01");
    this.#battleStartCtx.drawImage(
      img2,
      this.#imgX,
      this.#imgY,
      this.#imgW,
      this.#imgH
    );
    setTimeout(() => {
      let img3 = document.getElementById("talk01");
      this.#battleStartCtx.drawImage(
        img2,
        this.#imgX,
        this.#imgY,
        this.#imgW,
        this.#imgH
      );
      setTimeout(() => {
        let img4 = document.getElementById("talk01");
        this.#battleStartCtx.drawImage(
          img2,
          this.#imgX,
          this.#imgY,
          this.#imgW,
          this.#imgH
        );
      }, 500);
    }, 1000);
  }, 1000);
}, 10);
