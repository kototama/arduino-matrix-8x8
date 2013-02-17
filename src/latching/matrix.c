#include <Arduino.h>

#include "matrix.h"

// Pin connected to RCLK -- storage register clock pin (latch pin) -- of 74HC595
const int RCLKPin = 3;
// Pin connected to SRCLK -- shift register clock pin -- of 74HC595
const int SRCLKPin = 2;
// Pin connected to SER -- serial data input -- of 74HC595
const int SERPin = 4;

const int RCKPin_tpic6b595 = 6;
const int SRCKPin_tpic6b595 = 7;
const int SERPin_tpic6b595 = 5;

void matrix_init()
{
    // set pins to output so you can control the shift register
    pinMode(RCLKPin, OUTPUT);
    pinMode(SRCLKPin, OUTPUT);
    pinMode(SERPin, OUTPUT);

    pinMode(RCKPin_tpic6b595, OUTPUT);
    pinMode(SRCKPin_tpic6b595, OUTPUT);
    pinMode(SERPin_tpic6b595, OUTPUT);

}

void matrix_display_dot(char line, char column)
{
    // set RCLK low; wait till we transmit the byte, and they moving it high will output the data
    digitalWrite(RCLKPin, LOW);
    digitalWrite(RCKPin_tpic6b595, LOW);
    
    // shift out the bits (MSBFIRST = most significant bit first)
    shiftOut(SERPin, SRCLKPin, MSBFIRST, 1 << line);
    shiftOut(SERPin_tpic6b595, SRCKPin_tpic6b595, MSBFIRST, 1 << column);
    
    // send shift register data to the storage register
    digitalWrite(RCLKPin, HIGH);
    digitalWrite(RCKPin_tpic6b595, HIGH);
}
