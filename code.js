export function generate_first_code() {
    var code = ""
    code = code + "\n        /********************************************************************************/";
    code = code + "\n        /* Module:      Port                                                            */";
    code = code + "\n        /* File Name:   Port_Cfg.h                                                      */";
    code = code + "\n        /* Description: Pre-Compile Configuration Header file for TM4C123GH6PM          */";
    code = code + "\n        /*              Microcontroller - Port Driver.                                  */";
    code = code + "\n        /* Author:      Ahmed Hassan                                                    */";
    code = code + "\n        /* Created:     May 14, 2021                                                    */";
    code = code + "\n        /********************************************************************************/";
    code = code + "\n        #ifndef PORT_CFG_H";
    code = code + "\n        #define PORT_CFG_H";
    code = code + "\n        #include \"Port_Private.h\"";
    code = code + "\n        /* Module Version 1.0.0 */";
    code = code + "\n        #define PORT_CFG_SW_MAJOR_VERSION              (1U)";
    code = code + "\n        #define PORT_CFG_SW_MINOR_VERSION              (0U)";
    code = code + "\n        #define PORT_CFG_SW_PATCH_VERSION              (0U)";
    code = code + "\n        /* AUTOSAR Version 4.0.3 */";
    code = code + "\n        #define PORT_CFG_AR_RELEASE_MAJOR_VERSION      (4U)";
    code = code + "\n        #define PORT_CFG_AR_RELEASE_MINOR_VERSION      (0U)";
    code = code + "\n        #define PORT_CFG_AR_RELEASE_PATCH_VERSION      (3U)";
    code = code + "\n        /* AUTOSAR Version checking between Port_Cfg.c and Port_Private.h files */";
    code = code + "\n        #if ((PORT_CFG_AR_RELEASE_MAJOR_VERSION != PORT_PRIVATE_AR_RELEASE_MAJOR_VERSION)\\";
    code = code + "\n         ||  (PORT_CFG_AR_RELEASE_MINOR_VERSION != PORT_PRIVATE_AR_RELEASE_MINOR_VERSION)\\";
    code = code + "\n         ||  (PORT_CFG_AR_RELEASE_PATCH_VERSION != PORT_PRIVATE_AR_RELEASE_PATCH_VERSION))";
    code = code + "\n          #error \"The AR version of PBcfg.c does not match the expected version\"";
    code = code + "\n        #endif";

    return code;





}


