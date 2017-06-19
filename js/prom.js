/*
* @Author: Administrator
* @Date:   2017-06-19 10:21:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-19 22:17:25
*/

'use strict';
   $('.prom01').mouseover(function() {
      $('.prom01_com').css({display: 'block'});
      $('.prom02_com').css({display: 'none'});
      $('.prom01').css({backgroundColor:'#ffffff',borderRight:'1px solid #e9e9e9'});
      $('.prom02').css({backgroundColor:'#f4f4f4'});

    });
    $('.prom02').mouseover(function() {
      $('.prom01_com').css({display: 'none'});
      $('.prom02_com').css({display: 'block'});
      $('.prom02').css({backgroundColor:'#ffffff',border:'none'});
      $('.prom01').css({backgroundColor:'#f4f4f4'});

    });