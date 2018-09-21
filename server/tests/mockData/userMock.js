const correctUser = {
  name: 'Marcus',
  email: 'marcus2cu@yahoo.com',
  phone: '07065266168',
  password: 'marcpass'
};

const undefinedName = {
  email: 'marcus@gmail.com',
  phone: '07065266169',
  password: 'marcpass'
};

const emptyName = {
  name: '',
  email: 'marcus@gmail.com',
  phone: '07065266169',
  password: 'marcpass'
};

const invalidNameLength = {
  name: 'ma',
  email: 'marcus@gmail.com',
  phone: '07065266169',
  password: 'marcpass'
};

const invalidNameCharacter = {
  name: 'ma',
  email: 'marcus@gmail.com',
  phone: '07065266169',
  password: 'marcpass'
};

const undefinedEmail = {
  name: 'marc marc',
  phone: '07065266169',
  password: 'marcpass'
};

const emptyEmail = {
  name: 'marc marc',
  email: '',
  phone: '07065266169',
  password: 'marcpass'
};

const invalidEmailLength = {
  name: 'marc marc',
  email: 'ab@cd.ng',
  phone: '07065266169',
  password: 'marcpass'
};

const invalidEmailCharacter = {
  name: 'marc marc',
  email: 'ab##@c##d.ng',
  phone: '07065266169',
  password: 'marcpass'
};

const existingEmail = {
  name: 'Marcus',
  email: 'marcus2cu@yahoo.com',
  phone: '07065266169',
  password: 'marcpass'
};

const undefinedPhone = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  password: 'marcpass'
};

const emptyPhone = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '',
  password: 'marcpass'
};

const invalidPhoneLength = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '0706526',
  password: 'marcpass'
};

const invalidPhoneCharacter = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169#@',
  password: 'marcpass'
};

const existingPhone = {
  name: 'Marcus',
  email: 'marcmarc@yahoo.com',
  phone: '07065266168',
  password: 'marcpass'
};

const undefinedPassword = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169'
};

const emptyPassword = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  password: ''
};

const invalidPasswordLength = {
  name: 'marc marc',
  email: 'marc@gmail.ng',
  phone: '07065266169',
  password: 'a'
};

export {
  correctUser, undefinedName, emptyName, invalidNameLength, invalidNameCharacter,
  undefinedEmail, emptyEmail, invalidEmailLength, invalidEmailCharacter, existingEmail,
  undefinedPhone, emptyPhone, invalidPhoneLength, invalidPhoneCharacter, existingPhone,
  undefinedPassword, emptyPassword, invalidPasswordLength
};
