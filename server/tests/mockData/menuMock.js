const correctMenu = {
  menu: 'Eba, Vegetable, Isiewu',
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '100',
  price: '2500'
};

const correctMenu2 = {
  menu: 'Rice and Turkey',
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '80',
  price: '2500'
};

const correctMenu3 = {
  menu: 'Rice and Turkey',
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '80',
  price: '2500'
};

const undefinedMenu = {
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const unstringedMenu = {
  menu: ['rice and turkey'],
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const emptyMenu = {
  menu: '',
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const invalidMenuLength = {
  menu: 'Eb',
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const invalidMenuCharacter = {
  menu: 'Eba @#',
  description: 'This meal is fantastic. You will come for more',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const undefinedDescription = {
  menu: 'Semovita, Vegetable, Isiewu',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const unstringedDescription = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: ['description'],
  category: 'local',
  quantity: '10',
  price: '2500'
};

const emptyDescription = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: '',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const invalidDescriptionLength = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wow',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const invalidDescriptionCharacter = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo @#!',
  category: 'local',
  quantity: '10',
  price: '2500'
};

const undefinedCategory = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  quantity: '10',
  price: '2500'
};

const unstringedCategory = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: ['category'],
  quantity: '10',
  price: '2500'
};

const emptyCategory = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: '',
  quantity: '10',
  price: '2500'
};

const invalidCategory = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'drugs@#$',
  quantity: '10',
  price: '2500'
};

const undefinedQuantity = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  price: '2500'
};

const unstringedQuantity = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: ['251'],
  price: '2500'
};

const emptyQuantity = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '',
  price: '2500'
};

const invalidQuantityLength = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '500000',
  price: '2500'
};

const invalidQuantity = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '0',
  price: '2500'
};

const invalidQuantityCharacter = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20a',
  price: '2500'
};

const undefinedPrice = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20',
};

const unstringedPrice = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20',
  price: ['544']
};

const emptyPrice = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20',
  price: ''
};

const invalidPriceLength = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20',
  price: '10'
};

const invalidPrice = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20',
  price: '000'
};

const invalidPriceCharacter = {
  menu: 'Semovita, Vegetable, Isiewu',
  description: 'wowoo great',
  category: 'local',
  quantity: '20',
  price: '100a'
};

export {
  correctMenu, undefinedMenu, emptyMenu, invalidMenuLength, invalidMenuCharacter,
  undefinedDescription, emptyDescription, invalidDescriptionLength, invalidDescriptionCharacter,
  undefinedCategory, emptyCategory, invalidCategory, undefinedQuantity, emptyQuantity,
  invalidQuantityLength, invalidQuantity, invalidQuantityCharacter, undefinedPrice, emptyPrice,
  invalidPriceLength, invalidPrice, invalidPriceCharacter, correctMenu2, correctMenu3,
  unstringedMenu, unstringedDescription, unstringedCategory, unstringedQuantity, unstringedPrice
};
