
var pinHeads = new Array();
var modeHeads = new Array();
var cfg_code = "";
var PBcfg_code = "";
var pins_values = new Array();
var modes_values = new Array();
var optionalAPIs = new Array();

pinHeads = ['', 'Port', 'Pin', 'Pin Symbol Name', 'Mode Symbol Name', 'Mode Changeable', 'Direction', 'Direction Changeable', 'Initial Value'];
modeHeads = ['', 'Mode Symbol Name', 'Internal Resistor', 'GPIO Enable', 'Open Drain', 'Digital Enable', 'Analog Enable', 'Slew Rate', 'Alternate Function'];

function init() {
    createPinsTable();
    createModesTable();
    addPin();
    addMode();
    cfg_code = generate_cfg_code();
    PBcfg_code = generate_PBcfg_code();
    document.getElementById("Cfg").textContent = cfg_code;
    document.getElementById("PBcfg").textContent = PBcfg_code;
}


function createPinsTable() {
    var pinsTable = document.createElement('table');
    pinsTable.setAttribute('id', 'pinsTable');
    var tr = pinsTable.insertRow(-1);
    for (var h = 0; h < pinHeads.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = pinHeads[h];
        tr.appendChild(th);
    }
    var div = document.getElementById('pins');
    div.appendChild(pinsTable);
}

function createModesTable() {
    var modesTable = document.createElement('table');
    modesTable.setAttribute('id', 'modesTable');
    var tr = modesTable.insertRow(-1);
    for (var h = 0; h < modeHeads.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = modeHeads[h];
        tr.appendChild(th);
    }
    var div = document.getElementById('modes');
    div.appendChild(modesTable);
}

function addPin() {
    var empTab = document.getElementById('pinsTable');
    var rowCnt = empTab.rows.length;
    var tr = empTab.insertRow(rowCnt);
    tr = empTab.insertRow(rowCnt);
    for (var c = 0; c < pinHeads.length; c++) {
        var td = document.createElement('td');
        td = tr.insertCell(c);
        if (c == 0) {
            var button = document.createElement('input');
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');
            button.setAttribute('onclick', 'removePin(this)');
            td.appendChild(button);
        }
        else if (c == 1) {
            var element = document.createElement("select");
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
            var option3 = document.createElement("option");
            var option4 = document.createElement("option");
            var option5 = document.createElement("option");
            var option6 = document.createElement("option");
            var option7 = document.createElement("option");

            option1.innerHTML = "Port A";
            option2.innerHTML = "Port B";
            option3.innerHTML = "Port C";
            option4.innerHTML = "Port D";
            option5.innerHTML = "Port E";
            option6.innerHTML = "Port F";

            option1.value = "PORT_PORTA";
            option2.value = "PORT_PORTB";
            option3.value = "PORT_PORTC";
            option4.value = "PORT_PORTD";
            option5.value = "PORT_PORTE";
            option6.value = "PORT_PORTF";

            element.add(option1, null);
            element.add(option2, null);
            element.add(option3, null);
            element.add(option4, null);
            element.add(option5, null);
            element.add(option6, null);

            td.appendChild(element);

        }

        else if (c == 2) {

            var element = document.createElement("select");
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
            var option3 = document.createElement("option");
            var option4 = document.createElement("option");
            var option5 = document.createElement("option");
            var option6 = document.createElement("option");
            var option7 = document.createElement("option");
            var option8 = document.createElement("option");

            option1.innerHTML = "Pin 0";
            option2.innerHTML = "Pin 1";
            option3.innerHTML = "Pin 2";
            option4.innerHTML = "Pin 3";
            option5.innerHTML = "Pin 4";
            option6.innerHTML = "Pin 5";
            option7.innerHTML = "Pin 6";
            option8.innerHTML = "Pin 7";

            option1.value = "PORT_PIN0";
            option2.value = "PORT_PIN1";
            option3.value = "PORT_PIN2";
            option4.value = "PORT_PIN3";
            option5.value = "PORT_PIN4";
            option6.value = "PORT_PIN5";
            option7.value = "PORT_PIN6";
            option8.value = "PORT_PIN7";

            element.add(option1, null);
            element.add(option2, null);
            element.add(option3, null);
            element.add(option4, null);
            element.add(option5, null);
            element.add(option6, null);
            element.add(option7, null);
            element.add(option8, null);

            td.appendChild(element);

        }

        else if (c == 3) {
            var element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', '');
            td.appendChild(element);
        }

        else if (c == 4) {
            var element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', '');
            td.appendChild(element);
        }
        else if (c == 5 || c == 7) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "True";
            option2.innerHTML = "False";

            option1.value = "TRUE";
            option2.value = "FALSE";

            element.add(option2, null);
            element.add(option1, null);
            td.appendChild(element);
        }

        else if (c == 6) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "Output";
            option2.innerHTML = "Input";

            option1.value = "PORT_PIN_OUT";
            option2.value = "PORT_PIN_IN";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);

        }

        else if (c == 8) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "High";
            option2.innerHTML = "Low";

            option1.value = "PORT_LEVEL_HIGH";
            option2.value = "PORT_LEVEL_LOW";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);
        }
    }
}

