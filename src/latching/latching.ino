extern "C" {
    #include "matrix.h"
}


const String display_chars = "0123456789ABCDEF";

// note that setting a pin to low makes its respective LED segment light
// up (because it's already getting +5V from the middle pin of the display)
// therfore a 0 bit represents an active, lit-up segment

#define NB_NUMBER 14

const int sevenSeg[NB_NUMBER] = {
   0x01,
   0x02,
   0x04,
   0x08,
   0x10,
   0x20,
   0x40,
   0x80,
   0x40,
   0x20,
   0x10,
   0x08,
   0x04,
   0x02,
};
  
void setup() {
  Serial.begin(9600);

  matrix_init(); 
}

void loop() {
    for(int i = 0; i < 8; i++) {
        matrix_select_line(i);
        delay(200);
    }
}

