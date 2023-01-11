// $(document).ready(function () {
//     $('div').on('click', function () {

//         // 1
//         // let currentText = $(this).text()
//         // let newText = currentText + " " + "click add some text"
//         // $(this).text(newText)

//         // 2
//         // this.append("click add some text")

//         // 3
//         $(this).html($(this).html() + "click add some text")
//     })
// })


$(document).ready(function () {
    $('div').on('mouseenter', function () {
        $(this).css({'background-color':'blue',color:'white'})
    })
    $('div').on('mouseleave', function () {
        $(this).css({'background-color':'red',color:'black'})
    })
})