function addMode() {
    var empTab = document.getElementById('modesTable');
    var rowCnt = empTab.rows.length;
    var tr = empTab.insertRow(rowCnt);
    tr = empTab.insertRow(rowCnt);
    for (var c = 0; c < modeHeads.length; c++) {
        var td = document.createElement('td');
        td = tr.insertCell(c);
        if (c == 0) {
            var button = document.createElement('input');
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');
            button.setAttribute('onclick', 'removeMode(this)');
            td.appendChild(button);
        }
        else if (c == 1) {
            var element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', '');
            td.appendChild(element);
        }
        else if (c == 2) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
            var option3 = document.createElement("option");

            option1.innerHTML = "Off";
            option2.innerHTML = "Pull up";
            option3.innerHTML = "Pull Down";

            option1.value = "PORT_INT_RES_OFF";
            option2.value = "PORT_INT_RES_PULL_UP";
            option3.value = "PORT_INT_RES_PULL_DOWN";

            element.add(option1, null);
            element.add(option2, null);
            element.add(option3, null);

            td.appendChild(element);
        }
        else if (c == 3) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "Disabled";
            option2.innerHTML = "Enabled";

            option1.value = "PORT_GPIO_DISABLED";
            option2.value = "PORT_GPIO_ENABLED";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);
        }
        else if (c == 4) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "Disabled";
            option2.innerHTML = "Enabled";

            option1.value = "PORT_OPEN_DRAIN_DISABLED";
            option2.value = "PORT_OPEN_DRAIN_ENABLED";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);
        }

        else if (c == 5) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "Disabled";
            option2.innerHTML = "Enabled";

            option1.value = "PORT_DIGITAL_DISABLED";
            option2.value = "PORT_DIGITAL_ENABLED";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);
        }
        else if (c == 6) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "Disabled";
            option2.innerHTML = "Enabled";

            option1.value = "PORT_ANALOG_DISABLED";
            option2.value = "PORT_ANALOG_ENABLED";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);
        }
        else if (c == 7) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "Disabled";
            option2.innerHTML = "Enabled";

            option1.value = "PORT_SLEW_RATE_DISABLED";
            option2.value = "PORT_SLEW_RATE_ENABLED";

            element.add(option1, null);
            element.add(option2, null);

            td.appendChild(element);
        }

        else if (c == 8) {
            var element = document.createElement("select");
            var aternates = [
                "ALT_DISABLED", "ALT_ADC", "ALT_COMP", "ALT_CAN", "ALT_I2C", "ALT_USB", "ALT_M0PWMx", "ALT_M1PWMx", "ALT_TxCCPx",
                "ALT_SSI1", "ALT_SSI2", "ALT_SSI3", "ALT_UART", "ALT_U1CTS", "ALT_U1RTS", "ALT_U1Rx", "ALT_U1Tx", "ALT_CORE",
                "ALT_NMI", "ALT_QEI", "ALT_JTAG"
            ];

            for (var i = 0; i < 21; i++) {
                var option = document.createElement("option");
                option.innerHTML = aternates[i];
                element.add(option, null);
            }
            td.appendChild(element);
        }
        else {
            var element = createTrueFalseSelection();
            td.appendChild(element);
        }

    }
}


