#include <Arduino.h>

#include "matrix.h"

// Pin connected to RCLK -- storage register clock pin (latch pin) -- of 74HC595
const int RCLKPin = 3;
// Pin connected to SRCLK -- shift register clock pin -- of 74HC595
const int SRCLKPin = 2;
// Pin connected to SER -- serial data input -- of 74HC595
const int SERPin = 4;

void matrix_init()
{
    // set pins to output so you can control the shift register
    pinMode(RCLKPin, OUTPUT);
    pinMode(SRCLKPin, OUTPUT);
    pinMode(SERPin, OUTPUT);
}

void matrix_select_line(char line)
{
    // set RCLK low; wait till we transmit the byte, and they moving it high will output the data
    digitalWrite(RCLKPin, LOW);

    // shift out the bits (MSBFIRST = most significant bit first)
    shiftOut(SERPin, SRCLKPin, MSBFIRST, 1 << line);

    // send shift register data to the storage register
    digitalWrite(RCLKPin, HIGH);
}
