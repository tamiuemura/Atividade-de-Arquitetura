const Aluno = require('./aluno');
const Turma = require('./turma');
const TurmaPresencial = require('./turmaPresencial');

const aluno1 = new Aluno('João', 'joao123', '123456');
const turma1 = new Turma('MAT123', 7);
const turmaPresencial1 = new TurmaPresencial('FIS456', 8, 80);

console.log(aluno1);
console.log(turma1);
console.log(turmaPresencial1);
console.log('Aluno aprovado na turma: ', turmaPresencial1.aprovado());
