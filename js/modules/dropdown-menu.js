import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropdownMenu, event) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenu);
    //define touchstart e click como argumento padrão
    //de events caso o usuario não define
    if (event === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = event;
    }

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdownmenu e adiciona
  //a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  //adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
