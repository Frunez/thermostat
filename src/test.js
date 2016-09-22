var thermostat = new Thermostat();
var currentTemp;

function getTempDecimal(){
  currentTemp = thermostat.temperature() / thermostat.MAX_TEMP;
}

$('#increase_btn').click(function() {
  thermostat.increase();
  getTempDecimal();
  bar.animate(currentTemp);
});

$('#reset_btn').click(function() {
  thermostat.reset();
  getTempDecimal();
  bar.animate(currentTemp);
});

$('#decrease_btn').click(function() {
  thermostat.decrease();
  getTempDecimal();
  bar.animate(currentTemp);
});

$('#powerSavingMode')
