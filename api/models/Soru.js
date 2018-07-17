/**
 * Soru.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'mysql',
  primaryKey: 's_id',
  attributes: {
    s_id:{type:'number', autoIncrement: true},
    soru:{type:'string'},
    bilgi:{type:'string'},
    cevapA:{type:'string'},
    cevapB:{type:'string'},
    cevapC:{type:'string'},
    cevapD:{type:'string'},
    dogruCevap:{type:'string'},
    zorluk:{type:'number'}
    

  },

};

