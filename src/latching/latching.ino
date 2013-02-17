

// Pin connected to RCLK -- storage register clock pin (latch pin) -- of 74HC595
const int RCLKPin = 3;
// Pin connected to SRCLK -- shift register clock pin -- of 74HC595
// const int SRCLKPin = 7;
const int SRCLKPin = 2;
// Pin connected to SER -- serial data input -- of 74HC595
// const int SERPin = 6;
const int SERPin = 4;

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

  // set pins to output so you can control the shift register
  pinMode(RCLKPin, OUTPUT);
  pinMode(SRCLKPin, OUTPUT);
  pinMode(SERPin, OUTPUT);

}

void loop() {

 for (int whatToDisplay = 0; whatToDisplay < NB_NUMBER; whatToDisplay++) {

    // set RCLK low; wait till we transmit the byte, and they moving it high will output the data
    digitalWrite(RCLKPin, LOW);

    // shift out the bits (MSBFIRST = most significant bit first)
    shiftOut(SERPin, SRCLKPin, MSBFIRST, sevenSeg[whatToDisplay]);

    // send shift register data to the storage register
    digitalWrite(RCLKPin, HIGH);
    
    Serial.println(whatToDisplay);
    // catch our breath before repeating
    delay(200);
   }
}

