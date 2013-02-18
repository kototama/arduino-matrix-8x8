#include <Arduino.h>
#include <SPI.h>

#include "matrix2.h"

const int RCLKPin = 3;
const int RCKPin_tpic6b595 = 6;

void matrix2_init()
{
    SPI.begin();
    SPI.setDataMode(SPI_MODE3);
    
    // set pins to output so you can control the shift register
    pinMode(RCLKPin, OUTPUT);
    pinMode(RCKPin_tpic6b595, OUTPUT);

    digitalWrite(RCLKPin, HIGH);
    digitalWrite(RCKPin_tpic6b595, HIGH);
}

void matrix2_display_dot(char line, char column)
{
    digitalWrite(RCLKPin, LOW);
    SPI.transfer(1<<line);
    digitalWrite(RCLKPin, HIGH);
    
    digitalWrite(RCKPin_tpic6b595, LOW);
    SPI.transfer(1<<column);
    digitalWrite(RCKPin_tpic6b595, HIGH);
}
