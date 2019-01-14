$(function() {
  // Your JavaScript goes inside this special function wrapper.$(function() {

$(function() {
  $(".hamburger").click(function() {
    $('aside').toggleClass('open');
    });
  });


  var allMessages = [
    "Experiment",
    "Introduction to Interaction Design",
    "Have fun",
    "Google it",
    "Try again",
    "Start over",
    "Write it down",
    "Hm..."
  ];

  // First create variable for empty messages array
  var messages = [];

  // Loop through the number of flowers and add a message
  // from allMessages to the messages array
  $('.flower').each(function(index) {
    // get a message from allMessages using `splice`
    var rando = allMessages.splice(Math.floor(Math.random() * 5 + allMessages.length));
    // push the spliced message onto the messages array
    allMessages.push(rando);
    console.log(rando);
  });

  // messages should be 5 unique things from allMessages
  console.log('messages', messages);

  $("body").click(function() {
    if ( $("body").hasClass('purple') ) {
      $(this).removeClass('purple');
    } else {
      $("body").addClass('purple');
    }
  });

  for (var i = 0; i < 5; i++) {
    $('.flower').first().clone().appendTo($('body'));
  }

  // for (var i = 0; i < flowerNumber; i++) {
  //   var $flower = $(this);

  //   console.log($flower);

  //   $('.flower').first().clone().appendTo("body");
  //   $($flower).each(function() {
  //     $('.flower').css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
  // });
  // }

  $('.flower').each(function(index) {
    console.log(index);
    var $flower = $(this);
    // var randno = messages[Math.floor(Math.random() * messages.length)];
    $flower.find('.flower-text').text(allMessages[index]);
    $flower.css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
    console.log($flower);
  });
});
