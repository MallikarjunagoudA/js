//challenge 1 : your age in days:::
function age_in_days() {
  var birth_year = prompt("enter the your birth year:");
  var ageindays = (2020 - birth_year) * 365 + Math.floor(birth_year / 4);
  document.getElementById("ni").innerHTML = ageindays;
}
age_in_days();
