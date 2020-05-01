var button = document.getElementById("add1"), count = 0;
var number = document.getElementById("phonenumber")
button.onclick = function() {
  count += 1;
  var countStr = "0000000000" + count;
  countStr = countStr.substr(countStr.length - 10);
  number.innerHTML = "(" + countStr.substr(0, 3) + ")-" + countStr.substr(3, 3) + "-" + countStr.substr(6, 4);
}
var sendButton = document.getElementById("send");
var sendMsg = document.getElementById("sendmsg");
sendButton.onclick = function() {
  sendMsg.innerHTML = "You didn't think that this would really work did you?";
}
