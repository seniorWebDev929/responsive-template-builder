<?php?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="./assets/css/style.css" />
    <title>Share Point</title>
  </head>
  <body>
    <div id="chooseFormat">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="row sectionTitle">
            <label>Template Settings</label>
            <i class="fa fa-angle-right" id="settingCollapseRight"></i>
            <i class="fa fa-angle-down" id="settingCollapseDown"></i>
          </div>
          <div id="templateSetting">
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Top Circumference(%)</label>
                <label class="propertyContent">Mesure around your container where you want the top of your label to be</label>
              </div>
              <div class="col-3">
                <input type="number" name="topCircumference" class="propertyValue" value="0" min="0" max="100"/>
              </div>
            </div>
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Right Circumference(%)</label>
                <label class="propertyContent">Mesure around your container where you want the Right of your label to be</label>
              </div>
              <div class="col-3">
                <input type="number" name="rightCircumference" class="propertyValue" value="0" min="0" max="100"/>
              </div>
            </div>
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Bottom Circumference(%)</label>
                <label class="propertyContent">Mesure around your container where you want the Bottom of your label to be</label>
              </div>
              <div class="col-3">
                <input type="number" name="bottomCircumference" class="propertyValue" value="0" min="0" max="100"/>
              </div>
            </div>
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Left Circumference(%)</label>
                <label class="propertyContent" >Mesure around your container where you want the Left of your label to be</label>
              </div>
              <div class="col-3">
                <input type="number" name="leftCircumference" class="propertyValue" value="0" min="0" max="100"/>
              </div>
            </div>
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Height(px)</label>
                <label class="propertyContent">Mesure the distance between the top circumference and bottomcircumference</label>
              </div>
              <div class="col-3">
                <input type="number" name="height" class="propertyValue" value="500" />
              </div>
            </div>
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Width(px)</label>
                <label class="propertyContent">Mesure the distance between the left circumference and rightcircumference</label>
              </div>
              <div class="col-3">
                <input type="number" name="width" class="propertyValue" value="500" />
              </div>
            </div>
  
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Container Outline</label>
                <label class="propertyContent">Show the actual circumference of your container alongside yourdesired label coverage</label>
              </div>
              <div class="col-3">
                <input type="color" name="color" class="propertyValue" />
              </div>
            </div>
            <div class="property row">
              <div class="col-9">
                <label class="propertyHeader">Container Thickness</label>
                <label class="propertyContent">Measure of container border Thickness</label>
              </div>
              <div class="col-3">
                <input type="number" name="thickness" class="propertyValue" value="1" min="0" max="20" />
              </div>
            </div>
            <div id="fontSetting">
              <div class="row" id="mainHeader_FontSetting" style="justify-content: space-between;">
                <label class="propertyHeader">Header Font, Size, Style</label>
                <div class="row">
                  <select class="fontFamilySetting">
                    <option>Georgia</option>
                    <option>Palatino</option>
                    <option>Times New Roman</option>
                    <option>Arial</option>
                    <option>Arial Black</option>
                    <option>Comic Sans</option>
                    <option>Impact</option>
                    <option>Lucida Sans</option>
                    <option>Tahoma</option>
                    <option>Trebuchet</option>
                    <option>Verdana</option>
                    <option>Courier</option>
                    <option>Lucida Console</option>
                  </select>
                  <input class="fontSizeSetting" type="number" value="28" min="1" max="50"/>
                  <div class="bold" bolded="true">B</div>
                  <div class="italic" >I</div>
                </div>
              </div>
              <div class="row" id="subHeader_FontSetting" style="justify-content: space-between;">
                <label class="propertyHeader">Sub Header Font, Size, Style</label>
                <div class="row">
                  <select class="fontFamilySetting">
                    <option>Georgia</option>
                    <option>Palatino</option>
                    <option>Times New Roman</option>
                    <option>Arial</option>
                    <option>Arial Black</option>
                    <option>Comic Sans</option>
                    <option>Impact</option>
                    <option>Lucida Sans</option>
                    <option>Tahoma</option>
                    <option>Trebuchet</option>
                    <option>Verdana</option>
                    <option>Courier</option>
                    <option>Lucida Console</option>
                  </select>
                  <input class="fontSizeSetting" type="number" value="25" min="1" max="50"/>
                  <div class="bold" bolded="true">B</div>
                  <div class="italic" >I</div>
                </div>
              </div>
              <div class="row" id="subSection_FontSetting" style="justify-content: space-between;">
                <label class="propertyHeader">Sub Section Font, Size, Style</label>
                <div class="row">
                  <select class="fontFamilySetting">
                    <option>Georgia</option>
                    <option>Palatino</option>
                    <option>Times New Roman</option>
                    <option>Arial</option>
                    <option>Arial Black</option>
                    <option>Comic Sans</option>
                    <option>Impact</option>
                    <option>Lucida Sans</option>
                    <option>Tahoma</option>
                    <option>Trebuchet</option>
                    <option>Verdana</option>
                    <option>Courier</option>
                    <option>Lucida Console</option>
                  </select>
                  <input class="fontSizeSetting" type="number" value="18" min="1" max="50"/>
                  <div class="bold" bolded="true">B</div>
                  <div class="italic" >I</div>
                </div>
              </div>
              <div class="row" id="content_FontSetting" style="justify-content: space-between;">
                <label class="propertyHeader">Content Font, Size, Style</label>
                <div class="row">
                  <select class="fontFamilySetting">
                    <option>Georgia</option>
                    <option>Palatino</option>
                    <option>Times New Roman</option>
                    <option>Arial</option>
                    <option>Arial Black</option>
                    <option>Comic Sans</option>
                    <option>Impact</option>
                    <option>Lucida Sans</option>
                    <option>Tahoma</option>
                    <option>Trebuchet</option>
                    <option>Verdana</option>
                    <option>Courier</option>
                    <option>Lucida Console</option>
                  </select>
                  <input class="fontSizeSetting" type="number" value="18" min="1" max="50"/>
                  <div class="bold"  style="border: none;">B</div>
                  <div class="italic" >I</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- <button class="btn btn-primary" id="generateTemplate">Generate Template</button> -->
          <div class="row sectionTitle">
            <label>Content Details</label>
            <i class="fa fa-angle-right" id="contentCollapseRight"></i>
            <i class="fa fa-angle-down" id="contentCollapseDown"></i>
          </div>
          <div  id="chooseSectionsAndFillTheDetails">
            
            <div class="row" style="justify-content: space-between; ">
              <div>Active Ingredient</div>
              <div>
                <input type="checkbox" id="purpose"/>
                <label for="purpose" style="margin-right: 95px; cursor: pointer;">Purpose</label>
                <i class="fa fa-plus-square-o" id="addPurpose"></i>
              </div>
            </div>
            <div id="purposeList">
              <div class="row">
                <input type="text" name="activeIngredient" id="activeIngredient_1"/>
                <svg hidden class="bi bi-three-dots" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <input type="text" name="activeIngredientPurpose" id="activeIngredientPurpose_1" hidden/>
                  <i class="fa fa-minus-square-o removeIngredient" id="removeIngredient_1"></i>
                </div>
              </div>
            </div>
            <div class="row" style="align-items:baseline;">
              Uses
              <i class="fa fa-plus-square-o addBtn" id="usesAdd"></i>
            </div>
            <div id="usesList">
              <div class="row" id="uses_1">
                <input type="text" class="uses" id="uses"/>
                <i class="fa fa-minus-square-o removeBtn removeUses"></i>
              </div>
            </div>
            
            <div class="row subHeaderInput">
              Warnings
            </div>
            <div class="row warningContent">
              <input type="checkbox" id="forWhat"/>
              <label for="forWhat">For</label>
              <div id="forWhatContent" hidden>
                <input id="forExternal" name="forWhat" type="radio" checked />
                <label for="forExternal">External</label>
                <input id="forRectal" name="forWhat" type="radio" />
                <label for="forRectal">rectal</label>
                <input id="forVaginal" name="forWhat" type="radio" />
                <label for="forVaginal">vaginal</label>
              </div>
            </div>
            <div class="row warningContent">
              <input id="syndrome" type="checkbox"/>
              <label for="syndrome">Reye's syndrome warning</label>
            </div>
            <input id="syndromeContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="allergy" type="checkbox" />
              <label for="allergy">Allergy Alert</label>
            </div>
            <input id="allergyContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="flammable" type="checkbox" />
              <label for="flammable">Flammable</label>
            </div>
            <input id="flammableContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="choking" type="checkbox" />
              <label for="choking">Choking</label>
            </div>
            <input type="text" id="chokingContent" class="row" hidden />
            <div class="row warningContent">
              <input id="alchole" type="checkbox" />
              <label for="alchole">Alchole warning</label>
            </div>
            <input id="alcholeContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="stomach" type="checkbox" />
              <label for="stomach">Stomach bleeding warning</label>
            </div>
            <input id="stomachContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="sore" type="checkbox" />
              <label for="sore">Sore throat warning</label>
            </div>
            <input id="soreContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="dosage" type="checkbox" />
              <label for="dosage">Dosage warning</label>
            </div>
            <input id="dosageContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="std" type="checkbox" />
              <label for="std">Sexually transmitted diseases (STD) alert</label>
            </div>
            <input id="stdContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="notuse" type="checkbox" />
              <label for="notuse">Do not use</label>
              <i class="fa fa-plus-square-o addBtn" id="doNotUseAdd" hidden></i>
            </div>
            <div id="doNotUseList" hidden>
              <div class="row" id="doNotUse_1">
                <input type="text" class="row doNotUseContent"/>
                <i class="fa fa-minus-square-o removeDoNotUse" ></i>
              </div>
            </div>
            
            <div>
              <label class="row">Ask a doctor before use</label>
              <div class="row warningContent indentedRow">
                <input type="checkbox"  id="youhave"/>
                <label for="youhave">if you have</label>
                <i class="fa fa-plus-square-o addBtn" id="youhaveAdd" hidden></i>
              </div>
              <div id="youhaveList" hidden>
                <div class="row" id="youhave_1">
                  <input type="text" class="youhaveContent"/>
                  <i class="fa fa-minus-square-o removeYouHave" ></i>
                </div>
              </div>
              <div class="row warningContent indentedRow">
                <input type="checkbox"  id="childhave"/>
                <label for="childhave">if your child have</label>
                <i class="fa fa-plus-square-o addBtn" id="childhaveAdd" hidden></i>
              </div>
              <div id="childhaveList" hidden>
                <div class="row" id="childhave_1">
                  <input type="text" class="childhaveContent"/>
                  <i class="fa fa-minus-square-o removeChildHave" ></i>
                </div>
              </div>
            </div>
            <div>
              <label class="row">Ask a doctor or pharmacist before use</label>
              <div class="row warningContent indentedRow">
                <input type="checkbox"  id="youare"/>
                <label for="youare">if you are</label>
              </div>
              <input type="text" id="youareContent" hidden/>
              <div class="row warningContent indentedRow">
                <input type="checkbox"  id="childis"/>
                <label for="childis">if your child is</label>
              </div>
              <input type="text" id="childisContent" hidden/>
            </div>
            <div class="row warningContent">
              <input id="whenUsingThis" type="checkbox" />
              <label for="whenUsingThis">When using this product</label>
            </div>
            <input id="whenUsingThisContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="stopUse" type="checkbox" />
              <label for="stopUse">Stop use and ask a doctor if</label>
              <i class="fa fa-plus-square-o addBtn" id="stopUseAdd" hidden></i>
            </div>
            <div id="stopUseList" hidden>
              <div class="row" id="stopUse_1">
                <input class="stopUseContent" type="text" />
                <i class="fa fa-minus-square-o removeStopUse" ></i>
              </div>
            </div>
            
            <div class="row warningContent">
              <input id="pregnant" type="checkbox" />
              <label for="pregnant">If pregnant or breast-feeding</label>
            </div>
            <input id="pregnantContent" type="text" class="row" hidden />
            <div class="row warningContent">
              <input id="keepOut" type="checkbox" />
              <label for="keepOut">Keep out of reach of children</label>
            </div>
            <input id="keepOutContent" type="text" class="row" hidden />
            <div class="row" style="align-items:baseline;">
              Directions
              <i class="fa fa-plus-square-o addBtn" id="directionsAdd"></i>
            </div>
            <div id="directionsList">
              <div class="row" id="directions_1">
                <input type="text" class="directions"/>
                <i class="fa fa-minus-square-o removeBtn removeDirections"></i>
              </div>
            </div>
            <div class="row" style="align-items:baseline;">
              Other information
              <i class="fa fa-plus-square-o addBtn" id="otherAdd"></i>
            </div>
            <div id="otherList">
              <div class="row" id="other_1">
                <input type="text" class="other"/>
                <i class="fa fa-minus-square-o removeBtn removeOther"></i>
              </div>
            </div>
            <div class="row warningContent">
              <input id="inActive" type="checkbox" />
              <label for="inActive">InActive Ingredient</label>
            </div>
            <input id="inActiveContent" type="text" class="row" hidden />
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" id="templatePreviewContainer">
          <div id="templatePreview">
            <div class="shape top left"></div>
            <div class="shape top right"></div>
            <div class="shape bottom right"></div>
            <div class="shape bottom left"></div>
            <span id="mainHeader" class="mainHeader">Drug Facts</span><br>
            <div class="crossLineThin" style="display: block;"></div>
            <span class="subHeader" id="activeIngredientHeader">Active Ingredient</span>
            <span class="subHeader" id="purposeHeader">Purpose</span><br>
            <span class="activeIngredientDetail" id="activeIngredientDetail_1"></span>
            <span class="purposeDetail" id="purposeDetail_1"></span><br>
            <div class="crossLineThick" id="useCrossLine"></div>
            <span class="subHeader">Use</span><br>
            <span id="usesDetail_1" class="content"></span>
            <div class="crossLineThick" id="warningCrossLine"></div>
            
            <span class="subHeader">Warnings</span><br>
            <span id="forWhatDetail" class="warningDetail subSection"></span>
            <div class="crossLineThin" ></div>
            <span id="syndromeHeader" class="warningHeader subSection">Reye's syndrome warning</span>
            <span id="syndromeDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="allergyHeader" class="warningHeader subSection">Allergy Alert</span>
            <span id="allergyDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="flammableHeader" class="warningHeader subSection">Flammable</span>
            <span id="flammableDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="chokingHeader" class="warningHeader subSection">Choking</span>
            <span id="chokingDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="alcholeHeader" class="warningHeader subSection">Alchole Warning</span>
            <span id="alcholeDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="stomachHeader" class="warningHeader subSection">Stomach bleeding warning</span>
            <span id="stomachDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="soreHeader" class="warningHeader subSection">Sore throat warning</span>
            <span id="soreDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="dosageHeader" class="warningHeader subSection">Dosage warning</span>
            <span id="dosageDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="stdHeader" class="warningHeader subSection" >Sexually transmitted diseases (STDs) alert</span>
            <span id="stdDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="notuseHeader" class="warningHeader subSection">Do not use</span><br>
            <span id="notuseDetail_1" class="warningDetail content"></span>
            <div class="crossLineThin" id="askDoctorCrossLine"></div>
            <span id="youhaveHeader" class="warningHeader subSection">Ask a doctor before use if you have</span><br>
            <span id="youhaveDetail_1" class="warningDetail content"></span>
            <div class="crossLineThin" id="ifYourChildHasCrossLine"></div>
            <span id="childhaveHeader" class="warningHeader subSection">Ask a doctor before use if the child has</span><br>
            <span id="childhaveDetail_1" class="warningDetail content"></span>
            <div class="crossLineThin" id="youareCrossLine"></div>
            <span id="youareHeader" class="warningHeader subSection">Ask a doctor or pharmacist before use if you are</span>
            <span id="youareDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="childisHeader" class="warningHeader subSection">Ask a doctor or pharmacist before use if the child is</span>
            <span id="childisDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="whenUsingThisHeader" class="warningHeader subSection">When using this product</span>
            <span id="whenUsingThisDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="stopUseHeader" class="warningHeader subSection">Stop use and ask a doctor if</span><br>
            <span id="stopUseDetail_1" class="warningDetail content"></span>
            <div class="crossLineThin" id="pregnantCrossLine"></div>
            <span id="pregnantHeader" class="warningHeader subSection">If pregnant or breast-feeding</span>
            <span id="pregnantDetail" class="warningDetail content"></span>
            <div class="crossLineThin"></div>
            <span id="keepOutHeader" class="warningHeader subSection">Keep out of reach of children</span>
            <span id="keepOutDetail" class="warningDetail content"></span>
            
            <div class="crossLineThick"></div>
            <span class="subHeader">Directions</span><br>
            <span id="directionsDetail_1" class="content"></span>
            <div class="crossLineThick" id="otherCrossLine"></div>
            <span class="subHeader">Other information</span><br>
            <span id="otherDetail_1" class="content"></span>
            <div class="crossLineThick" id="inActiveCrossLine"></div>
            <span class="subHeader" id="inActiveHeader">Inactive Ingredients</span>
            <span id="inActiveDetail" class="warningDetail content"></span>
          </div>
          <div id="dotRounded">
            <div class="movablePoint" id="movableTopLeft"></div>
            <div class="movablePoint" id="movableTopRight"></div>
            <div class="movablePoint" id="movableBottomRight"></div>
            <div class="movablePoint" id="movableBottomLeft"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="chooseSection">
      <div class="row">
        
        
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>
