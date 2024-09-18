$(document).ready( function() {

  $('#mijnlijst').on('click', 'li', function() {
    //alert('yes')
    alert('Op een listitem geklikt: ' + $(this).text());
  });

  $('#Fotolijst').on('click', function() {
    //alert('yes')
   // alert('De volgende foto is aangeklikt: ' + $(this).children('img').attr('alt'));
  });
});

    /*
+ $(this).attr("alt"));
+ $(this).attr("title"));
+ $(this).attr("src"));

           var source = $(this).attr('src');
           var title = $(this).attr('title');
           $('#photo img, .caption').fadeOut('slow', function() {
                   $('#photo img').attr('src', source).fadeIn('slow');
                    $('.caption').text(title).fadeIn('slow');
           });
  });

});

----------- a werkt alleen this geeft niks aan----------------
  $('#Fotolijst').on('click', 'a', function() {
    //alert('yes')
    alert('De volgende foto is aangeklikt: ' + $(this).attr("title"));
  });
});
---------------------------------

$("#Ftolijst").each(function() {
    var thumbN = $(this);
    var thumbImgAlt = thumbN.children('img').attr('alt');
    thumbN.append('<span style="color:red;">' + thumbImgAlt + '</span>');
});

 .closest(), .find(), .children()

*/