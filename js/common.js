function init(){
  var ww = $(window).width()
  if(ww > 1024) {
    $('html').addClass('pc')
    .removeClass('mobile')
  } else {
    $('html').addClass('mobile')
    .removeClass('pc')
  }
}
init()
$(window).resize(function(){
  init()
})

$('#nav .depth1 > li').find('a').on('click', function(){

    $(this).parent().addClass('on')
    .siblings().removeClass('on')
    let lino = $(this).parent().index()
    let url;
    $('#contents section').remove()

    switch (lino) {
        case 0 : url = "./collaboration.html section"; break;
        case 1 : url = "./collaboration.html section"; break;
        case 2 : url = "./collaboration.html section" ; break;
        case 3 : url = "./brewery.html section"; break;
        case 4 : url = "./brewery.html section"; break;
    }
    $('#contents').load(url,function(){
        collabo()
    })
    if($('html').hasClass('mobile')){
      $('#header .box1').removeClass('on')
      $('#header .box2').removeClass('on')
       $('#nav').removeClass('on')
      $('#header .opennav').find('i').removeClass('fa-xmark')
      .addClass('fa-bars')
      $('#footer .about').removeClass('on')
      $('#footer .sns').removeClass('on')
      $('html').css({overflowY:'auto'})
    }
    return false
})


$('#header .opennav').on('click', function(){
    $('#header .box1').toggleClass('on')
    $('#header .box2').toggleClass('on')
    $('#nav').toggleClass('on')
    if ($(this).find('i').hasClass('fa-bars')) {
        $(this).find('i').removeClass('fa-bars').addClass('fa-xmark')
        $('html').css({overflowY:'hidden'})
    } else {
        $(this).find('i').removeClass('fa-xmark').addClass('fa-bars')
        $('html').css({overflowY:'auto'})
    }
    $('#footer .about').toggleClass('on')
    $('#footer .sns').toggleClass('on')
    
    
})

var  colla1Near, colla2Near, colla3Near, colla4Near, colla5Near, colla6Near
function collabo(){
    colla1Near = $('#collabosection').offset().top
    colla2Near = $('#collabosection .collabo2').offset().top - $(window).height()/2
    colla3Near = $('#collabosection .collabo3').offset().top - $(window).height()/2
    colla4Near = $('#collabosection .collabo4').offset().top - $(window).height()/2
    colla5Near = $('#collabosection .collabo5').offset().top - $(window).height()/2
    colla6Near = $('#collabosection .collabo6').offset().top - $(window).height()/2
}

$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if (sct >= colla1Near) {
      $('#collabosection .collabo1').addClass('on')
  } else {
      $('#collabosection .collabo1').removeClass('on')
  }
  
    if (sct >= colla2Near) {
        $('#collabosection .collabo2').addClass('on')
    } else {
        $('#collabosection .collabo2').removeClass('on')
    }

    if (sct >= colla3Near) {
      $('#collabosection .collabo3').addClass('on')
    } else {
      $('#collabosection .collabo3').removeClass('on')
   }

  if (sct >= colla4Near) {
    $('#collabosection .collabo4').addClass('on')
  } else {
    $('#collabosection .collabo4').removeClass('on')
  }

  if (sct >= colla5Near) {
    $('#collabosection .collabo5').addClass('on')
  } else {
    $('#collabosection .collabo5').removeClass('on')
  }

  
  if (sct >= colla6Near) {
    $('#collabosection .collabo6').addClass('on')
  } else {
    $('#collabosection .collabo6').removeClass('on')
  }
})

$('#fixicon a').eq(2).on('click',function(){
  $('html,body').animate({scrollTop:0},1000)
    return false
})
