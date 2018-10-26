$('#PHOTO').attr('src', 'https://farm9.staticflickr.com/8448/28649631654_968e3fb873_c.jpg');
$('.lge').css({'background' : 'url(\'https://farm9.staticflickr.com/8448/28649631654_968e3fb873_c.jpg\')'});
$('#PHOTO').attr('class', 'sml');
$('.lge').css({'background-repeat' : 'no-repeat'});
$('.zoom').css({
'margin': '20px auto',
  'top': '30px',
  'position': 'relative'
});

$(document).ready(function() {
  var native_height, native_width;
  native_width = 0;
  native_height = 0;

  $('.zoom').mousemove(function(e) {
    var bgp, image_object, magnify_offset, mx, my, px, py, rx, ry;
    if (!native_width && !native_height) {
      image_object = new Image();
      image_object.src = $('.sml').attr('src');
      native_width = image_object.width;
      native_height = image_object.height;
    } else {
      magnify_offset = $(this).offset();
      mx = e.pageX - magnify_offset.left;
      my = e.pageY - magnify_offset.top;
      if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
        $('.lge').fadeIn(500);
      } else {
        $('.lge').fadeOut(800);
      }
      if ($('.lge').is(':visible')) {
        rx = Math.round(mx / $('.sml').width() * native_width - ($('.lge').width() / 2)) * -1;
        ry = Math.round(my / $('.sml').height() * native_height - ($('.lge').height() / 2)) * -1;
        bgp = 2*rx + 'px ' + 2*ry + 'px';
        px = mx - ($('.lge').width() / 2);
        py = my - ($('.lge').height() / 2);
        $('.lge').css({
          left: px,
          top: py,
          backgroundPosition: bgp
        });
        $('.lge').css({'background-size' : '450%'});
      }
    }
  });
  $('.zoom').on('touchmove', function(e) {
     //var x = event.touches[0].clientX;
     //var y = event.touches[0].clientY;
     var bgp, image_object, magnify_offset, mx, my, px, py, rx, ry;
     if (!native_width && !native_height) {
       image_object = new Image();
       image_object.src = $('.sml').attr('src');
       native_width = image_object.width;
       native_height = image_object.height;
     } else {
       magnify_offset = $(this).offset();
       mx = e.touches[0].clientX - magnify_offset.left;
       my = e.touches[0].clientY - magnify_offset.top;
       if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
         $('.lge').fadeIn(500);
       } else {
         $('.lge').fadeOut(800);
       }
       if ($('.lge').is(':visible')) {
         rx = Math.round(mx / $('.sml').width() * native_width - ($('.lge').width() / 2)) * -1;
         ry = Math.round(my / $('.sml').height() * native_height - ($('.lge').height() / 2)) * -1;
         bgp = 1.8*rx + 'px ' + 1.5*ry + 'px';
         px = mx - ($('.lge').width() / 2);
         py = my - ($('.lge').height() / 2);
         $('.lge').css({
           left: px,
           top: py,
           backgroundPosition: bgp
         });
           $('.lge').css({'background-size' : '400%'});
       }
     }
   });
});
