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
var ingredientCounter = 1;
var checkedForWhat = false;

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
  $("#preview").css("min-height", height + "px");
  $("#preview").css("width", width + "px");
  $("#preview").css("border-color", color);
}

$(document).ready(function () {
  var topLeftSelected = false;
  var topRightSelected = false;
  var bottomLeftSelected = false;
  var bottomRightSelected = false;
  $("#generateTemplate").click(function () {
    $("#chooseFormat").hide();
    $("#chooseSection").show();
    refreshPreview();
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

  $("#movableTopLeft").mousedown(function(){
    topLeftSelected = true;
  });

  $("#movableTopRight").mousedown(function(){
    topRightSelected = true;
  });

  $("#movableBottomLeft").mousedown(function(){
    bottomLeftSelected = true;
  });

  $("#movableBottomRight").mousedown(function(){
    bottomRightSelected = true;
  });

  $("*").mousemove(function(e){

    if(topLeftSelected){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      e.cancelBubble=true;
      e.returnValue=false;
      //Get Absolute position
      var pos = $("#dotRounded").offset();
      var offset = e.pageX - pos.left;
      if(offset < 0)
        offset = 0;
      if(offset > width)
        offset = width;
      $("#movableTopLeft").css("left",  offset - 8);
      radiusTopLeft1 = parseInt((offset / width)*100);
      radiusTopRight1 = 100 - radiusTopLeft1;
      $("input[name='topCircumference']").val(radiusTopLeft1);
      refreshPreview();
    }

    else if(topRightSelected){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      e.cancelBubble=true;
      e.returnValue=false;
      //Get Absolute position
      var pos = $("#dotRounded").offset();
      var offset = e.pageY - pos.top;
      if(offset < 0)
        offset = 0;
      if(offset > height)
        offset = height;
      $("#movableTopRight").css("top",  offset - 8);
      radiusTopRight2 = parseInt((offset / height)*100);
      radiusBottomRight2 = 100 - radiusTopRight2;
      $("input[name='rightCircumference']").val(radiusTopRight2);
      refreshPreview();
    }

    else if(bottomRightSelected){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      e.cancelBubble=true;
      e.returnValue=false;
      //Get Absolute position
      var pos = $("#dotRounded").offset();
      var offset = e.pageX - pos.left;
      if(offset < 0)
        offset = 0;
      if(offset > width)
        offset = width;
      $("#movableBottomRight").css("left",  offset - 8);
      radiusBottomLeft1 = parseInt((offset / width)*100);
      radiusBottomRight1 = 100 - radiusBottomLeft1;
      $("input[name='bottomCircumference']").val(radiusBottomRight1);
      refreshPreview();
    }

    else if(bottomLeftSelected){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      e.cancelBubble=true;
      e.returnValue=false;
      //Get Absolute position
      var pos = $("#dotRounded").offset();
      var offset = e.pageY - pos.top;
      if(offset < 0)
        offset = 0;
      if(offset > height)
        offset = height;
      $("#movableBottomLeft").css("top",  offset - 8);
      radiusTopLeft2 = parseInt((offset / height)*100);
      radiusBottomLeft2 = 100 - radiusTopLeft2;
      $("input[name='leftCircumference']").val(radiusBottomLeft2);
      refreshPreview();
    }

  });

  $("*").mouseup(function(){
    topLeftSelected = false;
    topRightSelected = false;
    bottomLeftSelected = false;
    bottomRightSelected = false;
  });

  $("#purpose").click(function() {
    if($(this).prop("checked") == true) {
      $(".bi-three-dots").removeAttr("hidden");
      $("input[name='activeIngredientPurpose']").removeAttr("hidden");
    }
    else if($(this).prop("checked") == false) {
      $(".bi-three-dots").attr("hidden", true);
      $("input[name='activeIngredientPurpose']").attr("hidden", true);
    }
  });

  $(document).on("input","input[name='activeIngredient']", function(e) {
    var order = e.target.id.split("_")[1];
    $("#activeIngredientDetail_" + order).text(e.target.value);
  });

  $(document).on("input","input[name='activeIngredientPurpose']", function(e) {
    var order = e.target.id.split("_")[1];
    $("#purposeDetail_" + order).text(e.target.value);
  });

  $("#addPurpose").click(function() {
    ingredientCounter++;
    $("#purposeList").append(`<div class="row">
    <input type="text" name="activeIngredient" id="activeIngredient_`+ingredientCounter+`"/>
    <svg hidden class="bi bi-three-dots" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"/>
    </svg>
    <input hidden type="text" name="activeIngredientPurpose" id="activeIngredientPurpose_`+ ingredientCounter+`" />
  </div>
    `);

    $(`<span class="activeIngredientDetail" id="activeIngredientDetail_`+ ingredientCounter +`"></span>
    <span class="purposeDetail" id="purposeDetail_`+ ingredientCounter +`"></span><br>`).insertBefore("#useCrossLine");
  });

  $("#uses").bind("input", function(e){
    
    $("#usesDetail").text(e.target.value);
  });

  $("#forWhat").click(function() {
    if($(this).prop("checked") == true) {
      $("#forWhatContent").removeAttr("hidden");
      checkedForWhat = true;
      $("#forWhatDetail").text("For External Use Only");
      $("#forWhatDetail").show();
    }
    else if($(this).prop("checked") == false) {
      $("#forWhatContent").attr("hidden", true);
      checkedForWhat = false;
      $("#forWhatDetail").hide();
    }
  });

  $("#forWhatContent").click(function(e) {
    var content = "For External Use Only";
    if(e.target.name =="forWhat" && checkedForWhat){
        content = "For " + e.target.id.substring(3) + " Use Only"
        $("#forWhatDetail").text(content);
        $("#forWhatDetail").show();
    }
    
  });

  $("#syndrome").click(function() {
    if($(this).prop("checked") == true) {
      $("#syndromeContent").removeAttr("hidden");
      $("#syndromeHeader").show();
      $("#syndromeDetail").show();
      $(".crossLineThin").eq(1).show();
    }
    else if($(this).prop("checked") == false) {
      $("#syndromeContent").attr("hidden", true);
      $("#syndromeHeader").hide();
      $("#syndromeDetail").hide();
      $(".crossLineThin").eq(1).hide();
    }
  });

  $("#syndromeContent").bind("input", function(e){
    $("#syndromeDetail").text(e.target.value);
  });

  $("#allergy").click(function() {
    if($(this).prop("checked") == true) {
      $("#allergyContent").removeAttr("hidden");
      $("#allergyHeader").show();
      $("#allergyDetail").show();
      $(".crossLineThin").eq(2).show();
    }
    else if($(this).prop("checked") == false) {
      $("#allergyContent").attr("hidden", true);
      $("#allergyHeader").hide();
      $("#allergyDetail").hide();
      $(".crossLineThin").eq(2).hide();
    }
  });

  $("#allergyContent").bind("input", function(e){
    $("#allergyDetail").text(e.target.value);
  });

  $("#flammable").click(function() {
    if($(this).prop("checked") == true) {
      $("#flammableContent").removeAttr("hidden");
      $("#flammableHeader").show();
      $("#flammableDetail").show();
      $(".crossLineThin").eq(3).show();
    }
    else if($(this).prop("checked") == false) {
      $("#flammableContent").attr("hidden", true);
      $("#flammableHeader").hide();
      $("#flammableDetail").hide();
      $(".crossLineThin").eq(3).hide();
    }
  });

  $("#flammableContent").bind("input", function(e){
    $("#flammableDetail").text(e.target.value);
  });

  $("#choking").click(function() {
    if($(this).prop("checked") == true) {
      $("#chokingContent").removeAttr("hidden");
      $("#chokingHeader").show();
      $("#chokingDetail").show();
      $(".crossLineThin").eq(4).show();
    }
    else if($(this).prop("checked") == false) {
      $("#chokingContent").attr("hidden", true);
      $("#chokingHeader").hide();
      $("#chokingDetail").hide();
      $(".crossLineThin").eq(4).hide();
    }
  });

  $("#chokingContent").bind("input", function(e){
    $("#chokingDetail").text(e.target.value);
  });

  $("#alchole").click(function() {
    if($(this).prop("checked") == true) {
      $("#alcholeContent").removeAttr("hidden");
      $("#alcholeHeader").show();
      $("#alcholeDetail").show();
      $(".crossLineThin").eq(5).show();
    }
    else if($(this).prop("checked") == false) {
      $("#alcholeContent").attr("hidden", true);
      $("#alcholeHeader").hide();
      $("#alcholeDetail").hide();
      $(".crossLineThin").eq(5).hide();
    }
  });

  $("#alcholeContent").bind("input", function(e){
    $("#alcholeDetail").text(e.target.value);
  });

  $("#stomach").click(function() {
    if($(this).prop("checked") == true) {
      $("#stomachContent").removeAttr("hidden");
      $("#stomachHeader").show();
      $("#stomachDetail").show();
      $(".crossLineThin").eq(6).show();
    }
    else if($(this).prop("checked") == false) {
      $("#stomachContent").attr("hidden", true);
      $("#stomachHeader").hide();
      $("#stomachDetail").hide();
      $(".crossLineThin").eq(6).hide();
    }
  });

  $("#stomachContent").bind("input", function(e){
    $("#stomachDetail").text(e.target.value);
  });

  $("#sore").click(function() {
    if($(this).prop("checked") == true) {
      $("#soreContent").removeAttr("hidden");
      $("#soreHeader").show();
      $("#soreDetail").show();
      $(".crossLineThin").eq(7).show();
    }
    else if($(this).prop("checked") == false) {
      $("#soreContent").attr("hidden", true);
      $("#soreHeader").hide();
      $("#soreDetail").hide();
      $(".crossLineThin").eq(7).hide();
    }
  });

  $("#soreContent").bind("input", function(e){
    $("#soreDetail").text(e.target.value);
  });

  $("#dosage").click(function() {
    if($(this).prop("checked") == true) {
      $("#dosageContent").removeAttr("hidden");
      $("#dosageHeader").show();
      $("#dosageDetail").show();
      $(".crossLineThin").eq(8).show();
    }
    else if($(this).prop("checked") == false) {
      $("#dosageContent").attr("hidden", true);
      $("#dosageHeader").hide();
      $("#dosageDetail").hide();
      $(".crossLineThin").eq(8).hide();
    }
  });

  $("#dosageContent").bind("input", function(e){
    $("#dosageDetail").text(e.target.value);
  });

  $("#std").click(function() {
    if($(this).prop("checked") == true) {
      $("#stdContent").removeAttr("hidden");
      $("#stdHeader").show();
      $("#stdDetail").show();
      $(".crossLineThin").eq(9).show();
    }
    else if($(this).prop("checked") == false) {
      $("#stdContent").attr("hidden", true);
      $("#stdHeader").hide();
      $("#stdDetail").hide();
      $(".crossLineThin").eq(9).hide();
    }
  });

  $("#stdContent").bind("input", function(e){
    $("#stdDetail").text(e.target.value);
  });

  $("#notuse").click(function() {
    if($(this).prop("checked") == true) {
      $("#notuseContent").removeAttr("hidden");
      $("#notuseHeader").show();
      $("#notuseDetail").show();
      $(".crossLineThin").eq(10).show();
    }
    else if($(this).prop("checked") == false) {
      $("#notuseContent").attr("hidden", true);
      $("#notuseHeader").hide();
      $("#notuseDetail").hide();
      $(".crossLineThin").eq(10).hide();
    }
  });

  $("#notuseContent").bind("input", function(e){
    $("#notuseDetail").text(e.target.value);
  });

  $("#youhave").click(function() {
    if($(this).prop("checked") == true) {
      $("#youhaveContent").removeAttr("hidden");
      $("#youhaveHeader").show();
      $("#youhaveDetail").show();
      $(".crossLineThin").eq(11).show();
    }
    else if($(this).prop("checked") == false) {
      $("#youhaveContent").attr("hidden", true);
      $("#youhaveHeader").hide();
      $("#youhaveDetail").hide();
      $(".crossLineThin").eq(11).hide();
    }
  });

  $("#youhaveContent").bind("input", function(e){
    $("#youhaveDetail").text(e.target.value);
  });

  $("#childhave").click(function() {
    if($(this).prop("checked") == true) {
      $("#childhaveContent").removeAttr("hidden");
      $("#childhaveHeader").show();
      $("#childhaveDetail").show();
      $(".crossLineThin").eq(12).show();
    }
    else if($(this).prop("checked") == false) {
      $("#childhaveContent").attr("hidden", true);
      $("#childhaveHeader").hide();
      $("#childhaveDetail").hide();
      $(".crossLineThin").eq(12).hide();
    }
  });

  $("#childhaveContent").bind("input", function(e){
    $("#childhaveDetail").text(e.target.value);
  });

  $("#youare").click(function() {
    if($(this).prop("checked") == true) {
      $("#youareContent").removeAttr("hidden");
      $("#youareHeader").show();
      $("#youareDetail").show();
      $(".crossLineThin").eq(13).show();
    }
    else if($(this).prop("checked") == false) {
      $("#youareContent").attr("hidden", true);
      $("#youareHeader").hide();
      $("#youareDetail").hide();
      $(".crossLineThin").eq(13).hide();
    }
  });

  $("#youareContent").bind("input", function(e){
    $("#youareDetail").text(e.target.value);
  });

  $("#childis").click(function() {
    if($(this).prop("checked") == true) {
      $("#childisContent").removeAttr("hidden");
      $("#childisHeader").show();
      $("#childisDetail").show();
      $(".crossLineThin").eq(14).show();
    }
    else if($(this).prop("checked") == false) {
      $("#childisContent").attr("hidden", true);
      $("#childisHeader").hide();
      $("#childisDetail").hide();
      $(".crossLineThin").eq(14).hide();
    }
  });

  $("#childisContent").bind("input", function(e){
    $("#childisDetail").text(e.target.value);
  });

  $("#whenUsingThis").click(function() {
    if($(this).prop("checked") == true) {
      $("#whenUsingThisContent").removeAttr("hidden");
      $("#whenUsingThisHeader").show();
      $("#whenUsingThisDetail").show();
      $(".crossLineThin").eq(15).show();
    }
    else if($(this).prop("checked") == false) {
      $("#whenUsingThisContent").attr("hidden", true);
      $("#whenUsingThisHeader").hide();
      $("#whenUsingThisDetail").hide();
      $(".crossLineThin").eq(15).hide();
    }
  });

  $("#whenUsingThisContent").bind("input", function(e){
    $("#whenUsingThisDetail").text(e.target.value);
  });

  $("#stopUse").click(function() {
    if($(this).prop("checked") == true) {
      $("#stopUseContent").removeAttr("hidden");
      $("#stopUseHeader").show();
      $("#stopUseDetail").show();
      $(".crossLineThin").eq(16).show();
    }
    else if($(this).prop("checked") == false) {
      $("#stopUseContent").attr("hidden", true);
      $("#stopUseHeader").hide();
      $("#stopUseDetail").hide();
      $(".crossLineThin").eq(16).hide();
    }
  });

  $("#stopUseContent").bind("input", function(e){
    $("#stopUseDetail").text(e.target.value);
  });

  $("#pregnant").click(function() {
    if($(this).prop("checked") == true) {
      $("#pregnantContent").removeAttr("hidden");
      $("#pregnantHeader").show();
      $("#pregnantDetail").show();
      $(".crossLineThin").eq(17).show();
    }
    else if($(this).prop("checked") == false) {
      $("#pregnantContent").attr("hidden", true);
      $("#pregnantHeader").hide();
      $("#pregnantDetail").hide();
      $(".crossLineThin").eq(17).hide();
    }
  });

  $("#pregnantContent").bind("input", function(e){
    $("#pregnantDetail").text(e.target.value);
  });

  $("#keepOut").click(function() {
    if($(this).prop("checked") == true) {
      $("#keepOutContent").removeAttr("hidden");
      $("#keepOutHeader").show();
      $("#keepOutDetail").show();
      $(".crossLineThin").eq(18).show();
    }
    else if($(this).prop("checked") == false) {
      $("#keepOutContent").attr("hidden", true);
      $("#keepOutHeader").hide();
      $("#keepOutDetail").hide();
      $(".crossLineThin").eq(18).hide();
    }
  });

  $("#keepOutContent").bind("input", function(e){
    $("#keepOutDetail").text(e.target.value);
  });

  $("#inActive").click(function() {
    if($(this).prop("checked") == true) {
      $("#inActiveContent").removeAttr("hidden");
      $("#inActiveDetail").show();
    }
    else if($(this).prop("checked") == false) {
      $("#inActiveContent").attr("hidden", true);
      $("#inActiveDetail").hide();
    }
  });

  $("#inActiveContent").bind("input", function(e){
    $("#inActiveDetail").text(e.target.value);
  });

  $("#directions").bind("input", function(e) {
    $("#directionsDetail").text(e.target.value);
  })
});
