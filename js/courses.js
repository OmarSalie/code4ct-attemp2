'use strict';

var shoppingCart = (function () {

    var cart = [];
  
    function Item(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    } 

    var obj = {};
  
    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                return;
            }
        }
  
        var item = new Item(name, price, count);
        cart.push(item);
    };
  
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
  
  
    obj.removeItemFromCart = function (name) { 
        for (var i in cart) {
            if (cart[i].name === name) { 
                cart[i].count--; 
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
    };
  
  
    obj.removeItemFromCartAll = function (name) { 
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
    };
  
  
    obj.clearCart = function () {
        cart = [];
    }
  
  
    obj.countCart = function () { 
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }
  
        return totalCount;
    };
  
    obj.totalCart = function () { 
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };
  
    obj.listCart = function () { 
        var cartCopy = [];
        
        for (var i in cart) {
            
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };
  
    return obj;
  })();
  
  
  
  
  