/**
 * Ders.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'mysql',
  primaryKey: 'd_id',
  attributes: {
    d_id:{type:'number', autoIncrement: true,},
    dersAdi:{type:'string'},
    k_id:{type:'number',via:'k_id'}
  },
};
