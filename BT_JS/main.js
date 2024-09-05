// tính tiền điện
function tinhTienDien() {
  const name = document.getElementById("name").value;
  const soKW = document.getElementById("soKW").value * 1;

  const tienDien1 = 500;
  const tienDien2 = 650;
  const tienDien3 = 850;
  const tienDien4 = 1100;
  const tienDien5 = 1300;
  let tienDien = 0;

  if (soKW <= 50) {
    tienDien = soKW * tienDien1;
  } else if (soKW <= 100) {
    tienDien = 50 * tienDien1 + (soKW - 50) * tienDien2;
  } else if (soKW <= 200) {
    tienDien = 50 * tienDien1 + 50 * tienDien2 + (soKW - 100) * tienDien3;
  } else if (soKW <= 350) {
    tienDien =
      50 * tienDien1 +
      50 * tienDien2 +
      100 * tienDien3 +
      (soKW - 200) * tienDien4;
  } else {
    tienDien =
      50 * tienDien1 +
      50 * tienDien2 +
      100 * tienDien3 +
      100 * tienDien4 +
      (soKW - 350) * tienDien5;
  }

  const result = document.getElementById("result");
  result.innerHTML = "Họ tên: " + name + " " + "Tiền điện: " + tienDien;
}
// Tính thuế thu nhập cá nhân

function tinhTienThue() {
  const name = document.getElementById("name").value;
  const soThue = document.getElementById("soThue").value * 1;
  const nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;

  let tongThue = 0;
}
