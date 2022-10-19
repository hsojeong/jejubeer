$("#birth").datepicker({
    changeMonth:true,     
    changeYear:true,       
    yearRange:'1900:2022', 
    showAnim:'slideDown',
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat:'yy-mm-dd',
    monthNames:['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames : ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    yearSuffix:'년',
    showMonthAfterYear: true
});



$('#form1').on('submit', function(){
    let idbox = $('#join2section #idbox').val()
    if (!idbox) {
        alert('이메일을 입력하세요.')
        $('#join2section #idbox').focus().css({
            borderColor:'#000'
        })
        return false
    }

    let pwboxCheck = /^[A-Z](?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let pwbox = $('#join2section #pwbox').val()
    if (!pwbox) {
        alert('비밀번호를 입력하세요.')
        $('#join2section #pwbox').focus().css({
            borderColor:'#000'
        })
        return false
    } else if ( !pwboxCheck.test(pwbox) ) {
        alert('비밀번호 규칙에 맞지 않습니다.')
        $('#join2section #pwbox').focus().css({
            borderColor:'#000'
        }).val('')
        return false
    }

    let pwboxok = $('#join2section #pwboxok').val()
    if (pwbox!==pwboxok) {
        alert('비밀번호를 정확히 입력하세요.')
        $('#join2section #pwboxok').focus().css({
            borderColor:'#000'
        }).val('')
        $('#join2section #pwboxok').val('')
        return false
    }


    let phonebox = $('#join2section #phonebox').val()
    if (!phonebox) {
        alert('연락처를 입력하세요.')
        $('#join2section #phonebox').focus().css({
            borderColor:'#000'
        })
        return false
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