function removePin(oButton) {
    var empTab = document.getElementById('pinsTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function removeMode(oButton) {
    var empTab = document.getElementById('modesTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function submit() {
    var pinsTable = document.getElementById('pinsTable');
    var modesTable = document.getElementById('modesTable');
    var error_enable = document.getElementById('error_enable');
    var set_dir_enable = document.getElementById('set_dir_enable');
    var set_mode_enable = document.getElementById('set_mode_enable');
    var version_enable = document.getElementById('version_enable');
    pins_values = [];
    modes_values = [];
    optionalAPIs = [];
    for (row = 1; row < pinsTable.rows.length - 1; row++) {
        for (c = 1; c < pinsTable.rows[row].cells.length; c++) {
            var element = pinsTable.rows.item(row).cells[c];
            pins_values.push(element.childNodes[0].value);
            if (element.childNodes[0].value == "") {
                alert("Pin name and Mode name cannot be embty!");
                pins_values = [];
                break;
            }
        }
    }
    for (row = 1; row < modesTable.rows.length - 1; row++) {
        for (c = 1; c < modesTable.rows[row].cells.length; c++) {
            var element = modesTable.rows.item(row).cells[c];
            modes_values.push(element.childNodes[0].value);
            if (element.childNodes[0].value == "") {
                if (pins_values.length != 0)
                    alert("Pin name and Mode name cannot be embty!");
                pins_values = [];
                modes_values = [];
                break
            }

        }
    }

    if (error_enable.checked == true) {
        optionalAPIs.push("STD_ON");
    }
    else {
        optionalAPIs.push("STD_OFF");
    }
    if (set_dir_enable.checked == true) {
        optionalAPIs.push("STD_ON");
    }
    else {
        optionalAPIs.push("STD_OFF");
    }
    if (set_mode_enable.checked == true) {
        optionalAPIs.push("STD_ON");
    }
    else {
        optionalAPIs.push("STD_OFF");
    }
    if (version_enable.checked == true) {
        optionalAPIs.push("STD_ON");
    }
    else {
        optionalAPIs.push("STD_OFF");
    }

    cfg_code = generate_cfg_code();
    PBcfg_code = generate_PBcfg_code();

    document.getElementById("Cfg").textContent = cfg_code;
    document.getElementById("PBcfg").textContent = PBcfg_code;
}


function download_h() {
    submit();
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cfg_code));
    element.setAttribute('download', 'Port_Cfg.h');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function download_c() {
    submit();
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(PBcfg_code));
    element.setAttribute('download', 'Port_PBcfg.c');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}



function getDate() {
    var d = new Date();
    var day = d.getUTCDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var date = "";
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date = date + months[month];
    if (day < 10) {
        date = date + " 0" + day + ", " + year;
    }
    else {
        date = date + " " + day + ", " + year;
    }
    return date;


}


