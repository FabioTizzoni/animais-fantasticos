export default class AnimaNumeros {
  constructor(numero, obsTarget, observerClass) {
    this.numeros = document.querySelectorAll(numero);
    this.observerTarget = document.querySelector(obsTarget);
    this.observerClass = observerClass;

    //bind do this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do dom, com numero em seu texto
  //incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  //ativa incremento numero para cada
  //numero selecionado no dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  //função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  //adiciona a mutation para verificar
  //quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
