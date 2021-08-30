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
listKeys(lesson2);

const objectLength = (objeto) => Object.entries(objeto).length;
objectLength(lesson1);

const listValues = (objeto) => Object.values(objeto);
listValues(lesson3);


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
lesson2.turno = 'noite';


const studentsSum = () => {
  return lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
};

const getValueByNumber = (objeto, posicao) => {
  return Object.values(objeto)[posicao];
}
