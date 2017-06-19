/*
* @Author: Administrator
* @Date:   2017-06-19 20:57:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-19 21:54:31
*/

'use strict';
window.onload = function () {
	$('.top').mouseover(function(){
		$('.spike_right1').css({display:'block'});
		$('.spike_right2').css({display:'none'});
	});
	$('.bottom').mouseover(function(){
		$('.spike_right1').css({display:'none'});
		$('.spike_right2').css({display:'block'});
	});
}