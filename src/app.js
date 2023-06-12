/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function generadorDeExcusas() {
    let aleatorioWho = who[Math.floor(Math.random() * who.length)];
    let aleatorioAction = action[Math.floor(Math.random() * action.length)];
    let aleatorioWhat = what[Math.floor(Math.random() * what.length)];
    let aleatorioWhen = when[Math.floor(Math.random() * when.length)];

    let excusa = aleatorioWho.concat(
      " ",
      aleatorioAction,
      " ",
      aleatorioWhat,
      " ",
      aleatorioWhen
    );

    return excusa;
  }
  const excuse = document.querySelector("#excuse");
  excuse.innerHTML = generadorDeExcusas();
  console.log("Hello Rigo from the console!");
  console.log(generadorDeExcusas);
};
