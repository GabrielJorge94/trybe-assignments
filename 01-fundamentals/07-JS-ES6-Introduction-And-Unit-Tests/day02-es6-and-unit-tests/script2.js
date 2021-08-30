const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addMorning = (objeto, chave, valor) => objeto[chave] = valor;

addMorning(lesson2, 'turno', 'manhã');

const listKeys = (objeto) => Object.keys(objeto);

const objectLength = (objeto) => Object.entries(objeto).length;
console.log(objectLength(lesson1));