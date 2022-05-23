<script>
function disableIE() {
   if (document.all) {
       return false;
   }
}
function disableNS(e) {
   if (document.layers || (document.getElementById && !document.all)) {
       if (e.which==2 || e.which==3) {
           return false;
       }
   }
}
if (document.layers) {
   document.captureEvents(Event.MOUSEDOWN);
   document.onmousedown = disableNS;
}
else {
   document.onmouseup = disableNS;
   document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");
</script>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script src="https://static.tumblr.com/iuw14ew/VSQma1786/jquery.style-my-tooltips.js"></script>
<script>
(function($){
$(document).ready(function() {
$("a[title]").style_my_tooltips({
tip_follows_cursor:false,
tip_delay_time:90,
tip_fade_speed:600,
attribute:"title"
});
});
})(jQuery);
</script>

<script src="https://code.iconify.design/2/2.0.4/iconify.min.js"></script>
<script src="//pull.cappuccicons.com/cpf.js"></script>
<script src="https://kit.fontawesome.com/18ffc3f01a.js" crossorigin="anonymous"></script>

<link href="https://static.tumblr.com/qudkd6d/OcDnl99gb/style.css" rel="stylesheet" type="text/css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="https://static.tumblr.com/qudkd6d/Az6nkemqr/pxuphotoset.min.js"></script>


                        <!--- FONTS AND ICONS --->
                        
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Mandali&family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet">

<link href="//solrainha.github.io/honeybee/honeybee.css" rel="stylesheet">


<style type="text/css">