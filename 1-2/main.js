$(function () {
    $('div').on('mouseenter', function () {
        $(this).css({'background-color':'blue',color:'white'})
    })
    $('div').on('mouseleave', function () {
        $(this).css('background-color','red')
    })
})
