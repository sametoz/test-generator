/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  '/': {
    view: 'pages/homepage'
  },
  '/testhazirla':{ view: 'testhazirla', action:'bolum'},
  'GET /testhazirla': 'BolumController.listele',
  //
  '/sorugir':{view:'sorugir',action:'bolum'},
  'GET /sorugir': 'YeniController.sorugir',
  //
  '/anasayfa':{view:'anasayfa',action:'bolum'},
  'GET /anasayfa': 'YeniController.anasayfa',
  //
  '/hakkinda':{view:'hakkinda',action:'bolum'},
  'GET /hakkinda': 'YeniController.hakkinda',
  //
  // '/sorugir':{view:'sorugir',action:'bolum'},
  'GET /yeni/create':'yeniController.create',
  

  // '/testhazirla':{ view: 'testhazirla', action:'ders'},
  // 'GET /testhazirla': 'DersController.listele1',
  // '/testhazirla':{ view: 'testhazirla', action:'konu'},
  // 'GET /testhazirla': 'KonuController.listele2',
  // '/testhazirla':{ view: 'testhazirla', action:'soru'},
  // 'GET /testhazirla': 'SoruController.listele3',
   


  
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
