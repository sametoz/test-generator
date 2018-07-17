 /**
 * YeniController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    testhazirla:function(req,res)
    {
    res.view('testhazirla');
    },
    anasayfa:function(req,res)
    {
        res.view('anasayfa');
    },
    sorugir:function(req,res)
    {
        res.view('sorugir');
    },
    hakkinda:function(req,res)
    {
        res.view('hakkinda');
    },
    create: function(req, res)
    {
        var bolum = req.body.bolum;
        var ders = req.body.ders;
        var konu = req.body.konu;
        var bilgi = req.body.bilgi;
        var soru = req.body.soru;
        var zorluk = req.body.zorluk;
        var a = req.body.a;1
        var b = req.body.b;
        var c = req.body.c;
        var d = req.body.d;
        var dogru = req.body.dogru;
        Bolum.create({bolumAdi:bolum}).exec(function(err, result){
            if (err) 
            {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Some error occured' });
            }
           res.redirect('sorugir');
        });
        Ders.create({dersAdi:ders}).exec(function(err, result){
            if (err) 
            {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Some error occured' });
            }
           res.redirect('sorugir');
        });
        Konu.create({konuAdi:konu}).exec(function(err, result){
            if (err) 
            {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Some error occured' });
            }
           res.redirect('sorugir');
        });
        Soru.create({bilgi:bilgi,soru:soru,zorluk:zorluk,cevapA:a,cevapB:b,cevapC:c,cevapD:d,dogruCevap:dogru}).exec(function(err, result){
            if (err) 
            {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Some error occured' });
            }
           res.redirect('sorugir');
        });
        
    },

 
};

