

var span = document.getElementsByClassName("close")[0];

function openModal() {

  $('#myModal').css('display', 'block')
}


function closeModal() {
  $('#myModal').css('display', 'none')
}

function resetModal() {
  $('.modalContent').html("")
  $('.modalHeader').html("")
  $('.modalFooter').html("")
}

