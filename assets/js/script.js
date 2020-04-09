var radiusTopLeft1 = 0;
var radiusTopLeft2 = 100;
var radiusTopRight1 = 100;
var radiusTopRight2 = 0;
var radiusBottomRight1 = 0;
var radiusBottomRight2 = 100;
var radiusBottomLeft1 = 100;
var radiusBottomLeft2 = 0;
var height = 500;
var width = 500;
var color = "#000000";

function refreshPreview() {
  $("#templatePreview").css(
    "border-radius",
    radiusTopLeft1 +
      "% " +
      radiusTopRight1 +
      "% " +
      radiusBottomRight1 +
      "% " +
      radiusBottomLeft1 +
      "% /" +
      radiusTopLeft2 +
      "% " +
      radiusTopRight2 +
      "% " +
      radiusBottomRight2 +
      "% " +
      radiusBottomLeft2 +
      "%"
  );
  $("#templatePreview").css("height", height + "px");
  $("#templatePreview").css("width", width + "px");
  $("#templatePreview").css("border-color", color);
  $("#preview").css(
    "border-radius",
    radiusTopLeft1 +
      "% " +
      radiusTopRight1 +
      "% " +
      radiusBottomRight1 +
      "% " +
      radiusBottomLeft1 +
      "% /" +
      radiusTopLeft2 +
      "% " +
      radiusTopRight2 +
      "% " +
      radiusBottomRight2 +
      "% " +
      radiusBottomLeft2 +
      "%"
  );
  $("#dotRounded").css("height", height);
  $("#dotRounded").css("width", width);
  $("#dotRounded").css("top", "-" + height + "px");

  $("#preview").find(".top.left").css("width", radiusTopLeft1 + "%");
  $("#preview").find(".top.right").css("width", radiusTopRight1 + "%");
  $("#preview").find(".bottom.right").css("width", radiusBottomRight1 + "%");
  $("#preview").find(".bottom.left").css("width", radiusBottomLeft1 + "%");
  $("#preview").find(".top.left").css("height", radiusTopLeft2 + "%");
  $("#preview").find(".top.right").css("height", radiusTopRight2 + "%");
  $("#preview").find(".bottom.right").css("height", radiusBottomRight2 + "%");
  $("#preview").find(".bottom.left").css("height", radiusBottomLeft2 + "%");
  if (radiusTopLeft2 > radiusTopRight2) {
    $("#preview .bottom.right").after($("#preview .bottom.left"));
  }
  $("#preview").css("height", height + "px");
  $("#preview").css("width", width + "px");
  $("#preview").css("border-color", color);
}

$(document).ready(function () {
  $("#generateTemplate").click(function () {
    $("#chooseFormat").hide();
    $("#chooseSection").show();
    refreshPreview();
  });

  $("#mainHeader").bind("input", function (e) {
    // $("#preview").contents().last()[0].textContent = e.target.value;
    $("#mainHeaderPreview").text(e.target.value);
  });

  $("#subHeader1").bind("input", function (e) {
    $("#subHeaderPreview1").text(e.target.value);
  });

  $("#subHeader2").bind("input", function (e) {
    $("#subHeaderPreview2").text(e.target.value);
  });

  $("#subContent1").bind("input", function (e) {
    $("#subContentPreview1").text(e.target.value);
  });
  $(".propertyValue").bind("input", function (e) {
    switch (e.target.name) {
      case "topCircumference":
        radiusTopLeft1 = e.target.value;
        radiusTopRight1 = 100 - parseInt(e.target.value);
        var topOffset = (width * radiusTopLeft1) / 100 - 8;
        $("#movableTopLeft").css("left", topOffset + "px");
        refreshPreview();
        break;
      case "rightCircumference":
        radiusTopRight2 = e.target.value;
        radiusBottomRight2 = 100 - parseInt(e.target.value);
        var rightOffset = (height * radiusTopRight2) / 100 - 8;
        $("#movableTopRight").css("top", rightOffset + "px");
        refreshPreview();
        break;
      case "bottomCircumference":
        radiusBottomRight1 = e.target.value;
        radiusBottomLeft1 = 100 - parseInt(e.target.value);
        var bottomOffset = (width * radiusBottomLeft1) / 100 - 8;
        $("#movableBottomRight").css("left", bottomOffset + "px");
        refreshPreview();
        break;
      case "leftCircumference":
        radiusBottomLeft2 = e.target.value;
        radiusTopLeft2 = 100 - parseInt(e.target.value);
        var leftOffset = (height * radiusTopLeft2) / 100 - 8;
        $("#movableBottomLeft").css("top", leftOffset + "px");
        refreshPreview();
        break;
      case "height":
        height = e.target.value;
        $("#movableBottomRight").css("top", height - 8 + "px");
        $("#movableBottomLeft").css("top", height - 8 + "px");
        refreshPreview();
        break;
      case "width":
        width = e.target.value;
        $("#movableTopRight").css("left", width - 8 + "px");
        $("#movableBottomRight").css("left", width - 8 + "px");
        refreshPreview();
      case "color":
        color = e.target.value;
        refreshPreview();
        break;
    }
  });
});