export default class Modal {
  constructor(btnAbrir, btnFechar, cntModal) {
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(cntModal);
    //bind this ao callback
    //fazer referencia ao objeto
    //da classe
    this.eventToogleModal = this.eventToogleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  //adiciona o efeito de toogle ao modal
  eventToogleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha ao clicar no modal do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  //adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToogleModal);
    this.botaoFechar.addEventListener("click", this.eventToogleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
