import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuBotao, menuLista, event) {
    this.menuButton = document.querySelector(menuBotao);
    this.menuList = document.querySelector(menuLista);
    this.activeClass = "active";

    //define touchstart e click como argumento padrão
    //de events caso o usuario não define
    if (event === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = event;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
