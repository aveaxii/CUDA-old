jQuery(document).ready(function(){
    var content = jQuery('input:text').attr('placeholder');
    jQuery('input:text').attr('placeholder',content+'*');
  });