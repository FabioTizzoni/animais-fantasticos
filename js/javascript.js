import ScrollSuave from "./js/modules/scroll-suave.js";
import Accordion from "./js/modules/accordion.js";
import TabNav from "./js/modules/tabnav.js";
import Modal from "./js/modules/modal.js";
import Tooltip from "./js/modules/tooltip.js";
import ScrollAnima from "./js/modules/scroll-anima.js";
import DropDownMenu from "./js/modules/dropdown-menu.js";
import MenuMobile from "./js/modules/menu-mobile.js";
import Funcionamento from "./js/modules/funcionamento.js";
import fetchAnimais from "./js/modules/fetch-animais.js";
import fetchBitcoin from "./js/modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropDownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
