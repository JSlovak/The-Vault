'use strict';

// Create a module that exposes 2 functions.
// work on the `vault.js` file.
// make tests pass

var vaultGen =(function (){

  var vault = {};

//   ##### setValue
// setValue( key, value )
// accepts two arguments `key` and `value`.
// will set the `value` in the vault identified by it's `key`.

  var setValue = function(key, precious){
    vault[key] = precious;
  };

//   ##### getValue
// getValue( key )
// accepts one argument `key`.
// will return the `value` that was set if the `key` exists in the vault.
// will return `null` if the `key` does not exist in the vault.

  var getValue = function(key){
    if (!vault[key]){
      return null;
    } else {
      return vault[key];
    }
  };

  vault.setValue = setValue;
  vault.getValue = getValue;


  return vault;
});

var myVault = vaultGen();

// ### Example usage
// console.log(myVault);
// console.log(myVault.setValue("aluminium","MONEY!"));
// console.log(myVault.getValue("aluminium"));
// console.log(myVault.getValue("somethingElse"));

module.exports = vaultGen;