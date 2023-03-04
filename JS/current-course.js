const courseNames = [
  "Webutveckling",
  "Avancerad .NET",
  "Systemtestning",
  "Avancerad systemutveckling ASP.NET",
  "LIA",
];

const dateNow = new Date();
function setCurrentCourse() {
  if (dateNow > new Date("12 February, 2023")) {
    return "Webutveckling";
  } else if (
    (dateNow > new Date("12 February, 2023")) &
    (dateNow < new Date("2 April, 2023"))
  ) {
    return "Avancerad .NET";
  } else {
    return "x";
  }
}
document.getElementById("current-course").innerHTML = setCurrentCourse();
