function checkPrice() {
  let result
  let fruit = document.getElementById("fruit").value
  fruit = fruit.toLowerCase()
  
  switch(fruit) {
    case "ổi":
      result = "Ổi: 20000 VND/kg"
      break
    case "dưa hấu":
    result = "Dưa Hấu: 20000 VND/kg"
      break
    case "táo":
      result = "Táo: 30000 VND/kg"
      break
    case "xoài":
      result = "Xoài: 30000 VND/kg"
      break
    case "cam":
      result = "Cam: 40000 VND/kg"
      break
    case "chôm chôm":
      result = "Chôm Chôm: 40000 VND/kg"
      break
    case "măng cụt":
      result = "Măng Cụt: 50000 VND/kg"
      break
    default:
      result = "Sorry! We don't have this kind of fruit."
  }

  document.getElementById("price").innerHTML = result
}