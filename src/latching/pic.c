#include <Arduino.h>
#include "pic.h"
#include "matrix.h"

void pic_display(pic_t pic)
{
    int line;
    int column;
    
    for(int i = 0; i < 64; i++) {
        line = i / 8;
        column = i % 8;

        if(pic & (0x8000000000000000 >> i)) {
            matrix_display_dot(line, column);
            delay(100);
        }
    }
}
