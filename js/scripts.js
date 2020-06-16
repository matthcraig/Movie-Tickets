//business logic
function TicketBuyer(){
  this.tickets = [];
}
TicketBuyer.prototype.addMovie = function(ticket){
  this.tickets.push(ticket);
}

Ticket.prototype.priceAdj = function(){
  let moviePrice = 10;
  if (this.viewerAge === "senior") {
    moviePrice -= 1;
  } else if (this.viewerAge === "kid") {
    moviePrice -= 1;
  } else if (this.movieTime === "morning"){
    moviePrice -= 1;
  } else if (this.newRelease === true){
    moviePrice += 1;
  } else {
  return this.moviePrice;
  }
}

function Ticket(movieName, viewerAge, movieTime, newRelease, moviePrice){
  this.movieName = movieName,
  this.viewerAge = viewerAge,
  this.movieTime = movieTime,
  this.newRelease = newRelease,
  this.moviePrice = moviePrice
}
Ticket.prototype.fullReadout = function(){
  return this.movieName + " " + this.viewerAge + " " + this.movieTime + " " + this.newRelease + " " + this.moviePrice;
}
//UI logic
$(document).ready(function(){
  $("form#movies").submit(function(event) {
  const inputMovieTitle = $("select#movieTitles").val();
  const inputTimeOfDay = $("select#timeOfDay").val();
  const inputAgeGroup = $("select#ageGroup").val(); 
  let moviePrice = 10;
  
  event.preventDefault();

  let boughtTicket = new Ticket(inputMovieTitle, inputAgeGroup, inputTimeOfDay, moviePrice);
  $(".movie-name").text(boughtTicket.movieName)
  $(".movie-time").text(boughtTicket.movieTime)
  $(".movie-price").text(boughtTicket.priceAdj())
  $("#results").show();

  });
});
