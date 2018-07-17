/**
 * Konu.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'mysql',
  primaryKey: 'k_id',
  attributes: {
    k_id:{type:'number', autoIncrement: true},
    konuAdi:{type:'string'},
    s_id:{type:'number',via:'s_id'}

  },

};

