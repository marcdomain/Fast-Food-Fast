const successfulOrder = {
  menuId: '1',
  quantity: '3'
};

const invalidLocationLength = {
  menuId: '1',
  quantity: '3',
  location: '235'
};

const invalidLocationCharacter = {
  menuId: '1',
  quantity: '3',
  location: '235 @ Ikorodu #'
};

const undefinedMenuId = {
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const emptyMenuId = {
  menuId: '',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const invalidMenuId = {
  menuId: '1a',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const overMillionMenuId = {
  menuId: '80000000000000000',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const nonExistingMenuId = {
  menuId: '8000',
  quantity: '3',
  location: '235, Ikorodu Road Lagos'
};

const undefinedQuantity = {
  menuId: '1',
  location: '235, Ikorodu Road Lagos'
};

const emptyQuantity = {
  menuId: '1',
  quantity: '',
  location: '235, Ikorodu Road Lagos'
};

const invalidQuantity = {
  menuId: '1',
  quantity: '-2',
  location: '235, Ikorodu Road Lagos'
};

const excessQuantity = {
  menuId: '1',
  quantity: '20000000000',
  location: '235, Ikorodu Road Lagos'
};

export {
  successfulOrder, invalidLocationLength, invalidLocationCharacter, undefinedMenuId,
  emptyMenuId, invalidMenuId, overMillionMenuId, nonExistingMenuId, undefinedQuantity,
  emptyQuantity, invalidQuantity, excessQuantity
};
