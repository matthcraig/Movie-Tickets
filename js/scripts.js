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

ticket

//UI logic
$(document).ready(function(){
  $("form#movies").submit(function(event) {
  const selectedMovieTitle = $("select#movieTitles").val();
  const seletedTimeOfDay = $("select#timeOfDay").val();
  const selectedAgeGroup = $("select#ageGroup").val();  
})
})
let moviePrice = 10;
movies.forEach(function(){
if (this.selectedAgeGroup === "senior" && selectedTimeOfDay === "evening" && newRelease === true) {
  return (moviePrice - 1); 
} else {
  
}
})