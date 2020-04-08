var radiusTopLeft1 = 5;
var radiusTopLeft2 = 5;
var radiusTopRight1 = 5;
var radiusTopRight2 = 5;
var radiusBottomRight1 = 5;
var radiusBottomRight2 = 5;
var radiusBottomLeft1 = 5;
var radiusBottomLeft2 = 5;
var height = 500;
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
  $("#preview")
    .find(".top.left")
    .css("width", radiusTopLeft1 + "%");
  $("#preview")
    .find(".top.right")
    .css("width", radiusTopRight1 + "%");
  $("#preview")
    .find(".bottom.right")
    .css("width", radiusBottomRight1 + "%");
  $("#preview")
    .find(".bottom.left")
    .css("width", radiusBottomLeft1 + "%");
  $("#preview")
    .find(".top.left")
    .css("height", radiusTopLeft2 + "%");
  $("#preview")
    .find(".top.right")
    .css("height", radiusTopRight2 + "%");
  $("#preview")
    .find(".bottom.right")
    .css("height", radiusBottomRight2 + "%");
  $("#preview")
    .find(".bottom.left")
    .css("height", radiusBottomLeft2 + "%");
  if (radiusTopLeft2 > radiusTopRight2) {
    $("#preview .bottom.right").after($("#preview .bottom.left"));
  }
  $("#preview").css("height", height + "px");
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
        refreshPreview();
        break;
      case "rightCircumference":
        radiusTopRight2 = e.target.value;
        radiusBottomRight2 = 100 - parseInt(e.target.value);
        refreshPreview();
        break;
      case "bottomCircumference":
        radiusBottomRight1 = e.target.value;
        radiusBottomLeft1 = 100 - parseInt(e.target.value);
        refreshPreview();
        break;
      case "leftCircumference":
        radiusBottomLeft2 = e.target.value;
        radiusTopLeft2 = 100 - parseInt(e.target.value);
        refreshPreview();
        break;
      case "height":
        height = e.target.value;
        refreshPreview();
        break;
      case "color":
        color = e.target.value;
        refreshPreview();
        break;
    }
  });
});
