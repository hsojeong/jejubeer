var colla1Near = $('#collabosection').offset().top
var colla2Near = $('#collabosection .collabo2').offset().top - $(window).height()/2
var colla3Near = $('#collabosection .collabo3').offset().top - $(window).height()/2
var colla4Near = $('#collabosection .collabo4').offset().top - $(window).height()/2
var colla5Near = $('#collabosection .collabo5').offset().top - $(window).height()/2
var colla6Near = $('#collabosection .collabo6').offset().top - $(window).height()/2


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

$('#fixicon a').eq(2).on('click',function(){
  $('html,body').animate({scrollTop:0},1000)
    return false
})