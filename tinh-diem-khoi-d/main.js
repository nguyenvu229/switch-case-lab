function tinhDiem() {
  let toan = Number(document.getElementById("toan").value)
  let van = Number(document.getElementById("van").value)
  let anh = Number(document.getElementById("anh").value)

  let index = document.getElementById("monThi").selectedIndex
  let khuVuc = document.getElementsByTagName("option")[index].value

  let tong = toan + van + anh

  switch (khuVuc) {
    case "kv1":
      tong += 0.75
      break
    case "kv2":
      tong += 0.25
      break
    case "kv2-nt":
      tong += 0.5
      break
    case "kv3":
      tong = tong
  }
  document.getElementById("result").innerHTML = "Tổng điểm thi ĐH khối D: " + tong
}