/*https://autosar-drivers.github.io/ */
function generate_cfg_code() {
    var date = getDate();
    var code = ""
    code = code + "\n           /**********************************************************/";
    code = code + "\n           /* -> This file is generated by online Configuration Tool */";
    code = code + "\n           /* -> The Configuration Tool is developed by:             */";
    code = code + "\n           /*    Ahmed Hassan                                        */";
    code = code + "\n           /* -> The Configuration Tool can be found on this link:   */";
    code = code + "\n           /*    autosar-drivers.github.io                           */";
    code = code + "\n           /**********************************************************/";
    code = code + "\n";
    code = code + "\n/********************************************************************************/";
    code = code + "\n/* Module:      Port                                                            */";
    code = code + "\n/* File Name:   Port_Cfg.h                                                      */";
    code = code + "\n/* Description: Pre-Compile Configuration Header file for TM4C123GH6PM          */";
    code = code + "\n/*              Microcontroller - Port Driver.                                  */";
    code = code + "\n/* Author:      Ahmed Hassan                                                    */";
    code = code + "\n/* Created:     " + date + "                                                    */";
    code = code + "\n/********************************************************************************/";
    code = code + "\n";
    code = code + "\n#ifndef PORT_CFG_H";
    code = code + "\n#define PORT_CFG_H";
    code = code + "\n";
    code = code + "\n/* Module Version 1.0.0 */";
    code = code + "\n#define PORT_CFG_SW_MAJOR_VERSION              (1U)";
    code = code + "\n#define PORT_CFG_SW_MINOR_VERSION              (0U)";
    code = code + "\n#define PORT_CFG_SW_PATCH_VERSION              (0U)";
    code = code + "\n";
    code = code + "\n/* AUTOSAR Version 4.0.3 */";
    code = code + "\n#define PORT_CFG_AR_RELEASE_MAJOR_VERSION      (4U)";
    code = code + "\n#define PORT_CFG_AR_RELEASE_MINOR_VERSION      (0U)";
    code = code + "\n#define PORT_CFG_AR_RELEASE_PATCH_VERSION      (3U)";
    code = code + "\n";
    if (optionalAPIs.length > 0) {
        code = code + "\n/* Optional APIs */";
        code = code + "\n";
        code = code + "\n#define PORT_DEV_ERROR_DETECT      " + optionalAPIs[0];
        code = code + "\n#define PORT_SET_PIN_DIRECTION_API " + optionalAPIs[1];
        code = code + "\n#define PORT_SET_PIN_MODE_API      " + optionalAPIs[2];
        code = code + "\n#define PORT_VERSION_INFO_API      " + optionalAPIs[3];
        code = code + "\n";
    }

    if (modes_values.length > 0) {
        code = code + "\n/* Modes Defines */";
        code = code + "\n";

        var number_of_modes = (modes_values.length) / 8;
        code = code + "\n#define PORT_NUMBER_OF_PORT_MODES " + number_of_modes;
        code = code + "\n";

        for (var i = 0; i < number_of_modes; i++) {
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + " " + i;
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_INTERNAL_RESISTOR " + modes_values[1 + i * 8];
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_GPIO_ENABLE " + modes_values[2 + i * 8];
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_OPEN_DRAIN " + modes_values[3 + i * 8];
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_DIGITAL_ENABLE " + modes_values[4 + i * 8];
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_ANALOG_ENABLE " + modes_values[5 + i * 8];
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_SLEW_RATE " + modes_values[6 + i * 8];
            code = code + "\n#define PORT_PIN_MODE_" + modes_values[i * 8] + "_ALT_FUNC_NUM " + modes_values[7 + i * 8];
            code = code + "\n"

        }
    }


    if (pins_values.length > 0) {

        code = code + "\n/* Pins Defines */";
        code = code + "\n";

        var number_of_pins = (pins_values.length) / 8;
        code = code + "\n#define PORT_NUMBER_OF_PORT_PINS " + number_of_pins;
        code = code + "\n";

        for (var i = 0; i < number_of_pins; i++) {
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + " " + i;
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_PORT_NUMBER " + pins_values[0 + i * 8];
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_PIN_NUMBER " + pins_values[1 + i * 8];
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_INITIAL_MODE PORT_PIN_MODE_" + pins_values[3 + i * 8];
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_MODE_CHANGEABLE " + pins_values[4 + i * 8];
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_DIRECTION " + pins_values[5 + i * 8];
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_DIRECTION_CHANGEABLE " + pins_values[6 + i * 8];
            code = code + "\n#define PORT_PIN_" + pins_values[2 + i * 8] + "_LEVEL_VALUE " + pins_values[7 + i * 8];
            code = code + "\n"

        }
    }
    code = code + "\n#endif /* PORT_CFG_H */";
    return code;
}


