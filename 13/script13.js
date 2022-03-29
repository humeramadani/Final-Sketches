
var loadedImage;

function setup() {
  // create canvas
  var c = createCanvas(1000, 1000);
  background(255);
  // Add an event for when a file is dropped onto the canvas
  c.drop(gotFile);


}
function preload() {
  loadedImage = loadImage("assets/G11.png");
}

function slice(col, row, cols, rows, imW, imH) {
  var w = imW / cols
  var h = imH / rows
  return get(w * col, h * row, (col + 1) * w, (row + 1) * h)
}


function makeSlices(cols, rows, imW, imH) {
  var res = []
  for(var i = 0; i < cols; i++) {
    res[i] = []
    for(var j = 0; j < rows; j++) {
       res[i][j] = slice(i, j, cols, rows, imW, imH)
    }
  }
  return res;
}

function drawSlice(img, col, row, cols, rows, imW, imH) {
  var w = imW / cols
  var h = imH / rows
  return image(img, w * col, h * row)
}

function swapRow(arr, i, j) {
  // slice copies it
  var tmp = arr[i].slice()
  arr[i] = arr[j].slice()
  arr[j] = tmp
  return arr
}

function swapCol(arr, i, j) {
  var numRows = arr.length
  for(var r = 0; r < numRows; r++) {
    var tmp = arr[r][i]
    arr[r][i] = arr[r][j]
    arr[r][j] = tmp
  }
  return arr
}

function drawSlices(slices, imW, imH) {
  var numRows = slices.length
  var numCols = slices[0].length
  for(var i = 0; i < numRows; i++) {
    for(var j = 0; j < numCols; j++) {
       drawSlice(slices[i][j], i, j, numCols, numRows, imW, imH)
    }
  }
}

var once = true

function draw() {
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  
  if(loadedImage == undefined) {
    text('Drag an image file onto the canvas.', width/2, height/2)
    return 
  }
  
  image(loadedImage, 0, 0, width, height)

  var numRows = 10 + Math.round(random(-1, 10))
  var numCols = numRows
  var slices = makeSlices(numRows, numRows, width, height);
  
  //image(topLeft, 0, 0)
  //drawSlices(slices, width, height)
  
  var randRowSrc = Math.floor(random(0, numRows))
  var randRowDst = Math.floor(random(0, numRows))
  
  var randColSrc = Math.floor(random(0, numCols))
  var randColDst = Math.floor(random(0, numCols))
  
  slices = swapRow(slices, randRowSrc, randRowDst)
  slices = swapCol(slices, randColSrc, randColDst)
  drawSlices(slices, width, height)
  //noLoop()
}

function gotFile(file) {
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    var img = createImg(file.data).hide();
    // Draw the image onto the canvas
    loadedImage = img;
    once = true
  } else {
    println('Not an image file!');
  }
}