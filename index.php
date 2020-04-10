<?php?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link type="text/css" rel="stylesheet" href="./assets/css/style.css" />
    <title>Share Point</title>
  </head>
  <body>
    <div id="chooseFormat">
      <div class="row">
        <div class="col-6">
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Top Circumference(%)</label>
              <label class="propertyContent">Mesure around your container where you want the top of your label to be</label>
            </div>
            <div class="col-3">
              <input type="number" name="topCircumference" class="propertyValue" value="0" />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Right Circumference(%)</label>
              <label class="propertyContent">Mesure around your container where you want the Right of your label to be</label>
            </div>
            <div class="col-3">
              <input type="number" name="rightCircumference" class="propertyValue" value="0"/>
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Bottom Circumference(%)</label>
              <label class="propertyContent">Mesure around your container where you want the Bottom of your label to be</label>
            </div>
            <div class="col-3">
              <input type="number" name="bottomCircumference" class="propertyValue" value="0" />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Left Circumference(%)</label>
              <label class="propertyContent" >Mesure around your container where you want the Left of your label to be</label>
            </div>
            <div class="col-3">
              <input type="number" name="leftCircumference" class="propertyValue" value="0"/>
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
          <button class="btn btn-primary" id="generateTemplate">Generate Template</button>
        </div>
        <div class="col" id="templatePreviewContainer">
          <div id="templatePreview"></div>
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
        <div class="col-3">
          <label>Choose the sections and fill the details</label>
          <div class="row">
            <div>Active Ingredient</div>
            <div>
              <input type="checkbox" id="purpose"/>
              <label for="purpose">Purpose</label>
            </div>
          </div>
          <div id="purposeList">
            <div class="row">
              <input type="text" name="activeIngredient" id="activeIngredient_1"/>
              <svg hidden class="bi bi-three-dots" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"/>
              </svg>
              <input type="text" name="activeIngredientPurpose" id="activeIngredientPurpose_1" hidden/>
              <svg id="addPurpose" class="bi bi-plus-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <div class="row">
            Uses
          </div>
          <div class="row">
            <input type="text" id="uses"/>
          </div>
          <div class="row">
            Warnings
          </div>
          <div class="row">
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
          <div class="row">
            <input id="syndrome" type="checkbox"/>
            <label for="syndrome">Reye's syndrome warning</label>
          </div>
          <input id="syndromeContent" type="text" class="row" hidden />
          <div class="row">
            <input id="allergy" type="checkbox" />
            <label for="allergy">Allergy Alert</label>
          </div>
          <input id="allergyContent" type="text" class="row" hidden />
          <div class="row">
            <input id="flammable" type="checkbox" />
            <label for="flammable">Flammable</label>
          </div>
          <input id="flammableContent" type="text" class="row" hidden />
          <div class="row">
            <input id="choking" type="checkbox" />
            <label for="choking">Choking</label>
          </div>
          <input type="text" id="chokingContent" class="row" hidden />
          <div class="row">
            <input id="alchole" type="checkbox" />
            <label for="alchole">Alchole warning</label>
          </div>
          <input id="alcholeContent" type="text" class="row" hidden />
          <div class="row">
            <input id="stomach" type="checkbox" />
            <label for="stomach">Stomach bleeding warning</label>
          </div>
          <input id="stomachContent" type="text" class="row" hidden />
          <div class="row">
            <input id="sore" type="checkbox" />
            <label for="sore">Sore throat warning</label>
          </div>
          <input id="soreContent" type="text" class="row" hidden />
          <div class="row">
            <input id="dosage" type="checkbox" />
            <label for="dosage">Dosage warning</label>
          </div>
          <input id="dosageContent" type="text" class="row" hidden />
          <div class="row">
            <input id="std" type="checkbox" />
            <label for="std">Sexually transmitted diseases (STD) alert</label>
          </div>
          <input id="stdContent" type="text" class="row" hidden />
          <div class="row">
            <input id="notuse" type="checkbox" />
            <label for="notuse">Do not use</label>
          </div>
          <input id="notuseContent" type="text" class="row" hidden />
          <div>
            <label class="row">Ask a doctor before use</label>
            <div class="row">
              <input type="checkbox"  id="youhave"/>
              <label for="youhave">if you have</label>
            </div>
            <input type="text" id="youhaveContent" hidden/>
            <div class="row">
              <input type="checkbox"  id="childhave"/>
              <label for="childhave">if your child have</label>
            </div>
            <input type="text" id="childhaveContent" hidden/>
          </div>
          <div>
            <label class="row">Ask a doctor or pharmacist before use</label>
            <div class="row">
              <input type="checkbox"  id="youare"/>
              <label for="youare">if you are</label>
            </div>
            <input type="text" id="youareContent" hidden/>
            <div class="row">
              <input type="checkbox"  id="childis"/>
              <label for="childis">if your child is</label>
            </div>
            <input type="text" id="childisContent" hidden/>
          </div>
          <div class="row">
            <input id="whenUsingThis" type="checkbox" />
            <label for="whenUsingThis">When using this product</label>
          </div>
          <input id="whenUsingThisContent" type="text" class="row" hidden />
          <div class="row">
            <input id="stopUse" type="checkbox" />
            <label for="stopUse">Stop use and ask a doctor if</label>
          </div>
          <input id="stopUseContent" type="text" class="row" hidden />
          <div class="row">
            <input id="pregnant" type="checkbox" />
            <label for="pregnant">If pregnant or breast-feeding</label>
          </div>
          <input id="pregnantContent" type="text" class="row" hidden />
          <div class="row">
            <input id="keepOut" type="checkbox" />
            <label for="keepOut">Keep out of reach of children</label>
          </div>
          <input id="keepOutContent" type="text" class="row" hidden />
          <div class="row">
            Directions
          </div>
          <input id="directions" type="text"/>
          <div class="row">
            <input id="inActive" type="checkbox" />
            <label for="inActive">InActive Ingredient</label>
          </div>
          <input id="inActiveContent" type="text" class="row" hidden />
        </div>
        <div id="preview">
          <div class="shape top left"></div>
          <div class="shape top right"></div>
          <div class="shape bottom right"></div>
          <div class="shape bottom left"></div>
          <span id="mainHeader">Drug Facts</span><br>
          <div class="crossLineThin" style="display: block;"></div>
          <span class="subHeader" id="activeIngredientHeader">Active Ingredient</span>
          <span class="subHeader" id="purposeHeader">Purpose</span><br>
          <span class="activeIngredientDetail" id="activeIngredientDetail_1"></span>
          <span class="purposeDetail" id="purposeDetail_1"></span><br>
          <div class="crossLineThick" id="useCrossLine"></div>
          <span >Use</span>
          <span id="usesDetail"></span>
          <div class="crossLineThick"></div>
          
          <span>Warnings</span>
          <span id="forWhatDetail" class="warningDetail"></span>
          <div class="crossLineThin" ></div>
          <span id="syndromeHeader" class="warningHeader">Reye's syndrome warning</span>
          <span id="syndromeDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="allergyHeader" class="warningHeader">Allergy Alert</span>
          <span id="allergyDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="flammableHeader" class="warningHeader">Flammable</span>
          <span id="flammableDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="chokingHeader" class="warningHeader">Choking</span>
          <span id="chokingDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="alcholeHeader" class="warningHeader">Alchole Warning</span>
          <span id="alcholeDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="stomachHeader" class="warningHeader">Stomach bleeding warning</span>
          <span id="stomachDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="soreHeader" class="warningHeader">Sore throat warning</span>
          <span id="soreDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="dosageHeader" class="warningHeader">Dosage warning</span>
          <span id="dosageDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="stdHeader" class="warningHeader">Sexually transmitted diseases (STDs) alert</span>
          <span id="stdDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="notuseHeader" class="warningHeader">Do not use</span>
          <span id="notuseDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="youhaveHeader" class="warningHeader">Ask a doctor before use if you have</span>
          <span id="youhaveDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="childhaveHeader" class="warningHeader">Ask a doctor before use if the child has</span>
          <span id="childhaveDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="youareHeader" class="warningHeader">Ask a doctor or pharmacist before use if you are</span>
          <span id="youareDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="childisHeader" class="warningHeader">Ask a doctor or pharmacist before use if the child is</span>
          <span id="childisDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="whenUsingThisHeader" class="warningHeader">When using this product</span>
          <span id="whenUsingThisDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="stopUseHeader" class="warningHeader">Stop use and ask a doctor if</span>
          <span id="stopUseDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="pregnantHeader" class="warningHeader">If pregnant or breast-feeding</span>
          <span id="pregnantDetail" class="warningDetail"></span>
          <div class="crossLineThin"></div>
          <span id="keepOutHeader" class="warningHeader">Keep out of reach of children</span>
          <span id="keepOutDetail" class="warningDetail"></span>
          
          <div class="crossLineThick"></div>
          <span>Directions</span><br>
          <span id="directionsDetail" class="warningDetail"></span>
          <div class="crossLineThick"></div>
          <span >Inactive Ingredients</span>
          <span id="inActiveDetail" class="warningDetail"></span>
        </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>
