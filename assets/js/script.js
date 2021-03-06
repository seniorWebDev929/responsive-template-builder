var radiusTopLeft1 = 0;
var radiusTopLeft2 = 100;
var radiusTopRight1 = 100;
var radiusTopRight2 = 0;
var radiusBottomRight1 = 0;
var radiusBottomRight2 = 100;
var radiusBottomLeft1 = 100;
var radiusBottomLeft2 = 0;
var height = 800;
var width = 700;
var color = "#000000";
var ingredientCounter = 1;
var checkedForWhat = false;
var thickness = 2;
var usesCounter = 1;
var doNotUseCounter = 1;
var youhaveCounter = 1;
var childhaveCounter = 1;
var stopUseCounter = 1;
var directionsCounter = 1;
var otherCounter = 1;
var padding = 0;
var purposeClicked = false;
var fontSize = {
  "mainHeader": 28,
  "subHeader": 20,
  "subSection": 18,
  "content": 18
}

var fontFamily = {
  "mainHeader": "Georgia",
  "subHeader": "Georgia",
  "subSection": "Georgia",
  "content": "Georgia"
}
var bolded = {
  "mainHeader": "bold",
  "subHeader": "bold",
  "subSection": "bold",
  "content": "400"
}
var italiced = {
  "mainHeader": "normal",
  "subHeader": "normal",
  "subSection": "normal",
  "content": "normal"
}
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
  $("#templatePreview").css("border-width", thickness);
  $(".crossLineThick").css("border-width", thickness)
  $(".crossLineThick").css("margin-top", padding+"px");
  // $(".crossLineThick").css("margin-bottom", padding+"px");
  // $(".mainHeader, .subHeader, .crossLineThin, .subSection, .content").css("margin-left", padding+"px");
  // $(".mainHeader, .subHeader, .crossLineThin, .subSection, .content").css("margin-right", padding+"px");
  // $("#purposeHeader").css("margin-left", "0");
  // $(".purposeDetail").css("maring-left", "0");
  $("#templatePreview").css("padding-left", padding+"px");
  $("#templatePreview").css("padding-right", padding+"px");
  $(".crossLineThick").css("margin-bottom", padding+"px");
  $(".crossLineThick").css("margin-left", "-"+padding+"px");
  $("#dotRounded").css("height", height);
  $("#dotRounded").css("width", width);
  $("#dotRounded").css("top", "-" + height + "px");

  $("#templatePreview").find(".top.left").css("width", radiusTopLeft1 + "%");
  $("#templatePreview").find(".top.right").css("width", radiusTopRight1 + "%");
  $("#templatePreview").find(".bottom.right").css("width", radiusBottomRight1 + "%");
  $("#templatePreview").find(".bottom.left").css("width", radiusBottomLeft1 + "%");
  $("#templatePreview").find(".top.left").css("height", radiusTopLeft2 + "%");
  $("#templatePreview").find(".top.right").css("height", radiusTopRight2 + "%");
  $("#templatePreview").find(".bottom.right").css("height", radiusBottomRight2 + "%");
  $("#templatePreview").find(".bottom.left").css("height", radiusBottomLeft2 + "%");
  if (radiusTopLeft2 > radiusTopRight2) {
    $("#templatePreview .bottom.right").after($("#templatePreview .bottom.left"));
  }
  $("#templatePreview").css("height", height + "px");
  $("#templatePreview").css("width", width + "px");
  $("#templatePreview").css("border-color", color);
 
  $(".mainHeader").css("font-family", fontFamily.mainHeader);
  $(".subHeader").css("font-family", fontFamily.subHeader);
  $(".subSection").css("font-family", fontFamily.subSection);
  $(".content").css("font-family", fontFamily.content);
  $(".mainHeader").css("font-size", fontSize.mainHeader + "px");
  $(".subHeader").css("font-size", fontSize.subHeader + "px");
  $(".subSection").css("font-size", fontSize.subSection + "px");
  $(".content").css("font-size", fontSize.content + "px");
  $(".mainHeader").css("font-weight", bolded.mainHeader);
  $(".subHeader").css("font-weight", bolded.subHeader);
  $(".subSection").css("font-weight", bolded.subSection);
  $(".content").css("font-weight", bolded.content);
  $(".mainHeader").css("font-style", italiced.mainHeader);
  $(".subHeader").css("font-style", italiced.subHeader);
  $(".subSection").css("font-style", italiced.subSection);
  $(".content").css("font-style", italiced.content);
  calculatePurposePosition();
  calculatePurposeDetailPosition();
  addDottedLine();
}

