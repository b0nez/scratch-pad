#!/usr/bin/env node

'use strict';

var products = require('./data/product.json');


/*
 * OBJECTIVES: MODEL a product and a shopping cart
 * 
 * Consider:
 *    For a product:
 *      a. What basic properties make up a typical product?
 *      b. If we add an setDiscout, getDiscount, how should this value effect the price? 
 *    
 *    For a shopping cart
 *      a. What basic properties and behaviours make up a typical shopping cart?
 */

/** 
 * Factory for products
 * 
 * Why are factories cool? Imagine your products were populated by data-entry - you might use a factory 
 * to create products based on user input. Also, they support private members through closure. Finally, 
 * if you wanted to add properties for a newer version of your application, you'd only need to do so in 
 * one place.
 */
function makeProduct(id, name, desc, cost) {
  var discount = 0;
  return {
    id: id,
    name: name,
    desc: desc,
    cost: cost,
    setDiscount: function(value) {
        if (value > cost) value === cost;
        discount = value;
    },
    getDiscount: function() {
        return discount;
    },
    getPrice: function() {
      return cost - discount;
    }
  };
}

/**
 * In makeCart, we're making use of closure to create a private variable, products. 
 * The products Array is not publically available - no one can direclty alter or 
 * delete it! The products Array is protected behind the API of the shopping cart.
 */
function makeCart() {
  var products = [];
  return {
    addProduct: function(product) {
      return products.push(product);
    },
    removeProduct: function(product) {
      var index = products.indexOf(product);
      if (index > -1) {
        return products.splice(index, 1)[0];
      }
    },
    count: function() {
      return products.length;
    },
    total: function() {
      var total = 0;
      for(var i = 0; i < products.length; i++) {
        total += products[i].getPrice();
      }
      return total;
    }
  };
}

// USAGE //
var earBuds = makeProduct('abc', 
                          'Ear Buds',
                          'These things cut out any crying babies!',
                          10.99);

var beats = makeProduct('xyz', 
                        'Beats',
                        'Kick ass phones!',
                        100.00);

var myCart = makeCart();
var msg = 'You have ' + myCart.addProduct(beats) + (myCart.count() > 1  ? ' items' : ' item') + ' in your cart!';
console.log(msg);

