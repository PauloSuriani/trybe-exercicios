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

const dragonDamage = (dragao) => {
  const max = dragao.strength;
  const min = 15;
  return Math.round(Math.random() * (max - min) + min);
};
// console.log(dragonDamage());

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = (guerreiro) => {
  const max = guerreiro.strength * guerreiro.weaponDmg;
  const min = guerreiro.strength;
  return Math.round(Math.random() * (max - min) + min);
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano 
// recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamageMana = (mago) => {
  const turno = {
    dano: 0,
    mana: 0,
  };
  if (mago.mana < 15) {
    turno.dano = 'Não possui mana suficiente';
    turno.mana = mago.mana;
  } else {
  const max = mago.intelligence * 2;
  const min = mago.intelligence;
  const dano = Math.round(Math.random() * (max - min) + min);
  const mana = 15;
  turno.dano = dano;
  turno.mana = mana;
  }
  return turno;
};

// console.log(mageDamageMana());


// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints 
// do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .


// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints
//  do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.


// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os 
// healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.


// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  
  ataqueGuerreiro: (callback) => {
    const danoGuerreiro = callback(warrior);
    warrior.damage = danoGuerreiro;
    dragon.healthPoints -= danoGuerreiro;
  },

  ataqueMago: (callback) => {
    const danoManaMago = callback(mage);
    mage.damage = danoManaMago.dano;
    mage.mana -= danoManaMago.mana;
    dragon.healthPoints -= danoManaMago.dano;
  },

  ataqueDragao: (callback) => {
    const danoDragao = callback(dragon);
    mage.healthPoints -= danoDragao;
    warrior.healthPoints -= danoDragao;
    dragon.damage = danoDragao;
  },

  turno:() => battleMembers,

};

gameActions.ataqueGuerreiro(warriorDamage);
gameActions.ataqueMago(mageDamageMana);
gameActions.ataqueDragao(dragonDamage);

console.log(gameActions.turno());

// console.log(`${Object.entries(dragon)},
//  ${Object.entries(warrior)}, 
//  ${Object.entries(mage)}`);