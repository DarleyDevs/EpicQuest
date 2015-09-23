$(document).ready(function() {

    var load = $('#loader');
    var p1 = $('#page1');
    var p2 = $('#page2');
    var p3 = $('#page3');
    var p4 = $('#page4');
    
    var back = $('#back');
    var settings = $('#settingsBtn');
    var back2 = $('#backToProfile');
    var scroller = $('#pageContainer');
    var mainAv = $('#mainAv');
  
    var goToActive = $('#activeQ button');
  
    var accept = $('.p2 .accept, .p2 .skip');
    
    $('.loading').delay(1500).fadeOut('slow');
    
    p1.click(function(){
        scroller.animate({
            left: '0'
        });
    });
    
    back.click(function(){
        scroller.animate({
            left: '0'
        });
    });
  
    accept.click(function(){
        scroller.animate({
            left: '0'
        });
    });
    
    p2.click(function(){
        scroller.animate({
            left: '-540px'
        });
    });
  
    goToActive.click(function(){
        scroller.animate({
            left: '-540px'
        });
    });
  
    
    p3.click(function(){
        scroller.animate({
            left: '-1080px'
        });
    });
    
    mainAv.click(function(){
        scroller.animate({
            left: '-1080px'
        });
    });
    
    back2.click(function(){
        scroller.animate({
            left: '-1080px'
        });
    });
    
    p4.click(function(){
        scroller.animate({
            left: '-1620px'
        });
    });
    
    settings.click(function(){
        scroller.animate({
            left: '-1620px'
        });
    });
});