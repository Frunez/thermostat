$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    var i = 0;
    var n = 0;
    var timeOut = 0;
    var city = 'London'

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };

    $('#temperature-up').on('mousedown touchstart', function(e) {
        timeOut = setInterval(function() {
            thermostat.up();
            updateTemperature();
        }, 300);
        thermostat.up();
        updateTemperature();
    }).bind('mouseup mouseleave touchend', function() {
        clearInterval(timeOut);
    });

    $('#temperature-down').on('mousedown touchstart', function(e) {
        timeOut = setInterval(function() {
            thermostat.down();
            updateTemperature();
        }, 300);
        thermostat.down();
        updateTemperature();
    }).bind('mouseup mouseleave touchend', function() {
        clearInterval(timeOut);
    });

    $('#temperature-reset').click(function() {
        thermostat.resetTemp();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').attr('class', 'psm-on')
        updateTemperature();
    });

    $('#powersaving-off').click(function() {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').attr('class', 'psm-off')
        updateTemperature();
    });

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,&appid=6b9d318fe42ee8c5f85ba016a32d5492&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
    });

    displayWeather('London');

    $('#select-city').submit(function(event) {
        event.preventDefault();
        city = $('#current-city').val();
        $('#city').text(city);
        displayWeather(city);
    });

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = ',&appid=6b9d318fe42ee8c5f85ba016a32d5492';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
            $('#current-temperature').text(data.main.temp);
        });
    };
});
