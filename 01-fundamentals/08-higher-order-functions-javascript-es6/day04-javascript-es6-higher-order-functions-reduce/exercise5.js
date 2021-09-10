const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (acc, element) => (acc += element.toLowerCase().split("a").length - 1),
    0
  );
}
containsA(names);
assert.deepStrictEqual(containsA(), 20);
