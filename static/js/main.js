"use strict";$(function(){$(".js-toggle-navigation").click(function(e){e.preventDefault(),$(".page__header__proper").toggleClass("is-mobile-hidden"),$(this).find("use").attr("href","#icon-cross"==$(this).find("use").attr("href")?"#icon-navi":"#icon-cross")}),$("[data-section-link]").click(function(e){e.preventDefault();e=$(this).data("section-link");$("html, body").animate({scrollTop:+$('[data-section="'.concat(e,'"]')).offset().top+"px"},500,function(){$(".page__header__proper").addClass("is-mobile-hidden"),$(".js-toggle-navigation use").attr("href","#icon-navi")})}),$(".dialog__close").click(function(e){e.preventDefault(),$(this).parents(".dialog").removeClass("is-shown"),$(".site-overlay").fadeOut()}),$(".js-buy-btn").click(function(e){e.preventDefault();e=$(this).parents(".catalog__unit").data("name");$(".site-overlay").fadeIn(),$(".js-dialog-marketplaces").addClass("is-shown"),$(".js-dialog-marketplaces .js-name-placeholder").text(e)}),$(".faq__q").click(function(e){e.preventDefault(),$(this).siblings(".faq__a").slideToggle()}),$(".catalog__unit__offers").each(function(){$(this).find("button").click(function(e){e.preventDefault(),$(this).addClass("is-on").siblings().removeClass("is-on")})})});