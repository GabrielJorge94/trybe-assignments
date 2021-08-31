const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const deliveryPerson = Object.values(order.order.delivery)[0];
const costumerName = Object.values(order)[0];
const phoneNumber = Object.values(order)[1];
const costumerStreet = Object.values(order.address)[0];
const costumerNumber = Object.values(order.address)[1];
const costumerApartment = Object.values(order.address)[2];
const pizza1 = Object.keys(order.order.pizza)[0];
const pizza2 = Object.keys(order.order.pizza)[1];
const drink = Object.values(order.order.drinks.coke)[0];
const price = Object.values(order.payment);


const customerInfo = (order) => {
  return `Ola ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${costumerStreet}, N: ${costumerNumber}, AP: ${costumerApartment}` 
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva'
  order.payment = '50,00'
  return `Ola ${order.name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$ ${order.payment}`
}

console.log(orderModifier(order));
