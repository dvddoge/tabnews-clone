const calculadora = require("../models/calculadora");

test("teste de somar 2 + 2 deve retornar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("teste de somar 5 + 100 deve retornar 105", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test("teste de soamr 'banana' + 10 deve retornar 'Erro'", () => {
  expect(calculadora.somar("banana", 10)).toBe("Erro");
  expect(calculadora.somar(10, "banana")).toBe("Erro");
});
