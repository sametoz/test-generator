/**
 * BolumController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    listele: function (req, res) {
        Bolum.getDatastore().sendNativeQuery('SELECT * FROM bolum', (err, results) => 
        {
          if (err) 
            {
              res.send(400);
            } 
          else
            {
              console.log(results);
              res.view('testhazirla',{sonuc:results.rows});
            }
        });
      }

};

