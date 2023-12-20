var correctImg =
  '<div class="showAnswerTickMark showAns"><img src="assets/images/tikMark-small.png" /></div>'
var incorrectImg =
  '<div class="showAnswerCrossMark showAns "><img src="assets/images/crossMark-small.png" /></div>'
var isMusic1Playing = false
var isMusic2Playing = false
var $audio1 = $('#audioPlayer1')
var $audio2 = $('#audioPlayer2')
var slider = document.getElementById('myRange')
var lastAudio = 0
var totalItems = $('.item').length
var currentIndex = $('div.active').index() + 1
function fnTemplate4_v1(_div) {
  
 
}
var currNum = 1
$('.queBox .clickableBox,.queBox .textBox').on('click', function () {
  currNum = $(this).parent().attr('id').split('_')[1]
  $audio1[0].pause()
  $audio2[0].pause()
  $('#pButton .playImg').show()
  $('#pButton .pauseImg').hide()
  $('.pagePopup .carousel-inner .item').removeClass('active')
  $('.pagePopup .carousel-inner .item_' + currNum + '').addClass('active')
  $('.popup_' + currentIndex).show()
})

function fnAudio(obj) {
  var titleAudioPath = $(obj).attr('data-audioSrc')
  $audio2[0].setAttribute('src', titleAudioPath)
  $audio2[0].load()
  var playPromise = $audio2[0].play()
  if (playPromise !== undefined) {
    playPromise
      .then(function (value) {
        $audio1[0].pause()
        $audio1[0].removeEventListener('timeupdate', fnUpdateTimer)
        $('#pButton .playImg').show()
        $('#pButton .pauseImg').hide()
      })
      .catch(function (error) {
      })
  }
}

function setAudio(_src) {
  if (_src == '') {
    $('.controlsDiv').addClass('hide')
  } else {
    $('.controlsDiv').removeClass('hide')
  }
  $audio1[0].setAttribute('src', _src)
  $audio1[0].load()
}
function fnTitleAudioClick(obj) {
  if ($(obj).hasClass('hide')) {
    return false
  }
  $audio1[0].pause()
  $audio1[0].removeEventListener('timeupdate', fnUpdateTimer)
  $('#pButton .playImg').show()
  $('#pButton .pauseImg').hide()
  var titleAudioPath = $(obj).attr('data-audioSrc')
  $audio2[0].setAttribute('src', titleAudioPath)
  $audio2[0].load()
  $audio2[0].play()
  isMusic1Playing = false
  isMusic2Playing = true
}
function fnUpdateTimer() {
  var progressValue = Math.round(
    ($audio1[0].currentTime / $audio1[0].duration) * 100
  )
  slider.value = progressValue
}
function fnStartAudio(_state) {
  $audio2[0].pause()
  if (_state == 'play') {
    $('#pButton .playImg').hide()
    $('#pButton .pauseImg').show()
    $audio1[0].play()
    isMusic1Playing = true
  } else {
    $('#pButton .playImg').show()
    $('#pButton .pauseImg').hide()
    $audio1[0].pause()
    lastAudio = 0
    isMusic1Playing = false
  }
  $audio1[0].addEventListener('timeupdate', fnUpdateTimer)
}
function stopAudio() {
  $audio1[0].pause()
  $('#pButton .playImg').show()
  $('#pButton .pauseImg').hide()
  $audio1[0].currentTime = 0
  slider.value = 0
  isMusic1Playing = false
  $audio2[0].pause()
  isMusic2Playing = false
  lastAudio = 0
}
