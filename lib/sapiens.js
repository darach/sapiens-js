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

var robosapiens = require("../build/Release/robosapiens.node");
var codes = require("./ircodes_robosapiensv1.js");

exports.turn_right= function() { robosapiens.tell(codes.RS_TURN_RIGHT) }
exports.right_arm_up = function() { robosapiens.tell(codes.RS_ARMR_UP) }
exports.right_arm_out = function() { robosapiens.tell(codes.RS_ARMR_OUT) }
exports.tilt_right = function() { robosapiens.tell(codes.RS_TILT_RIGHT) }
exports.right_arm_down = function() { robosapiens.tell(codes.RS_ARMR_DOWN) }
exports.right_arm_in = function() { robosapiens.tell(codes.RS_ARMR_IN) }
exports.walk_forward = function() { robosapiens.tell(codes.RS_WALK_FWD) }
exports.walk_backward = function() { robosapiens.tell(codes.RS_WALK_BCK) }
exports.turn_left = function() { robosapiens.tell(codes.RS_TURN_LEFT) }
exports.left_arm_up = function() { robosapiens.tell(codes.RS_ARML_UP) }
exports.left_arm_out = function() { robosapiens.tell(codes.RS_ARML_OUT) }
exports.tilt_left = function() { robosapiens.tell(codes.RS_TILT_LEFT) }
exports.left_arm_down = function() { robosapiens.tell(codes.RS_ARML_DOWN) }
exports.left_arm_in = function() { robosapiens.tell(codes.RS_ARML_IN) }
exports.stop = function() { robosapiens.tell(codes.RS_STOP) }
exports.turn_right_step = function() { robosapiens.tell(codes.RS_TURN_RIGHT_STEP) }
exports.right_hand_thump = function() { robosapiens.tell(codes.RS_HAND_RIGHT_THUMP) }
exports.right_hand_throw = function() { robosapiens.tell(codes.RS_HAND_RIGHT_THROW) }
exports.sleep = function() { robosapiens.tell(codes.RS_SLEEP) }
exports.right_hand_pickup = function() { robosapiens.tell(codes.RS_HAND_RIGHT_PICKUP) }
exports.lean_backward = function() { robosapiens.tell(codes.RS_LEAN_BCK) }
exports.step_forward = function() { robosapiens.tell(codes.RS_STEP_FWD) }
exports.step_backward = function() { robosapiens.tell(codes.RS_STEP_BCK) }
exports.turn_left_step = function() { robosapiens.tell(codes.RS_TURN_LEFT_STEP) }
exports.left_hand_thump = function() { robosapiens.tell(codes.RS_HAND_LEFT_THUMP) }
exports.left_hand_throw = function() { robosapiens.tell(codes.RS_HAND_LEFT_THROW) }
exports.listen = function() { robosapiens.tell(codes.RS_LISTEN) }
exports.left_hand_pickup = function() { robosapiens.tell(codes.RS_HAND_LEFT_PICKUP) }
exports.lean_forward = function() { robosapiens.tell(codes.RS_LEAN_FWD) }
exports.reset = function() { robosapiens.tell(codes.RS_RESET) }
exports.right_hand_strike3 = function() { robosapiens.tell(codes.RS_HAND_RIGHT_STRIKE3) }
exports.right_hand_sweep = function() { robosapiens.tell(codes.RS_HAND_RIGHT_SWEEP) }
exports.burp = function() { robosapiens.tell(codes.RS_BURP) }
exports.right_hand_strike2 = function() { robosapiens.tell(codes.RS_HAND_RIGHT_STRIKE2) }
exports.high5 = function() { robosapiens.tell(codes.RS_HIGH5) }
exports.right_hand_strike1 = function() { robosapiens.tell(codes.RS_HAND_RIGHT_STRIKE1) }
exports.bulldozer = function() { robosapiens.tell(codes.RS_BULLDOZER) }
exports.oops = function() { robosapiens.tell(codes.RS_OOPS) }
exports.left_hand_strike3 = function() { robosapiens.tell(codes.RS_LEFT_HAND_STRIKE3) }
exports.left_hand_sweep = function() { robosapiens.tell(codes.RS_LEFT_HAND_SWEEP) }
exports.whistle = function() { robosapiens.tell(codes.RS_WHISTLE) }
exports.left_hand_strike2 = function() { robosapiens.tell(codes.RS_LEFT_HAND_STRIKE2) }
exports.talkback = function() { robosapiens.tell(codes.RS_TALKBACK) }
exports.left_hand_strike1 = function() { robosapiens.tell(codes.RS_LEFT_HAND_STRIKE1) }
exports.roar = function() { robosapiens.tell(codes.RS_ROAR) }
exports.shuffle = function() { robosapiens.tell(codes.RS_SHUFFLE) }
exports.raise_throw = function() { robosapiens.tell(codes.RS_RAISE_THROW) }
exports.karate_chop = function() { robosapiens.tell(codes.RS_KARATE_CHOP) }
exports.noop = function() { robosapiens.tell(codes.RS_NOP) }
exports.program_master_command = function() { robosapiens.tell(codes.RS_PROGRAM_MASTER_COMMAND) }
exports.program_play = function() { robosapiens.tell(codes.RS_PROGRAM_PLAY) }
exports.program_right_sensor = function() { robospiens.tell(codes.RS_PROGRAM_RIGHT_SENSOR) }
exports.program_left_sensor = function() { robosapiens.tell(codes.RS_PROGRAM_LEFT_SENSOR) }
exports.program_sonic_sensor = function() { robosapiens.tell(codes.RS_PROGRAM_SONIC_SENSOR) }
exports.exec_master_command = function() { robosapiens.tell(codes.RS_EXEC_MASTER_COMMAND) }
exports.wakeup = function() { robosapiens.tell(codes.RS_WAKEUP) }
exports.exec_right_sensor_program = function() { robospiens.tell(codes.RS_EXEC_RIGHT_SENSOR_PROGRAM) }
exports.exec_left_sensor_program = function() { robosapiens.tell(codes.RS_EXEC_LEFT_SENSOR_PROGRAM) }
exports.exec_sonic_sensor_program = function() { robosapiens.tell(codes.RS_EXEC_SONIC_SENSOR_PROGRAM) }
exports.demo_all = function() { robosapiens.tell(codes.RS_DEMO_ALL) }
exports.power_off = function() { robosapiens.tell(codes.RS_POWER_OFF) }
exports.demo1 = function() { robosapiens.tell(codes.RS_DEMO1) }
exports.demo2 = function() { robosapiens.tell(codes.RS_DEMO2) }
exports.dance = function() { robosapiens.tell(codes.RS_DANCE) }

