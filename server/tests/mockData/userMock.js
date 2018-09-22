const correctUser = {
  name: 'Marcus',
  email: 'marcus2cu@yahoo.com',
  phone: '07065266168',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const undefinedName = {
  email: 'marcus@gmail.com',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const emptyName = {
  name: '',
  email: 'marcus@gmail.com',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const invalidNameLength = {
  name: 'ma',
  email: 'marcus@gmail.com',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const invalidNameCharacter = {
  name: 'ma@andela',
  email: 'marcus@gmail.com',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const undefinedEmail = {
  name: 'marc marc',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const emptyEmail = {
  name: 'marc marc',
  email: '',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const invalidEmailLength = {
  name: 'marc marc',
  email: 'ab@cd.ng',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const invalidEmailCharacter = {
  name: 'marc marc',
  email: 'ab##@c##d.ng',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const existingEmail = {
  name: 'Marcus',
  email: 'marcus2cu@yahoo.com',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const undefinedPhone = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const emptyPhone = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const invalidPhoneLength = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '070652',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const invalidPhoneCharacter = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169#@',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const existingPhone = {
  name: 'Marcus',
  email: 'marcmarc@yahoo.com',
  phone: '07065266168',
  address: 'Andela EPIC Tower',
  password: 'marcpass'
};

const undefinedPassword = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
};

const emptyPassword = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: ''
};

const invalidPasswordLength = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'a'
};

const whitespacePassword = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: 'Andela EPIC Tower',
  password: 'marc pass'
};

const undefinedAddress = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  password: 'marcpass'
};

const emptyAddress = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: '',
  password: 'marcpass'
};

const invalidAddressLength = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: 'An',
  password: 'marcpass'
};

const invalidAddressCharacter = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  address: 'A!@abcd',
  password: 'marcpass'
};

export {
  correctUser, undefinedName, emptyName, invalidNameLength, invalidNameCharacter,
  undefinedEmail, emptyEmail, invalidEmailLength, invalidEmailCharacter, existingEmail,
  undefinedPhone, emptyPhone, invalidPhoneLength, invalidPhoneCharacter, existingPhone,
  undefinedPassword, emptyPassword, invalidPasswordLength, undefinedAddress, emptyAddress,
  invalidAddressLength, invalidAddressCharacter, whitespacePassword
};
