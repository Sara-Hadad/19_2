let items = document.querySelectorAll("#items-list > li");

items.forEach((item) => {
    if ($('.showAnsBtn').hasClass('disabled')) {
    $(item).prop("draggable", false);
    console.log('false');
    }else{
        $(item).prop("draggable", true);
    }
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("drop", dropped);
    item.addEventListener("dragenter", cancelDefault);
    item.addEventListener("dragover", cancelDefault);
});

function dragStart(e) {
    var index = $(e.target).index();
    e.dataTransfer.setData("text/plain", index);
}

function dropped(e) {
    cancelDefault(e);

    // get new and old index
    let oldIndex = e.dataTransfer.getData("text/plain");
    let target = $(e.target);
    let newIndex = target.index();

    // remove dropped items at old place
    let dropped = $(this).parent().children().eq(oldIndex);

    // insert the dropped items at new place
    if (newIndex <= oldIndex) {
        target.before(dropped);
        console.log('before');
    } else {
        target.after(dropped);
        console.log('after');

    }
}

function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function showVal(){
    var sentense = $('li');
    items.forEach((item) => {
        $(item).prop("draggable", false);
        console.log('false');
    });
    for (let i = 0; i < sentense.length; i++) {
       if (sentense[i].innerHTML == ans[i]) {
        sentense.eq(i).css('color','green');
       }else{
        sentense.eq(i).css('color',' red');
       } 
    }
    $('li').css('cursor', 'default')
}
const ans = [`<span style="font-family: AronuiB;font-size:42px;">d&nbsp;&nbsp;</span>The children planted some seeds.` , `<span style="font-family: AronuiB;font-size:42px;">e&nbsp;&nbsp;</span>Each week, the plants grew.` ,`<span style="font-family: AronuiB;font-size:42px;">c&nbsp;&nbsp;</span>Cassie saw yellow flowers.`,`<span style="font-family: AronuiB;font-size:42px;">a&nbsp;&nbsp;</span>Mummy walked around the garden.`,`<span style="font-family: AronuiB;font-size:42px;">b&nbsp;&nbsp;</span>The children ate the tomatoes.`]
console.log(ans);
function showAns() {
    if ($('.showAnsBtn').hasClass('disabled')) {
      return false
    }
 
    var sentense = $('li');
    sentense[0].innerHTML =ans[0];
    sentense[1].innerHTML =ans[1];
    sentense[2].innerHTML =ans[2];
    sentense[3].innerHTML =ans[3];
    sentense[4].innerHTML =ans[4];
    $('li').css('color','green');
     items.forEach((item) => {
        $(item).prop("draggable", false);
        console.log('false');
    });
    $('.showAnsBtn').addClass('disabled')
    $('#showOne').addClass('disabled')
    // $('li').addClass('disabled')
    $('li').css('cursor', 'default')
  }
function reloadBtnAll() {
    var sentense = $('li');
    sentense[0].innerHTML =ans[3];
    sentense[1].innerHTML =ans[4];
    sentense[2].innerHTML =ans[2];
    sentense[3].innerHTML =ans[0];
    sentense[4].innerHTML =ans[1];
    $('li').css('color','black');
     items.forEach((item) => {
        $(item).prop("draggable", true);
        console.log('false');
    });
    $('.showAnsBtn').removeClass('disabled')
    $('#showOne').removeClass('disabled')
    $('li').removeClass('disabled')
    $('li').css('cursor', 'pointer')
}