function calculatePurposePosition() {
  var purposeHeaderWidth = $("#purposeHeader").width();
  var topOffset = $("#activeIngredientHeader").offset().top - $("#templatePreview").offset().top;
  var top = radiusTopRight2 * height / 100;
  var left = radiusTopRight1 * width / 100;
  var offsetFromRight;
  if(top > topOffset){
    offsetFromRight = left*(top - topOffset)/(1.7*top);
  }
  else {
    offsetFromRight = 0;
  }
  var offsetFromLeft =  width - offsetFromRight - purposeHeaderWidth;
  if(padding<15)
    $("#purposeHeader").css("left", offsetFromLeft);
  else if(padding>=15)
    $("#purposeHeader").css("left", offsetFromLeft - padding + 15);
  // $("#purposeHeader").css("left", offsetFromLeft);
};

function calculatePurposeDetailPosition() {
  for(let i = 1; i<=ingredientCounter; i++) {
    if($("#activeIngredientDetail_"+i)[0]){
      var purposeDetailWidth = $("#purposeDetail_"+i).width();
      var topOffset = $("#activeIngredientDetail_"+i).offset().top - $("#templatePreview").offset().top;
      var top = radiusTopRight2 * height / 100;
      var left = radiusTopRight1 * width / 100;
      var offsetFromRight;
      if(top > topOffset){
        offsetFromRight = left*(top - topOffset)/(1.7*top);
      }
      else {
        offsetFromRight = 0;
      }
      var offsetFromLeft =  width - offsetFromRight - purposeDetailWidth;
      if(padding<15)
        $("#purposeDetail_"+i).css("left", offsetFromLeft);
      else if(padding>=15)
        $("#purposeDetail_"+i).css("left", offsetFromLeft - padding + 15);
    } else {
      continue;
    }
  }
}

function addDottedLine(){
  for(let i = 1 ; i<=ingredientCounter; i++){
    if($("#activeIngredientDetail_"+i)[0]){
      addSpecificDottedLine(i)
    }
    
  }
}

function addSpecificDottedLine(order) {
  clearDottedLine(order);
  // while($("#dottedLine_"+order).width() + $("#activeIngredientDetail_"+order).width() < parseFloat($("#purposeDetail_"+order).css("left"))){
  //   // console.log($("#dottedLine_"+i).width());
  //   $("#dottedLine_"+order).append(".");
  // }
}

function clearDottedLine(i) {
  $("#dottedLine_"+i).text("");
}

