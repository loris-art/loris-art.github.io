/**
 * Created by user on 8/21/14.
 */
$(function(){
   $("#home a:contains('Home')").parent().addClass('active');
    $("#schedule a:contains('Schedule')").parent().addClass('active');
    $("#artist a:contains('Artists')").parent().addClass('active');
    $("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
    $("#register a:contains('Register')").parent().addClass('active');


    //make menues drop automaticly
    $('ul.nav li.dropdown').hover(function(){
        $('.dropdown-menu', this).fadeIn();
    },function(){
        $('.dropdown-menu', this).fadeOut('fast')

    });


    $("[data-toggle='tooltip']").tooltip({animation:true});
});