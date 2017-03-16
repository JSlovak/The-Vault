'use strict';

var vaultGen =(function (){

  var vault = {};

  var setValue = function(key, precious){
    vault[key] = precious;
  };

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
module.exports = vaultGen;