$(document).ready(function () {
  var topLeftSelected = false;
  var topRightSelected = false;
  var bottomLeftSelected = false;
  var bottomRightSelected = false;

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
      case "thickness":
        thickness = e.target.value;
        refreshPreview();
        break;
      case "padding":
        padding = e.target.value;
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

  $("#settingCollapseRight").click(function(e) {
    $("#templateSetting").show();
    $(this).hide();
    $("#settingCollapseDown").show();
  });

  $("#settingCollapseDown").click(function() {
    $("#templateSetting").hide();
    $(this).hide();
    $("#settingCollapseRight").show();
  });

  $("#contentCollapseRight").click(function(e) {
    $("#chooseSectionsAndFillTheDetails").show();
    $(this).hide();
    $("#contentCollapseDown").show();
  });

  $("#contentCollapseDown").click(function() {
    $("#chooseSectionsAndFillTheDetails").hide();
    $(this).hide();
    $("#contentCollapseRight").show();
  });

  $(".fontFamilySetting").change(function() {
    var selected = $(this).parent().parent()[0].id.split("_")[0];
    // $("."+selected).css("font-family", $(this).children("option:selected").val())
    fontFamily[selected] = $(this).children("option:selected").val();
    refreshPreview();
  });

  $(".fontSizeSetting").bind("input", function(e) {
    var selected = $(this).parent().parent()[0].id.split("_")[0];
    // $("."+selected).css("font-size", e.target.value + "px");
    fontSize[selected] = e.target.value;
    refreshPreview();
  });

  $(".bold").click(function(e) {
    var selected = $(this).parent().parent()[0].id.split("_")[0];
    console.log($(this).attr('bolded'))
    if($(this).attr('bolded') == "true"){
      // $("."+selected).css("font-weight", "400");
      bolded[selected] = "400";
      $(this).removeAttr("bolded");
      $(this).css("border", "none");
      refreshPreview();
    } else {
      // $("."+selected).css("font-weight", "bold");
      bolded[selected] = "bold";
      $(this).attr("bolded", "true");
      $(this).css("border", "1px solid black");
      refreshPreview();
    }
  });

  $(".italic").click(function(e) {
    var selected = $(this).parent().parent()[0].id.split("_")[0];
    if($(this).attr('italiced') == "true"){
      // $("."+selected).css("font-style", "normal");
      italiced[selected] = "normal";
      $(this).removeAttr("italiced");
      $(this).css("border", "none");
      refreshPreview();
    } else {
      // $("."+selected).css("font-style", "italic");
      italiced[selected] = "italic";
      $(this).attr("italiced","true");
      $(this).css("border", "1px solid black");
      refreshPreview();
    }
  });

  $("#purpose").click(function() {
    if($(this).prop("checked") == true) {
      purposeClicked = true;
      $(".bi-three-dots").removeAttr("hidden");
      $("input[name='activeIngredientPurpose']").removeAttr("hidden");
      calculatePurposePosition();
      // calculatePurposeDetailPosition();
      $("#purposeHeader").show();
      $(".purposeDetail").show();
      addDottedLine();
    }
    else if($(this).prop("checked") == false) {
      purposeClicked = false;
      $(".bi-three-dots").attr("hidden", true);
      $("input[name='activeIngredientPurpose']").attr("hidden", true);
      $("#purposeHeader").hide();
      $(".purposeDetail").hide();
      $(".dottedLine").text("");
    }
  });

  $(document).on("input","input[name='activeIngredient']", function(e) {
    var order = e.target.id.split("_")[1];
    $("#activeIngredientDetail_" + order).text(e.target.value);
    refreshPreview();
    addSpecificDottedLine(order);
  });

  $(document).on("input","input[name='activeIngredientPurpose']", function(e) {
    var order = e.target.id.split("_")[1];
    $("#purposeDetail_" + order).text(e.target.value);
    
    calculatePurposeDetailPosition();
    // clearDottedLine(order);
    addSpecificDottedLine(order);
    refreshPreview();
  });

  $("#addPurpose").click(function() {
    ingredientCounter++;
    $("#purposeList").append(`
    <div class="row">
      <input type="text" name="activeIngredient" id="activeIngredient_`+ingredientCounter+`"/>
      <svg hidden class="bi bi-three-dots" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"/>
      </svg>
      <div>
        <input hidden type="text" name="activeIngredientPurpose" id="activeIngredientPurpose_`+ ingredientCounter+`" />
        <i class="fa fa-minus-square-o removeIngredient" id="removeIngredient_`+ ingredientCounter +`"></i>
      </div>    
    </div>
    `);
    
    $(`<span class="activeIngredientDetail content" id="activeIngredientDetail_`+ ingredientCounter +`"></span>
    <span class="dottedLine" id="dottedLine_`+ingredientCounter+`"></span>
    <span class="purposeDetail content" id="purposeDetail_`+ ingredientCounter +`"></span><br>`).insertBefore("#useCrossLine");
    if(purposeClicked) {
      $(".bi-three-dots").removeAttr("hidden");
      $("#activeIngredientPurpose_"+ingredientCounter).removeAttr("hidden");
    }
  });

  $(document).on("click", ".removeIngredient", function(e) {
    var counter = e.target.id.split("_")[1];
    $(this).parent().parent()[0].remove();
    $(".activeIngredientDetail, .purposeDetail").each(function(index) {
      if($(this).attr("id").includes(counter)) {
        if($(this).hasClass("activeIngredientDetail")){
          $(this).next("span").remove();
        }
        if($(this).hasClass("purposeDetail")){
          $(this).next("br").remove();
        }
        $(this).remove();
      }
    })
  });

  $("#usesAdd").click(function() {
    usesCounter++;
    $("#usesList").append(`
      <div class="row" id="uses_` + usesCounter + `">
        <input type="text" class="uses" />
        <i class="fa fa-minus-square-o removeBtn removeUses"></i>
      </div>
    `);
    $(`<br><span id="usesDetail_`+usesCounter+`" class="content"></span>`).insertBefore("#warningCrossLine");
  });

  $(document).on("input", ".uses", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#usesDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $(document).on("click", ".removeUses", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#usesDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
  });

  $("#directionsAdd").click(function() {
    directionsCounter++;
    $("#directionsList").append(`
      <div class="row" id="directions_` + directionsCounter + `">
        <input type="text" class="directions" />
        <i class="fa fa-minus-square-o removeBtn removeDirections"></i>
      </div>
    `);
    $(`<br><span id="directionsDetail_`+directionsCounter+`" class="content"></span>`).insertBefore("#otherCrossLine");
    refreshPreview();
  });

  $(document).on("input", ".directions", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#directionsDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $(document).on("click", ".removeDirections", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#directionsDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
  });

  $("#otherAdd").click(function() {
    otherCounter++;
    $("#otherList").append(`
      <div class="row" id="other_` + otherCounter + `">
        <input type="text" class="other" />
        <i class="fa fa-minus-square-o removeBtn removeOther"></i>
      </div>
    `);
    $(`<br><span id="otherDetail_`+otherCounter+`" class="content"></span>`).insertBefore("#inActiveCrossLine");
    refreshPreview();
  });

  $(document).on("input", ".other", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#otherDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $(document).on("click", ".removeOther", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#otherDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
  });

  $("#doNotUseAdd").click(function() {
    doNotUseCounter++;
    $("#doNotUseList").append(`
      <div class="row" id="doNotUse_`+doNotUseCounter+`">
        <input type="text" class="row doNotUseContent"/>
        <i class="fa fa-minus-square-o removeDoNotUse" ></i>
      </div>
    `);
    $(`<br><span id="notuseDetail_`+doNotUseCounter+`" class="warningDetail content"></span>`).insertBefore("#askDoctorCrossLine");
    $("#notuseDetail_"+doNotUseCounter).show();
    refreshPreview();
  });

  $(document).on("click", ".removeDoNotUse", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#notuseDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
  });

  $("#youhaveAdd").click(function() {
    youhaveCounter++;
    $("#youhaveList").append(`
      <div class="row" id="youhave_`+youhaveCounter+`">
        <input type="text" class="row youhaveContent"/>
        <i class="fa fa-minus-square-o removeYouHave" ></i>
      </div>
    `);
    $(`<br><span id="youhaveDetail_`+youhaveCounter+`" class="warningDetail content"></span>`).insertBefore("#ifYourChildHasCrossLine");
    $("#youhaveDetail_"+youhaveCounter).show();
    refreshPreview();
  });

  $(document).on("click", ".removeYouHave", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#youhaveDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
  });

  $("#childhaveAdd").click(function() {
    childhaveCounter++;
    $("#childhaveList").append(`
      <div class="row" id="childhave_`+childhaveCounter+`">
        <input type="text" class="row childhaveContent"/>
        <i class="fa fa-minus-square-o removeChildHave" ></i>
      </div>
    `);
    $(`<br><span id="childhaveDetail_`+childhaveCounter+`" class="warningDetail content"></span>`).insertBefore("#youareCrossLine");
    $("#childhaveDetail_"+childhaveCounter).show();
    refreshPreview();
  });

  $(document).on("click", ".removeChildHave", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#childhaveDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
  });

  $("#stopUseAdd").click(function() {
    stopUseCounter++;
    $("#stopUseList").append(`
      <div class="row" id="stopUse_`+stopUseCounter+`">
        <input type="text" class="row stopUseContent"/>
        <i class="fa fa-minus-square-o removeStopUse" ></i>
      </div>
    `);
    $(`<br><span id="stopUseDetail_`+stopUseCounter+`" class="warningDetail content"></span>`).insertBefore("#pregnantCrossLine");
    $("#stopUseDetail_"+stopUseCounter).show();
    refreshPreview();
  });

  $(document).on("click", ".removeStopUse", function(e) {
    var counter = $(this).parent().attr("id").split("_")[1];
    var detail = $("#stopUseDetail_"+counter);
    detail.prev().remove();
    detail.remove();
    $(this).parent().remove();
    refreshPreview();
  });

  $("#forWhat").click(function() {
    if($(this).prop("checked") == true) {
      $("#forWhatContent").removeAttr("hidden");
      checkedForWhat = true;
      $("<br>").insertBefore("#forWhatDetail");
      $("#forWhatDetail").text("For External Use Only");
      $("#forWhatDetail").show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#forWhatDetail").prev("br").remove();
      $("#forWhatContent").attr("hidden", true);
      checkedForWhat = false;
      $("#forWhatDetail").hide();
      refreshPreview();
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
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#syndromeContent").attr("hidden", true);
      $("#syndromeHeader").hide();
      $("#syndromeDetail").hide();
      $(".crossLineThin").eq(1).hide();
      refreshPreview();
    }
  });

  $("#syndromeContent").bind("input", function(e){
    $("#syndromeDetail").text(e.target.value);
    refreshPreview();
  });

  $("#allergy").click(function() {
    if($(this).prop("checked") == true) {
      $("#allergyContent").removeAttr("hidden");
      $("#allergyHeader").show();
      $("#allergyDetail").show();
      $(".crossLineThin").eq(2).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#allergyContent").attr("hidden", true);
      $("#allergyHeader").hide();
      $("#allergyDetail").hide();
      $(".crossLineThin").eq(2).hide();
      refreshPreview();
    }
  });

  $("#allergyContent").bind("input", function(e){
    $("#allergyDetail").text(e.target.value);
    refreshPreview();
  });

  $("#flammable").click(function() {
    if($(this).prop("checked") == true) {
      $("#flammableContent").removeAttr("hidden");
      $("#flammableHeader").show();
      $("#flammableDetail").show();
      $(".crossLineThin").eq(3).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#flammableContent").attr("hidden", true);
      $("#flammableHeader").hide();
      $("#flammableDetail").hide();
      $(".crossLineThin").eq(3).hide();
      refreshPreview();
    }
  });

  $("#flammableContent").bind("input", function(e){
    $("#flammableDetail").text(e.target.value);
    refreshPreview();
  });

  $("#choking").click(function() {
    if($(this).prop("checked") == true) {
      $("#chokingContent").removeAttr("hidden");
      $("#chokingHeader").show();
      $("#chokingDetail").show();
      $(".crossLineThin").eq(4).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#chokingContent").attr("hidden", true);
      $("#chokingHeader").hide();
      $("#chokingDetail").hide();
      $(".crossLineThin").eq(4).hide();
      refreshPreview();
    }
  });

  $("#chokingContent").bind("input", function(e){
    $("#chokingDetail").text(e.target.value);
    refreshPreview();
  });

  $("#alchole").click(function() {
    if($(this).prop("checked") == true) {
      $("#alcholeContent").removeAttr("hidden");
      $("#alcholeHeader").show();
      $("#alcholeDetail").show();
      $(".crossLineThin").eq(5).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#alcholeContent").attr("hidden", true);
      $("#alcholeHeader").hide();
      $("#alcholeDetail").hide();
      $(".crossLineThin").eq(5).hide();
      refreshPreview();
    }
  });

  $("#alcholeContent").bind("input", function(e){
    $("#alcholeDetail").text(e.target.value);
    refreshPreview();
  });

  $("#stomach").click(function() {
    if($(this).prop("checked") == true) {
      $("#stomachContent").removeAttr("hidden");
      $("#stomachHeader").show();
      $("#stomachDetail").show();
      $(".crossLineThin").eq(6).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#stomachContent").attr("hidden", true);
      $("#stomachHeader").hide();
      $("#stomachDetail").hide();
      $(".crossLineThin").eq(6).hide();
      refreshPreview();
    }
  });

  $("#stomachContent").bind("input", function(e){
    $("#stomachDetail").text(e.target.value);
    refreshPreview();
  });

  $("#sore").click(function() {
    if($(this).prop("checked") == true) {
      $("#soreContent").removeAttr("hidden");
      $("#soreHeader").show();
      $("#soreDetail").show();
      $(".crossLineThin").eq(7).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#soreContent").attr("hidden", true);
      $("#soreHeader").hide();
      $("#soreDetail").hide();
      $(".crossLineThin").eq(7).hide();
      refreshPreview();
    }
  });

  $("#soreContent").bind("input", function(e){
    $("#soreDetail").text(e.target.value);
    refreshPreview();
  });

  $("#dosage").click(function() {
    if($(this).prop("checked") == true) {
      $("#dosageContent").removeAttr("hidden");
      $("#dosageHeader").show();
      $("#dosageDetail").show();
      $(".crossLineThin").eq(8).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#dosageContent").attr("hidden", true);
      $("#dosageHeader").hide();
      $("#dosageDetail").hide();
      $(".crossLineThin").eq(8).hide();
      refreshPreview();
    }
  });

  $("#dosageContent").bind("input", function(e){
    $("#dosageDetail").text(e.target.value);
    refreshPreview();
  });

  $("#std").click(function() {
    if($(this).prop("checked") == true) {
      $("#stdContent").removeAttr("hidden");
      $("#stdHeader").show();
      $("#stdDetail").show();
      $(".crossLineThin").eq(9).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#stdContent").attr("hidden", true);
      $("#stdHeader").hide();
      $("#stdDetail").hide();
      $(".crossLineThin").eq(9).hide();
      refreshPreview();
    }
  });

  $("#stdContent").bind("input", function(e){
    $("#stdDetail").text(e.target.value);
    refreshPreview();
  });

  $("#notuse").click(function() {
    if($(this).prop("checked") == true) {
      $("<br>").insertAfter("#notuseHeader");
      $("#doNotUseList").removeAttr("hidden");
      $("#doNotUseAdd").removeAttr("hidden");
      $("#notuseHeader").show();
      for(let i=1; i<= doNotUseCounter; i++)
        $("#notuseDetail_"+i).show();
      $(".crossLineThin").eq(10).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#notuseHeader").next("br").remove();
      $("#doNotUseList").attr("hidden", true);
      $("#doNotUseAdd").attr("hidden", true);
      $("#notuseHeader").hide();
      for(let i=1; i<= doNotUseCounter; i++){
        $("#notuseDetail_"+i).hide();
        $("#notuseDetail_"+i).prev().hide();
      }
      $(".crossLineThin").eq(10).hide();
      refreshPreview();
    }
  });

  $(document).on("input", ".doNotUseContent", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#notuseDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $("#youhave").click(function() {
    if($(this).prop("checked") == true) {
      $("<br>").insertAfter("#youhaveHeader");
      $("#youhaveList").removeAttr("hidden");
      $("#youhaveAdd").removeAttr("hidden");
      $("#youhaveHeader").show();
      for(let i=1; i<= youhaveCounter; i++)
        $("#youhaveDetail_"+i).show();
      $(".crossLineThin").eq(11).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#youhaveHeader").next("br").remove();
      $("#youhaveList").attr("hidden", true);
      $("#youhaveAdd").attr("hidden", true);
      $("#youhaveHeader").hide();
      for(let i=1; i<= youhaveCounter; i++){
        $("#youhaveDetail_"+i).hide();
        $("#youhaveDetail_"+i).prev().hide();
      }
      $(".crossLineThin").eq(11).hide();
      refreshPreview();
    }
  });

  $(document).on("input", ".youhaveContent", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#youhaveDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $("#youhaveContent").bind("input", function(e){
    $("#youhaveDetail").text(e.target.value);
    refreshPreview();
  });

  $("#childhave").click(function() {
    if($(this).prop("checked") == true) {
      $("<br>").insertAfter("#childhaveHeader");
      $("#childhaveList").removeAttr("hidden");
      $("#childhaveAdd").removeAttr("hidden");
      $("#childhaveHeader").show();
      for(let i=1; i<= childhaveCounter; i++)
        $("#childhaveDetail_"+i).show();
      $(".crossLineThin").eq(12).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#childhaveHeader").next("br").remove();
      $("#childhaveList").attr("hidden", true);
      $("#childhaveAdd").attr("hidden", true);
      $("#childhaveHeader").hide();
      for(let i=1; i<= childhaveCounter; i++){
        $("#childhaveDetail_"+i).hide();
        $("#childhaveDetail_"+i).prev().hide();
      }
      $(".crossLineThin").eq(12).hide();
      refreshPreview();
    }
  });

  $(document).on("input", ".childhaveContent", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#childhaveDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $("#youare").click(function() {
    if($(this).prop("checked") == true) {
      $("#youareContent").removeAttr("hidden");
      $("#youareHeader").show();
      $("#youareDetail").show();
      $(".crossLineThin").eq(13).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#youareContent").attr("hidden", true);
      $("#youareHeader").hide();
      $("#youareDetail").hide();
      $(".crossLineThin").eq(13).hide();
      refreshPreview();
    }
  });

  $("#youareContent").bind("input", function(e){
    $("#youareDetail").text(e.target.value);
    refreshPreview();
  });

  $("#childis").click(function() {
    if($(this).prop("checked") == true) {
      $("#childisContent").removeAttr("hidden");
      $("#childisHeader").show();
      $("#childisDetail").show();
      $(".crossLineThin").eq(14).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#childisContent").attr("hidden", true);
      $("#childisHeader").hide();
      $("#childisDetail").hide();
      $(".crossLineThin").eq(14).hide();
      refreshPreview();
    }
  });

  $("#childisContent").bind("input", function(e){
    $("#childisDetail").text(e.target.value);
    refreshPreview();
  });

  $("#whenUsingThis").click(function() {
    if($(this).prop("checked") == true) {
      $("#whenUsingThisContent").removeAttr("hidden");
      $("#whenUsingThisHeader").show();
      $("#whenUsingThisDetail").show();
      $(".crossLineThin").eq(15).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#whenUsingThisContent").attr("hidden", true);
      $("#whenUsingThisHeader").hide();
      $("#whenUsingThisDetail").hide();
      $(".crossLineThin").eq(15).hide();
      refreshPreview();
    }
  });

  $("#whenUsingThisContent").bind("input", function(e){
    $("#whenUsingThisDetail").text(e.target.value);
    refreshPreview();
  });

  $("#stopUse").click(function() {
    if($(this).prop("checked") == true) {
      $("<br>").insertAfter("#stopUseHeader");
      $("#stopUseList").removeAttr("hidden");
      $("#stopUseAdd").removeAttr("hidden");
      $("#stopUseHeader").show();
      for(let i=1; i<= stopUseCounter; i++)
        $("#stopUseDetail_"+i).show();
      $(".crossLineThin").eq(16).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#stopUseHeader").next("br").remove();
      $("#stopUseList").attr("hidden", true);
      $("#stopUseAdd").attr("hidden", true);
      $("#stopUseHeader").hide();
      for(let i=1; i<= stopUseCounter; i++){
        $("#stopUseDetail_"+i).hide();
        $("#stopUseDetail_"+i).prev().hide();
      }
      $(".crossLineThin").eq(16).hide();
      refreshPreview();
    }
  });

  $(document).on("input", ".stopUseContent", function(e){
    var counter = $(this).parent().attr("id").split("_")[1];
    $("#stopUseDetail_"+counter).text(e.target.value);
    refreshPreview();
  });

  $("#pregnant").click(function() {
    if($(this).prop("checked") == true) {
      $("#pregnantContent").removeAttr("hidden");
      $("#pregnantHeader").show();
      $("#pregnantDetail").show();
      $(".crossLineThin").eq(17).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#pregnantContent").attr("hidden", true);
      $("#pregnantHeader").hide();
      $("#pregnantDetail").hide();
      $(".crossLineThin").eq(17).hide();
      refreshPreview();
    }
  });

  $("#pregnantContent").bind("input", function(e){
    $("#pregnantDetail").text(e.target.value);
    refreshPreview();
  });

  $("#keepOut").click(function() {
    if($(this).prop("checked") == true) {
      $("#keepOutContent").removeAttr("hidden");
      $("#keepOutHeader").show();
      $("#keepOutDetail").show();
      $(".crossLineThin").eq(18).show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#keepOutContent").attr("hidden", true);
      $("#keepOutHeader").hide();
      $("#keepOutDetail").hide();
      $(".crossLineThin").eq(18).hide();
      refreshPreview();
    }
  });

  $("#keepOutContent").bind("input", function(e){
    $("#keepOutDetail").text(e.target.value);
    refreshPreview();
  });

  $("#inActive").click(function() {
    if($(this).prop("checked") == true) {
      $("#inActiveContent").removeAttr("hidden");
      $("#inActiveHeader").show();
      $("#inActiveDetail").show();
      refreshPreview();
    }
    else if($(this).prop("checked") == false) {
      $("#inActiveContent").attr("hidden", true);
      $("#inActiveHeader").hide();
      $("#inActiveDetail").hide();
      refreshPreview();
    }
  });

  $("#inActiveContent").bind("input", function(e){
    $("#inActiveDetail").text(e.target.value);
    refreshPreview();
  });

});
