function check() {
  let month = Number(document.getElementById("month").value)
  let year = Number(document.getElementById("year").value)
  let result

  switch(month) {
    case 1:
    case 3:
    case 7:
    case 8:
    case 10:
    case 12:
      result = "There are 31 days this month"
      break
    case 4:
    case 6:
    case 9:
    case 11:
      result = "There are 30 days this month"
      break
    case 2:
      let divisibleBy4 = (year % 4 == 0)
      let divisibleBy100 = (year % 100 == 0)
      let divisibleBy400 = (year % 400 == 0)

      if (divisibleBy4 && !divisibleBy100 || divisibleBy400) {
        result = "There are 29 days this month" 
      } else {
        result = "There are 28 days this month"
      }
      break
    default:
      result = "Month is invalid"
  }

  document.getElementById("day").innerHTML = result
}