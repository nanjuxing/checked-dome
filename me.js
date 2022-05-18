window.onload = function () {
  let checkbox = document.getElementsByTagName("input");
  function createDiv(startX, startY, widthX, heightY) {
    var oDiv = document.createElement("div");
    oDiv.setAttribute("id", "createDiv");

    oDiv.style.left = startX + "px"; // 指定创建的DIV在文档中距离左侧的位置
    oDiv.style.top = startY + "px"; // 指定创建的DIV在文档中距离顶部的位置
    oDiv.style.border = "1px dashed red"; // 设置边框
    oDiv.style.position = "absolute"; // 为新创建的DIV指定绝对定位
    oDiv.style.width = widthX + "px"; // 指定宽度
    oDiv.style.height = heightY + "px"; // 指定高度
    document.body.appendChild(oDiv);

    oDiv.addEventListener("mouseenter", function () {
      for (let i = 0; i < checkbox.length; i++) {
        let check = checkbox[i];
        var s1 = check.offsetWidth + check.offsetLeft;
        var st = check.offsetHeight + check.offsetTop;
        if (
          s1 > startX &&
          st > startY &&
          check.offsetLeft < startX + widthX &&
          check.offsetTop < startY + heightY
        ) {
          check.checked = true;
        }
      }
    });
  }

  document.onmousedown = function (ev) {
    var oEvent = ev || event;

    /*检测id为createDiv的div框是否存在，存在就删除*/
    if (document.getElementById("createDiv") != null) {
      document.body.removeChild(document.getElementById("createDiv"));
    }
    //鼠标点击（down）的初始位置X，Y
    var startX = oEvent.clientX;
    var startY = oEvent.clientY;

    document.onmouseup = function (ev) {
      //创建div的width、height
      var widX = Math.abs(ev.clientX - startX);
      var heiY = Math.abs(ev.clientY - startY);
      if (ev.clientY > startY && ev.clientY > startY) {
        createDiv(startX, startY, widX, heiY);
      } else {
        createDiv(ev.clientX, ev.clientY, widX, heiY);
      }
      setTimeout(() => {
        let juxing = document.getElementById("createDiv");
        if (juxing) {
          juxing.remove();
          for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
              checkbox[i].checked = false;
            }
          }
        }
      }, 1000);
    };
  };
};
