<?php 
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link type="text/css" rel="stylesheet" href="./assets/css/style.css" />
    <title>Share Point</title>
  </head>
  <body>
    <div id="chooseFormat">
      <div class="row">
        <div class="col-6" id="templateProperties">
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Top Circumference(%)</label>
              <label class="propertyContent">
                Mesure around your container where you want the top of your
                label to be
              </label>
            </div>
            <div class="col-3">
              <input
                type="number"
                name="topCircumference"
                class="propertyValue"
                value="5"
              />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Right Circumference(%)</label>
              <label class="propertyContent">
                Mesure around your container where you want the Right of your
                label to be
              </label>
            </div>
            <div class="col-3">
              <input
                type="number"
                name="rightCircumference"
                class="propertyValue"
                value="5"
              />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Bottom Circumference(%)</label>
              <label class="propertyContent"
                >Mesure around your container where you want the Bottom of your
                label to be</label
              >
            </div>
            <div class="col-3">
              <input
                type="number"
                name="bottomCircumference"
                class="propertyValue"
                value="5"
              />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Left Circumference(%)</label>
              <label class="propertyContent"
                >Mesure around your container where you want the Left of your
                label to be</label
              >
            </div>
            <div class="col-3">
              <input
                type="number"
                name="leftCircumference"
                class="propertyValue"
                value="5"
              />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Height(px)</label>
              <label class="propertyContent"
                >Mesure the distance between the top circumference and bottom
                circumference</label
              >
            </div>
            <div class="col-3">
              <input
                type="number"
                name="height"
                class="propertyValue"
                value="500"
              />
            </div>
          </div>
          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Wrap Coverage(%)</label>
              <label class="propertyContent"
                >How far around your object should your label wrap? Use 100% for
                complete coverage and up to 120% to have your label
                overlap</label
              >
            </div>
            <div class="col-3">
              <input
                type="number"
                name="wrap"
                class="propertyValue"
                value="80"
              />
            </div>
          </div>

          <div class="property row">
            <div class="col-9">
              <label class="propertyHeader">Container Outline</label>
              <label class="propertyContent"
                >Show the actual circumference of your container alongside your
                desired label coverage</label
              >
            </div>
            <div class="col-3">
              <input type="color" name="color" class="propertyValue" />
            </div>
          </div>
          <button class="btn btn-primary" id="generateTemplate">
            Generate Template
          </button>
        </div>
        <div class="col" id="templatePreviewContainer">
          <div id="templatePreview"></div>
        </div>
      </div>
    </div>
    <div id="chooseSection">
      <h1>Choose the sections and fill the details</h1>
      <div class="row">
        <div class="col-6">
          <div>
            <div class="row">
              <h2>Main header</h2>
            </div>
            <input class="form-control" type="text" id="mainHeader" />
          </div>
          <div>
            <h3>Sub header1</h3>
            <input class="form-control subHeader" id="subHeader1" type="text" />
          </div>
          <div>
            <h3>Sub header2</h3>
            <input class="form-control subHeader" type="text" id="subHeader2" />
          </div>
          <div>
            <h3>Sub Content</h3>
            <textarea
              class="form-control subContent"
              id="subContent1"
            ></textarea>
          </div>
        </div>
        <div class="col-6" id="preview">
          <div class="shape top left"></div>
          <div class="shape top right"></div>
          <div class="shape bottom right"></div>
          <div class="shape bottom left"></div>
          <span class="mainHeader" id="mainHeaderPreview"></span><br />
          <span class="subHeaderPreview" id="subHeaderPreview1"></span><br />
          <span class="subHeaderPreview" id="subHeaderPreview2"></span><br />
          <span class="subContentPreview" id="subContentPreview1"></span><br />
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>
