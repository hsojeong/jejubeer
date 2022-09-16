for (let i=2022; i>=1900; i--) {
    $('#year').append(`<option value="${i}">${i}년</option>`)
}
for (let i=12; i>=1; i--) {
    $('#month').append(`<option value="${i}">${i}월</option>`)
}
for (let i=31; i>=1; i--) {
    $('#day').append(`<option value="${i}">${i}일</option>`)
}

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