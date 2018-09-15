const successOrder = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const undefinedEmail = {
  id: 1,
  phone: '08082300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const emptyEmail = {
  id: 1,
  email: '',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidEmailFormat = {
  id: 1,
  email: 'am##@mcd.cpm',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidEmailLength = {
  id: 1,
  email: 'a@b.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const undefinedPhone = {
  id: 1,
  item: 'rice and turkey',
  email: 'marcus2cu@gmail.com',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const emptyPhone = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidPhoneFormat = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: 'a8082300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidPhoneLength = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '300954',
  item: 'rice and turkey',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const undefinedItem = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const emptyItem = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: '',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidItemLength = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'ri',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidItemCharacter = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'ric#@',
  price: '2500',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const undefinedPrice = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const emptyPrice = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidPriceLength = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '5020000',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const invalidPriceCharacter = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '12@',
  quantity: '3',
  total: '7500',
  status: 'pending'
};

const undefinedQuantity = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  total: '7500',
  status: 'pending'
};

const emptyQuantity = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  quantity: '',
  total: '7500',
  status: 'pending'
};

const invalidQuantityLength = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  quantity: '3000',
  total: '7500',
  status: 'pending'
};

const invalidQuantityCharacter = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  quantity: '3@',
  total: '7500',
  status: 'pending'
};

const acceptOrder = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  quantity: '3',
  total: '7500',
  status: 'accepted'
}

const declineOrder = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  quantity: '3',
  total: '7500',
  status: 'declined'
}

const completeOrder = {
  id: 1,
  email: 'marcus2cu@gmail.com',
  phone: '08082300954',
  item: 'rice and turkey',
  price: '500',
  quantity: '3',
  total: '7500',
  status: 'completed'
}

export {
  successOrder, undefinedEmail, emptyEmail, invalidEmailFormat, invalidEmailLength, undefinedPhone,
  emptyPhone, invalidPhoneFormat, invalidPhoneLength,
  undefinedItem, emptyItem, invalidItemLength, invalidItemCharacter, undefinedPrice,
  emptyPrice, invalidPriceLength, invalidPriceCharacter, undefinedQuantity,
  emptyQuantity, invalidQuantityLength, invalidQuantityCharacter, acceptOrder, declineOrder, completeOrder
};
