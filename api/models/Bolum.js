/**
 * Bolumler.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'mysql',
  primaryKey: 'b_id',
  attributes: 
  {
    b_id: { type: 'number', autoIncrement: true ,unique: true,required: true},
    bolumAdi:{type:'string'},
    d_id:{type:'number', via:'d_id'}
  },

};

