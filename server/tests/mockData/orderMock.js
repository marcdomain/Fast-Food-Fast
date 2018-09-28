const successfulOrder = {
  mealId: '1',
  quantity: '10',
  location: '145 herbert macaulay way'
};

const unstringedLocation = {
  mealId: '1',
  quantity: '3',
  location: ['235 EPIC Tower']
};

const invalidLocationLength = {
  mealId: '1',
  quantity: '3',
  location: '235'
};

const invalidLocationCharacter = {
  mealId: '1',
  quantity: '3',
  location: '235 @ Ikorodu #'
};

const undefinedMealId = {
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const unstringedMealId = {
  mealId: ['5'],
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const emptyMealId = {
  mealId: '',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const invalidMealId = {
  mealId: '1a',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const overMillionMealId = {
  mealId: '80000000000000000',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const nonExistingMealId = {
  mealId: '8000',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const undefinedQuantity = {
  mealId: '1',
  location: '235, Ikorodu Road Lagos'
};

const unstringedQuantity = {
  mealId: '1',
  quantity: ['58'],
  location: '235, Ikorodu Road Lagos'
};

const emptyQuantity = {
  mealId: '1',
  quantity: '',
  location: '235, Ikorodu Road Lagos'
};

const invalidQuantity = {
  mealId: '1',
  quantity: '-2',
  location: '235, Ikorodu Road Lagos'
};

const excessQuantity = {
  mealId: '1',
  quantity: '20000000000',
  location: '235, Ikorodu Road Lagos'
};

const outOfStockMenu = {
  mealId: '1',
  quantity: '5'
};

export {
  successfulOrder, invalidLocationLength, invalidLocationCharacter, undefinedMealId,
  emptyMealId, invalidMealId, overMillionMealId, nonExistingMealId, undefinedQuantity,
  emptyQuantity, invalidQuantity, excessQuantity,
  unstringedLocation, unstringedMealId, unstringedQuantity, outOfStockMenu
};
