//business logic
function TicketBuyer(){
  this.tickets = [];
}
function Ticket(movieName, viewerAge, movieTime, newRelease){
  this.movieName = movieName,
  this.viewerAge = viewerAge,
  this.movieTime = movieTime,
  this.newRelease = newRelease

}

Ticket.prototype.finalPrice = function(){
  let moviePrice = 10;
  if (this.selectedAgeGroup === "senior") {
    moviePrice -= 1;
  } else if {
    ()
  }
}

//UI logic
$(document).ready(function(){
  $("form#movies").submit(function(event) {
  const selectedMovieTitle = $("select#movieTitles").val();
  const seletedTimeOfDay = $("select#timeOfDay").val();
  const selectedAgeGroup = $("select#ageGroup").val();  
})
})
