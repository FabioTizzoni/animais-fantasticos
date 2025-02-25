export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (10 / bitcoin.BRL.buy).toFixed(6);
    })
    .catch((erro) => console.log(Error(erro)));
}
