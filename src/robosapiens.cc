/**
 * Copyright (c) 2013. Darach Ennis < darach at gmail dot com >.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

#include <node.h>
#include <v8.h>

#include <unistd.h>
#include <wiringPi.h>

using namespace v8;

namespace robosapiens {
  static Handle<Value> tell(const Arguments& args);
  static void delay(unsigned int units);
}

void robosapiens::delay(unsigned int units) {
  usleep(833 * units);
}

Handle<Value> robosapiens::tell(const Arguments& args) {
  HandleScope scope;

  if (args.Length() != 1) {
    ThrowException(Exception::TypeError(
      String::New("Incorrect number of arguments. Expected 1 argument only")));
    scope.Close(Undefined());
  }

  if (!args[0]->IsNumber()) {
    ThrowException(Exception::TypeError(
      String::New("Invalid argument found. Argument was not of integral type")));
    scope.Close(Undefined());
  }

  unsigned int command = args[0]->Uint32Value();

  // Preamble. Set IR signal line LOW
  ::digitalWrite(1,LOW);
  robosapiens::delay(8);

  // Pulse the 8 bit command. Delay 4 slices for 1-bit and 1 slice for a 0-bit.
  int b;
  for(b = 0; b < 8; b++)
  {
    ::digitalWrite(1,HIGH);
    robosapiens::delay( ( (command & 128) != 0) ? 4 : 1);
    ::digitalWrite(1,LOW);
    robosapiens::delay(1);
    command <<= 1;
  }

  // Finally, reset IR signal line HIGH
  ::digitalWrite(1,HIGH);

  scope.Close(Undefined());
}

void init(Handle<Object> exports) {
  exports->Set(String::NewSymbol("tell"), FunctionTemplate::New(robosapiens::tell)->GetFunction());

  ::wiringPiSetup();
  ::piHiPri(99);
  ::pinMode(0, INPUT);
  ::pinMode(1, OUTPUT);
  ::digitalWrite(1, HIGH);
}

NODE_MODULE(robosapiens, init)
