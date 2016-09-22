'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20°c", function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT);
  });

  it("increases temperature with up button", function(){
    thermostat.increase();
    expect(thermostat.temperature()).toBeGreaterThan(thermostat.DEFAULT);
  });

  it("decreases temperature with down button", function(){
    thermostat.decrease();
    expect(thermostat.temperature()).toBeLessThan(thermostat.DEFAULT);
  });

  it("does not decrease if temperature is < 10", function(){
    for (var i = 1; i <= thermostat.MIN_TEMP; i++) {
      thermostat.decrease();
    };
    expect(thermostat.temperature()).toEqual(thermostat.MIN_TEMP);
  });

  it("resets the temperature back to default", function() {
    thermostat.increase();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT);
  })

  describe("Colour change power usage", function() {
    it("has low usage", function() {
      for (var i = 18; i <= 20; i++) {
        thermostat.decrease();
      };
      expect(thermostat.powerUsage()).toEqual("low")
    });
    it("has medium usage", function() {
      expect(thermostat.powerUsage()).toEqual("medium")
    });
    it("has high usage", function() {
      for (var i = 20; i < 26; i++) {
        thermostat.increase();
      };
      expect(thermostat.powerUsage()).toEqual("high")
    });
  });

  describe("Power Saving Mode", function() {
    it("Power saving mode is on by default", function(){
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
    });

    it("Set power saving mode to off", function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBeFalsy();
    });

    it("Max default temperature is 25", function() {
      for (var i = 1; i <= 5; i++){
        thermostat.increase();
      }
      expect(thermostat.temperature()).toEqual(thermostat.PS_MAX_TEMP);
    });

    it("Max temperature when off", function() {
      thermostat.switchPowerSavingModeOff();
      for(var i = 1; i <= 12; i++){
        thermostat.increase();
      }
      expect(thermostat.temperature()).toEqual(thermostat.MAX_TEMP);
    });
  });
});
