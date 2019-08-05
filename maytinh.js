function tinhcong() {
    let so1 = parseFloat(document.getElementById("so1").value);
    let so2 = parseFloat(document.getElementById("so2").value);
    let kq = so1 + so2;
    document.getElementById("ketqua").innerHTML = "Result: " + kq;
}
function tinhtru() {
    let so1 = parseFloat(document.getElementById("so1").value);
    let so2 = parseFloat(document.getElementById("so2").value);
    let kq = so1 - so2;
    document.getElementById("ketqua").innerHTML = "Result: " + kq;}
function tinhnhan() {
    let so1 = parseFloat(document.getElementById("so1").value);
    let so2 = parseFloat(document.getElementById("so2").value);
    let kq = so1 * so2;
    document.getElementById("ketqua").innerHTML = "Result: " + kq;}
function tinhchia() {
    let so1 = parseFloat(document.getElementById("so1").value);
    let so2 = parseFloat(document.getElementById("so2").value);
    let kq = so1 / so2;
    document.getElementById("ketqua").innerHTML = "Result: " + kq;}

