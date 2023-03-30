//...................................counter.....................

    // Set the date we're counting down to
    var countDownDate = new Date("May 1, 2023 00:00:00").getTime();
    
    // // Update the countdown every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the countdown date
      var distance = countDownDate - now;
    
      // Calculate the days, hours, minutes and seconds left
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the HTML elements
      document.getElementById("day").innerHTML = days.toString().padStart(2, "0");
      document.getElementById("hour").innerHTML = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minute").innerHTML = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("second").innerHTML = seconds
        .toString()
        .padStart(2, "0");
    
      // If the countdown is over, show a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
      }
    }, 1000);