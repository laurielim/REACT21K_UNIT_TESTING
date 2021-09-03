"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    if (!data) throw new Error("phone data missing");
    this.phoneRegister = data;
  }

  getTypes() {
    const types = [];
    this.phoneRegister.forEach((person) => {
      person.phones.forEach((phone) =>
        types.includes(phone.type) ? "" : types.push(phone.type)
      );
    });
    return types;
  }

  getNumbersByType(firstname, lastname, type) {
    if (!firstname || !lastname || !type) throw new Error("parameter missing");

    const person = this.phoneRegister.filter(
      (person) => person.firstname === firstname && person.lastname === lastname
    );

    if (person.length) {
      return person[0].phones
        .filter((phone) => phone.type === type)
        .map((phone) => phone.number);
    }
    return [];
  }

  getAllNumbersByType(type) {
    if (!type) throw new Error("parameter missing");

    const numbers = [];

    this.phoneRegister.forEach((person) => {
      person.phones.forEach((phone) => {
        if (phone.type === type) {
          numbers.push({
            firstname: person.firstname,
            lastname: person.lastname,
            number: {
              type: type,
              tel: phone.number,
            },
          });
        }
      });
    });

    return numbers;
  }
};
