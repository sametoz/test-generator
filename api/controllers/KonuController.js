/**
 * KonuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    listele2: function (req, res) {
        Konu.getDatastore().sendNativeQuery('SELECT * FROM konu', (err, results) => 
        {
          if (err) 
            {
              res.send(400);
            } 
          else
            {
              console.log(results);
              res.view('testhazirla',{sonuc2:results.rows});
            }
        });
      }

};

