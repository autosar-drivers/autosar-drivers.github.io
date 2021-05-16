
var pinHeads = new Array();
var modeHeads = new Array();
var cfg_code = "";
var PBcfg_code = "";
var pins_values = new Array();
var modes_values = new Array();
var optionalAPIs = new Array();

pinHeads = ['', 'Port', 'Pin', 'Name', 'Mode Name', 'Mode Changeable', 'Direction', 'Direction Changeable', 'Initial Value'];
modeHeads = ['', 'Name', 'Pull Up', 'Pull Down', 'Open Drain', 'GPIO Enable', 'Digital Enable', 'Alternate Function'];

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

function createTrueFalseSelection() {

    var element = document.createElement("select");

    var option1 = document.createElement("option");
    var option2 = document.createElement("option");

    option1.innerHTML = "True";
    option2.innerHTML = "False";

    option1.value = "TRUE";
    option2.value = "FALSE";

    element.add(option2, null);
    element.add(option1, null);

    return element;
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
        else if (c==1) {
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

        else if (c==2) {
            
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

        else  if (c== 3) {
            var element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', '');
            td.appendChild(element);
        }

        else  if (c== 4) {
            var element = document.createElement('input');
            element.setAttribute('type', 'text');
            element.setAttribute('value', '');
            td.appendChild(element);
        }
        else if (c==5 || c==7) {
            var element = createTrueFalseSelection();
            td.appendChild(element);
        }

        else if (c==6) {
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

        else if (c==8) {
            var element = document.createElement("select");

            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.innerHTML = "High";
            option2.innerHTML = "Low";

            option1.value = "STD_HIGH";
            option2.value = "STD_LOW";

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
        else if (c==7){ 
            var element = document.createElement("select");
            var aternates = [
                "ALT_DISABLED",
                "ALT_AIN0",
                "ALT_AIN1",
                "ALT_AIN10",
                "ALT_AIN11",
                "ALT_AIN2",
                "ALT_AIN3",
                "ALT_AIN4",
                "ALT_AIN5",
                "ALT_AIN6",
                "ALT_AIN7",
                "ALT_AIN8",
                "ALT_AIN9",
                "ALT_C0_POS",
                "ALT_C0_NEG",
                "ALT_C0o",
                "ALT_C1_POS",
                "ALT_C1_NEG",
                "ALT_C1o",
                "ALT_CAN1Rx",
                "ALT_CAN1Tx",
                "ALT_I2C0SCL",
                "ALT_I2C0SDA",
                "ALT_I2C1SCL",
                "ALT_I2C1SDA",
                "ALT_I2C2SCL",
                "ALT_I2C2SDA",
                "ALT_I2C3SCL",
                "ALT_I2C3SDA",
                "ALT_IDX1",
                "ALT_M0PWM0",
                "ALT_M0PWM1",
                "ALT_M0PWM2",
                "ALT_M0PWM3",
                "ALT_M0PWM4",
                "ALT_M0PWM5",
                "ALT_M1FAULT0",
                "ALT_M1PWM0",
                "ALT_M1PWM1",
                "ALT_M1PWM4",
                "ALT_M1PWM5",
                "ALT_M1PWM6",
                "ALT_M1PWM7",
                "ALT_PhA1",
                "ALT_PhB1",
                "ALT_SSI0Clk",
                "ALT_SSI0Fss",
                "ALT_SSI0Rx",
                "ALT_SSI0Tx",
                "ALT_SSI2Clk",
                "ALT_SSI2Fss",
                "ALT_SSI2Rx",
                "ALT_SSI2Tx",
                "ALT_SSI3Clk",
                "ALT_SSI3Fss",
                "ALT_SSI3Rx",
                "ALT_SSI3Tx",
                "ALT_SWCLK",
                "ALT_SWDIO",
                "ALT_SWO",
                "ALT_T2CCP1",
                "ALT_T3CCP0",
                "ALT_T3CCP1",
                "ALT_T4CCP0",
                "ALT_T4CCP1",
                "ALT_T5CCP0",
                "ALT_T5CCP1",
                "ALT_TCK",
                "ALT_TDI",
                "ALT_TDO",
                "ALT_TMS",
                "ALT_TRCLK",
                "ALT_TRD0",
                "ALT_TRD1",
                "ALT_U0Rx",
                "ALT_U0Tx",
                "ALT_U2Rx",
                "ALT_U2Tx",
                "ALT_U3Rx",
                "ALT_U3Tx",
                "ALT_U4Rx",
                "ALT_U4Tx",
                "ALT_U5Rx",
                "ALT_U5Tx",
                "ALT_U6Rx",
                "ALT_U6Tx",
                "ALT_U7Rx",
                "ALT_U7Tx",
                "ALT_USB0DM",
                "ALT_USB0DP",
                "ALT_USB0ID",
                "ALT_USB0VBUS",
                "ALT_WT0CCP0",
                "ALT_WT0CCP1",
                "ALT_WT1CCP0",
                "ALT_WT1CCP1",
                "ALT_WT2CCP0",
                "ALT_WT2CCP1",
                "ALT_WT3CCP0",
                "ALT_WT3CCP1",
                "ALT_WT4CCP0",
                "ALT_WT4CCP1",
                "ALT_WT5CCP0",
                "ALT_WT5CCP1",
                "ALT_IDX0",
                "ALT_M0PWM6",
                "ALT_M0PWM7",
                "ALT_M1PWM2",
                "ALT_M1PWM3",
                "ALT_NMI",
                "ALT_PhA0",
                "ALT_PhB0",
                "ALT_SSI1Clk",
                "ALT_SSI1Fss",
                "ALT_SSI1Rx",
                "ALT_SSI1Tx",
                "ALT_T0CCP0",
                "ALT_T0CCP1",
                "ALT_T1CCP0",
                "ALT_T1CCP1",
                "ALT_T2CCP0",
                "ALT_U1CTS",
                "ALT_U1RTS",
                "ALT_U1Rx",
                "ALT_U1Tx",
                "ALT_USB0PFLT",
                "ALT_CAN0Rx",
                "ALT_CAN0Tx",
                "ALT_M0FAULT0",
                "ALT_USB0EPEN"
                        
            ];
            var options = [
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),
                document.createElement("option"),                
            ]
            for (var i=0; i<130; i++) {
                options[i].innerHTML = aternates[i];
                element.add(options[i], null);
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
    var version_enable = document.getElementById('version_enable');
    pins_values = new Array();
    modes_values = new Array();
    optionalAPIs = new Array();
    for (row = 1; row < pinsTable.rows.length - 1; row++) {
        for (c = 1; c < pinsTable.rows[row].cells.length; c++) {
            var element = pinsTable.rows.item(row).cells[c];
            console.log(element.childNodes[0].value);
            pins_values.push(element.childNodes[0].value);
        }
    }
    for (row = 1; row < modesTable.rows.length - 1; row++) {
        for (c = 1; c < modesTable.rows[row].cells.length; c++) {
            var element = modesTable.rows.item(row).cells[c];
            console.log(element.childNodes[0].value);
            modes_values.push(element.childNodes[0].value);
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

function download() {
    submit();
    download_h();
    download_c();
}


function download_h() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cfg_code));
    element.setAttribute('download', 'Port_Cfg.h');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function download_c() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(PBcfg_code));
    element.setAttribute('download', 'Port_PBcfg.c');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}





function generate_cfg_code() {
    var code = ""
    code = code + "\n/********************************************************************************/";
    code = code + "\n/* Module:      Port                                                            */";
    code = code + "\n/* File Name:   Port_Cfg.h                                                      */";
    code = code + "\n/* Description: Pre-Compile Configuration Header file for TM4C123GH6PM          */";
    code = code + "\n/*              Microcontroller - Port Driver.                                  */";
    code = code + "\n/* Author:      Ahmed Hassan                                                    */";
    code = code + "\n/********************************************************************************/";
    code = code + "\n";
    code = code + "\n#ifndef PORT_CFG_H";
    code = code + "\n#define PORT_CFG_H";
    code = code + "\n";
    code = code + "\n#include \"Port_Private.h\"";
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
    code = code + "\n/* AUTOSAR Version checking between Port_Cfg.h and Port_Private.h files */";
    code = code + "\n#if ((PORT_CFG_AR_RELEASE_MAJOR_VERSION != PORT_PRIVATE_AR_RELEASE_MAJOR_VERSION)\\";
    code = code + "\n ||  (PORT_CFG_AR_RELEASE_MINOR_VERSION != PORT_PRIVATE_AR_RELEASE_MINOR_VERSION)\\";
    code = code + "\n ||  (PORT_CFG_AR_RELEASE_PATCH_VERSION != PORT_PRIVATE_AR_RELEASE_PATCH_VERSION))";
    code = code + "\n  #error \"The AR version of Port_Cfg.h does not match the expected version\"";
    code = code + "\n#endif";
    code = code + "\n";
    code = code + "\n/* Software Version checking between Port_Cfg.h and Port_Private.h files */";
    code = code + "\n#if ((PORT_CFG_SW_MAJOR_VERSION != PORT_PRIVATE_SW_MAJOR_VERSION)\\";
    code = code + "\n ||  (PORT_CFG_SW_MINOR_VERSION != PORT_PRIVATE_SW_MINOR_VERSION)\\";
    code = code + "\n ||  (PORT_CFG_SW_PATCH_VERSION != PORT_PRIVATE_SW_PATCH_VERSION))";
    code = code + "\n  #error \"The SW version of Port_Cfg.h does not match the expected version\"";
    code = code + "\n#endif";
    code = code + "\n";

    if (optionalAPIs.length > 0) {
        code = code + "\n/* Optional APIs */";
        code = code + "\n";
        code = code + "\n#define PORT_DEV_ERROR_DETECT      " + optionalAPIs[0];
        code = code + "\n#define PORT_SET_PIN_DIRECTION_API " + optionalAPIs[1];
        code = code + "\n#define PORT_VERSION_INFO_API      " + optionalAPIs[2];
        code = code + "\n";
    }

    if (modes_values.length > 0) {
        code = code + "\n/* Modes Defines */";
        code = code + "\n";

        var number_of_modes = (modes_values.length) / 7;
        code = code + "\n#define PORT_CONFIGURED_MODES " + number_of_modes;
        code = code + "\n";

        for (var i=0; i<number_of_modes; i++) {
            if (modes_values[i*7] == "") {
                alert("Mode name can not be embty")
            }
            else {
                code = code + "\n#define PortConf_" + modes_values[i*7] + " " + i;
                code = code + "\n#define PortConf_" + modes_values[i*7] + "_PULL_UP_ENABLE " + modes_values[1+i*7];
                code = code + "\n#define PortConf_" + modes_values[i*7] + "_PULL_DOWN_ENABLE " + modes_values[2+i*7];
                code = code + "\n#define PortConf_" + modes_values[i*7] + "_OPEN_DRAIN_ENABLE " + modes_values[3+i*7];
                code = code + "\n#define PortConf_" + modes_values[i*7] + "_GPIO_ENABLE " + modes_values[4+i*7];
                code = code + "\n#define PortConf_" + modes_values[i*7] + "_DIGITAL_ENABLE " + modes_values[5+i*7];
                code = code + "\n#define PortConf_" + modes_values[i*7] + "_ALT_FUNCTION " + modes_values[6+i*7];
                code = code + "\n"    
            }
        }
    }


    if (pins_values.length > 0) {

        code = code + "\n/* Pins Defines */";
        code = code + "\n";

        var number_of_pins = (pins_values.length) / 8;
        code = code + "\n#define PORT_CONFIGURED_PINS " + number_of_pins;
        code = code + "\n";

        for (var i=0; i<number_of_pins; i++) {
            if (pins_values[2+i*8] == "") {
                alert("Pin name can not be embty");
            }
            else if (pins_values[3+i*8] == ""){
                alert("Mode name can not be embty");
            }
            else {
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + " " + i;
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_PORT_NUMBER " + pins_values[0+i*8];
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_PIN_NUMBER " + pins_values[1+i*8];
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_MODE " + pins_values[3+i*8];
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_MODE_CHANGEABLE " + pins_values[4+i*8];
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_DIRECTION " + pins_values[5+i*8];
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_DIRECTION_CHANGEABLE " + pins_values[6+i*8];
                code = code + "\n#define PortConf_" + pins_values[2+i*8] + "_INITIAL_VALUE " + pins_values[7+i*8];
                code = code + "\n"    
            }
        }
    }
    code = code + "\n#endif /* PORT_CFG_H */";
    return code;
}


function generate_PBcfg_code() {
    var code = ""
    code = code + "\n/********************************************************************************/";
    code = code + "\n/* Module:      Port                                                            */";
    code = code + "\n/* File Name:   Port_PBcfg.c                                                    */";
    code = code + "\n/* Description: Post Build Configuration Header file for TM4C123GH6PM           */";
    code = code + "\n/*              Microcontroller - Port Driver.                                  */";
    code = code + "\n/* Author:      Ahmed Hassan                                                    */";
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

        for (var i=0; i<number_of_pins; i++) {
                var name = pins_values[2+i*8];
                if (name != "") {
                    code = code + "\n   PortConf_" + name + ", ";
                    code = code + "\n   PortConf_" + name + "_PORT_NUMBER, ";
                    code = code + "\n   PortConf_" + name + "_PIN_NUMBER, ";
                    code = code + "\n   PortConf_" + name + "_MODE, ";
                    code = code + "\n   PortConf_" + name + "_MODE_CHANGEABLE, ";
                    code = code + "\n   PortConf_" + name + "_DIRECTION, ";
                    code = code + "\n   PortConf_" + name + "_DIRECTION_CHANGEABLE, ";
                    code = code + "\n   PortConf_" + name + "_INITIAL_VALUE, ";
                    code = code + "\n"        
                }
        }
    }
    code = code + "\n};";
    code = code + "\n";

    code = code + "\n/* PB structure used with Port_Init API for Modes */";
    code = code + "\nconst Port_ConfigType Port_ConfigurationModes = {";
    code = code + "\n";
    if (modes_values.length > 0) {

        var number_of_pins = (pins_values.length) / 8;

        for (var i=0; i<number_of_pins; i++) {
            var name = modes_values[i*7];
            if (name != "") {
                code = code + "\n   PortConf_" + name + ", ";
                code = code + "\n   PortConf_" + name + "_PULL_UP_ENABLE, ";
                code = code + "\n   PortConf_" + name + "_PULL_DOWN_ENABLE, ";
                code = code + "\n   PortConf_" + name + "_OPEN_DRAIN_ENABLE, ";
                code = code + "\n   PortConf_" + name + "_GPIO_ENABLE, ";
                code = code + "\n   PortConf_" + name + "_DIGITAL_ENABLE, ";
                code = code + "\n   PortConf_" + name + "_ALT_FUNCTION, ";
                code = code + "\n"    
            }
        }
    }
    code = code + "\n};";

    return code;
}
