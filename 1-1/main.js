$(document).ready(function () {
    $('div').on('click', function () {
        let currentText = $(this).text()
        console.log( $(this).text());
        let newText = currentText + " " + "Click added some text!"
        $(this).text(newText)
    })
})
