$(document).ready( function() {

  $('body').on("click", ".larg div h3", function(){
    if ($(this).children('span').hasClass('close')) {
      $(this).children('span').removeClass('close');
    }
    else {
      $(this).children('span').addClass('close');
    }
    $(this).parent().children('p').slideToggle(250);
  });

  $('body').on("click", "nav ul li a", function(){
      console.log("THIS");
    var title = $(this).data('title');
    $('.title').children('h2').html(title);
  });
});

function newPlanTab() {
    console.log("work");
    console.log(window.localStorage.getItem("name"));
    document.getElementById("new").innerHTML = "<li><a data-title="+window.localStorage.getItem("name")+">"+window.localStorage.getItem("name")+"</a></li>";
}

//COPIED STUFF FROM NEWPLANJS
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

function getInput() {
     document.location.href = "dashboard.html";
    var inputname = document.getElementById("name").value;
    window.localStorage.setItem("name",inputname);
    console.log(window.localStorage.getItem("name"));

}

