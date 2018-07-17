/**
 * SoruController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    listele3: function (req, res) {
        Soru.getDatastore().sendNativeQuery('SELECT * FROM soru', (err, results) => 
        {
          if (err) 
            {
              res.send(400);
            } 
          else
            {
              console.log(results);
              res.view('testhazirla',{sonuc3:results.rows});
            }
        });
      }
};

