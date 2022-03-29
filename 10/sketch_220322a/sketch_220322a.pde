PGraphics pg;
PFont font;

void setup() {
  font = createFont("assets/Poppins-Black.ttf", 800);
  size(1000, 1000, P2D);
  pg = createGraphics(1000, 1000, P2D);
  frameRate(20);
}
void draw() {
  background(0);
  pg.beginDraw();
  pg.background(0);
  pg.fill(255);
  pg.textSize(800);
  pg.pushMatrix();
  pg.translate(width/2, height/2-215);
  pg.textAlign(CENTER, CENTER);
  pg.text("G", 0, 0);
  pg.popMatrix();
  pg.endDraw();
  
  int tilesX = 8;
  int tilesY = 8;

  int tileW = int(width/tilesX);
  int tileH = int(height/tilesY);

  for (int y = 0; y < tilesY; y++) {
    for (int x = 0; x < tilesX; x++) {
      //Source
      int sx=x*tileW + int(random(-100,100));
      int sy=y*tileH;
      int sw=tileW;
      int sh=tileH;
      
      //Destination
      int dx=x*tileW;
      int dy=y*tileH;
      int dw=tileW;
      int dh=tileH;
      
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
      
     }
   }
  }
