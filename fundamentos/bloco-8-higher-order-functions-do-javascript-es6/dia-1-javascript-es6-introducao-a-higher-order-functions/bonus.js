const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  const max = dragon.strength;
  const min = 15;
  return Math.random() * (max - min) + min;
};
// console.log(dragonDamage());

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  const max = warrior.strength * warrior.weaponDmg;
  const min = warrior.strength;
  return Math.random() * (max - min) + min;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano 
// recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamageMana = () => {
  const turno = {
    dano: 0,
    mana: 0,
  };
  if (mage.mana < 15) {
    turno.dano = 'Não possui mana suficiente';
    turno.mana = mage.mana;
  } else {
  const max = mage.intelligence * 2;
  const min = mage.intelligence;
  const dano = Math.random() * (max - min) + min;
  const mana = 15;
  turno.dano = dano;
  turno.mana = mana;
  }
  return turno;
};

// console.log(mageDamageMana());
