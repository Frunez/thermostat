'use strict';

function Thermostat() {
  this.DEFAULT = 20;
  this.MAX_TEMP = 32;
  this.MIN_TEMP = 10;
  this.PS_MAX_TEMP = 25;
  this.LOW_USAGE = 18;
  this.MEDIUM_USAGE = 25;
  this.currentTemp = this.DEFAULT;
  this._INCREMENT = 1;
  this._powerSavingMode = true;
}
// output default
Thermostat.prototype.temperature = function() {
  return this.currentTemp;
};

// input button
Thermostat.prototype.increase = function() {
  if (this.isMaxTemp === true) {
    return;
  }
  this.currentTemp += this._INCREMENT;
}
// input button
Thermostat.prototype.decrease = function() {
  this.currentTemp -= this._INCREMENT;
};
// input button
Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT;
}
// output default
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSavingMode === true;
}
// input button
Thermostat.prototype.switchPowerSavingModeOn = function() {
  this._powerSavingMode = true;
}
// input button
Thermostat.prototype.switchPowerSavingModeOff = function() {
  this._powerSavingMode = false;
}

Thermostat.prototype.isMaxTemp = function() {
  if(this.isPowerSavingModeOn() === true) {
    return this.temperature === this.PS_MAX_TEMP;
  }
  return this.temperature === this.MAX_TEMP;
}
// output (colour) default
Thermostat.prototype.powerUsage = function() {
  if (this.currentTemp < this.LOW_USAGE) {
    return "low";
  }
  else if (this.currentTemp < this.MEDIUM_USAGE){
    return "medium";
  }
  else {
    return "high";
  }
}
