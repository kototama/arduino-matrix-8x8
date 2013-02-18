extern "C" {

}

#include "pic.h"
#include "matrix2.h"

void setup() {
  Serial.begin(9600);

  matrix2_init(); 
}

void loop() {
// pic_display(0x8000000000000001);
  pic_display(0xFFFFFFFFFFFFFFFF);
//  delay(200);
}

