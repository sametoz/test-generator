/**
 * DersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    listele1: function (req, res) {
        Ders.getDatastore().sendNativeQuery('SELECT * FROM ders', (err, results) => 
        {
          if (err) 
            {
              res.send(400);
            } 
          else
            {
              console.log(results);
              res.view('testhazirla',{sonuc1:results.rows});
            }
        });
      }

};

