#!/usr/bin/env node

'use strict';

var products = require('./data/product.json');

var id = 'abc';
var color ='silver';
var description = 'iPhone6';
var cost = 500.00;

var iPhone = {
  id: 'adb',
color: 'silver',
desc: 'iPhone6',
cost : 500.00
};

//FACTORY function // APPLICATION LOGIC

function makeProduct(id, name, desc, cost){
  var discount = 0; 
  return {
    id: id,
    name: name,
    desc: desc,
    cost: cost,
    getPrice: function(){
      return cost - discount;
    },
    getDiscount: function(){
      return discount;
    },
    setDiscount: function(value){
      discount = value;
    }
  };
}

//client code-- making use of the function as if it is a service
var iPhone6 = makeProduct('abc', 'iPhone6', 'great phone', 500.00 );
console.log(iPhone6.getPrice());
console.log(iPhone6.setDiscount(200));
console.log(iPhone6.getPrice());

var android = makeProduct('xyz', 'Galxy', 'smashing', 600.00);
console.log(android.getPrice());
console.log(android.setDiscount(50));
console.log(android.getPrice());