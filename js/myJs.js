$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        
    }, 600);
})

function firstQuestion(){
    console.log('firstQuestion');
    $('.content').hide();
    Swal.fire({
        title: 'He lu Thảooo !',
        text: 'Chúc mừng sinh nhật emmm',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        console.log('content');
        var x = document.getElementById("audio");
        x.play();
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    console.log('switchButton');
    var audio = new Audio('../sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
    console.log('kk');
}
// move random button póition
function moveButton() {
    console.log('moveButton');
    var audio = new Audio('../sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * 500;
    var y = Math.random() * 500;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});

// generate text in input
function textGenerate() {
    var n = "";
    var text = " Tại vì anh đẹp trai, dễ thương :<<<<<<< ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('../sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Nói cho anh lý do em thích anh đi =)))',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: ' url("img/iput-bg.jpg")',
        backdrop: `
             
              url("https://i.gifer.com/Diy.gif")
             
            `,
        showCancelButton: true,
        cancelButtonText: 'Thôi ngại lém : <img src="https://i.gifer.com/TL2v.gif" style="width: 40px"/> ',
        confirmButtonColor: 'black',
        cancelButtonColor: 'black',
        confirmButtonColor: 'black',
        cancelButtonColor: 'black',
        confirmButtonText: 'Gửi cho anh <img src="https://i.gifer.com/88Nk.gif"  style="width: 40px"/> ',
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Okiiiii lun <3',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Anh biết mà ^^ Yêu em 300.000',
                text: "Cuối tuần anh qua đón đi chơi nhaa :v Còn giờ thì chờ gì nữa mà không inbox cho anh đi nàooooo",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://www.facebook.com/stevejobsson/';
                  }
            })
        }
    })
})