function generate_PBcfg_code() {
    var date = getDate();
    var code = ""
    code = code + "\n           /**********************************************************/";
    code = code + "\n           /* -> This file is generated by online Configuration Tool */";
    code = code + "\n           /* -> The Configuration Tool is developed by:             */";
    code = code + "\n           /*    Ahmed Hassan                                        */";
    code = code + "\n           /* -> The Configuration Tool can be found on this link:   */";
    code = code + "\n           /*    autosar-drivers.github.io                           */";
    code = code + "\n           /**********************************************************/";
    code = code + "\n";
    code = code + "\n/********************************************************************************/";
    code = code + "\n/* Module:      Port                                                            */";
    code = code + "\n/* File Name:   Port_PBcfg.c                                                    */";
    code = code + "\n/* Description: Post Build Configuration Header file for TM4C123GH6PM           */";
    code = code + "\n/*              Microcontroller - Port Driver.                                  */";
    code = code + "\n/* Author:      Ahmed Hassan                                                    */";
    code = code + "\n/* Created:     " + date + "                                                    */";
    code = code + "\n/********************************************************************************/";
    code = code + "\n";
    code = code + "\n#include \"Port.h\"";
    code = code + "\n";
    code = code + "\n/* Module Version 1.0.0 */";
    code = code + "\n#define PORT_PBCFG_SW_MAJOR_VERSION              (1U)";
    code = code + "\n#define PORT_PBCFG_SW_MINOR_VERSION              (0U)";
    code = code + "\n#define PORT_PBCFG_SW_PATCH_VERSION              (0U)";
    code = code + "\n";
    code = code + "\n/* AUTOSAR Version 4.0.3 */";
    code = code + "\n#define PORT_PBCFG_AR_RELEASE_MAJOR_VERSION      (4U)";
    code = code + "\n#define PORT_PBCFG_AR_RELEASE_MINOR_VERSION      (0U)";
    code = code + "\n#define PORT_PBCFG_AR_RELEASE_PATCH_VERSION      (3U)";
    code = code + "\n";
    code = code + "\n/* AUTOSAR Version checking between Port_PBcfg.c and Port.h files */";
    code = code + "\n#if ((PORT_PBCFG_AR_RELEASE_MAJOR_VERSION != PORT_AR_RELEASE_MAJOR_VERSION)\\";
    code = code + "\n ||  (PORT_PBCFG_AR_RELEASE_MINOR_VERSION != PORT_AR_RELEASE_MINOR_VERSION)\\";
    code = code + "\n ||  (PORT_PBCFG_AR_RELEASE_PATCH_VERSION != PORT_AR_RELEASE_PATCH_VERSION))";
    code = code + "\n  #error \"The AR version of PBcfg.c does not match the expected version\"";
    code = code + "\n#endif";
    code = code + "\n";
    code = code + "\n/* Software Version checking between Port_PBcfg.c and Port.h files */";
    code = code + "\n#if ((PORT_PBCFG_SW_MAJOR_VERSION != PORT_SW_MAJOR_VERSION)\\";
    code = code + "\n ||  (PORT_PBCFG_SW_MINOR_VERSION != PORT_SW_MINOR_VERSION)\\";
    code = code + "\n ||  (PORT_PBCFG_SW_PATCH_VERSION != PORT_SW_PATCH_VERSION))";
    code = code + "\n  #error \"The SW version of PBcfg.c does not match the expected version\"";
    code = code + "\n#endif";
    code = code + "\n";
    code = code + "\n/* PB structure used with Port_Init API for Pins */";
    code = code + "\nconst Port_ConfigType Port_Configuration = {";
    code = code + "\n";
    if (pins_values.length > 0) {

        var number_of_pins = (pins_values.length) / 8;

        for (var i = 0; i < number_of_pins; i++) {
            var name = pins_values[2 + i * 8];
            code = code + "\n   PORT_PIN_" + name + ", ";
            code = code + "\n   PORT_PIN_" + name + "_PORT_NUMBER, ";
            code = code + "\n   PORT_PIN_" + name + "_PIN_NUMBER, ";
            code = code + "\n   PORT_PIN_" + name + "_INITIAL_MODE, ";
            code = code + "\n   PORT_PIN_" + name + "_MODE_CHANGEABLE, ";
            code = code + "\n   PORT_PIN_" + name + "_DIRECTION, ";
            code = code + "\n   PORT_PIN_" + name + "_DIRECTION_CHANGEABLE, ";
            code = code + "\n   PORT_PIN_" + name + "_LEVEL_VALUE, ";
            code = code + "\n"

        }
    }
    code = code + "\n};";
    code = code + "\n";

    code = code + "\n/* PB structure used with Port_Init API for Modes */";
    code = code + "\nconst Port_ConfiguredModesType Port_ConfiguredModes = {";
    code = code + "\n";
    if (modes_values.length > 0) {

        var number_of_modes = (modes_values.length) / 8;

        for (var i = 0; i < number_of_modes; i++) {
            var name = modes_values[i * 8];
            code = code + "\n   PORT_PIN_MODE_" + name + ", ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_INTERNAL_RESISTOR, ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_GPIO_ENABLE, ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_OPEN_DRAIN, ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_DIGITAL_ENABLE, ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_ANALOG_ENABLE, ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_SLEW_RATE, ";
            code = code + "\n   PORT_PIN_MODE_" + name + "_ALT_FUNC_NUM, ";
            code = code + "\n"

        }
    }
    code = code + "\n};";

    return code;
}
