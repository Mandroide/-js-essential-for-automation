"use strict";

/**
 * Use of backslash (Escape character)
 * @rules:
 *  When the interpreter hits the backslash in string, it looks for the next character
 *      i. If next char is a letter and has a special meaning (e.g. tab, new line), then it does the special thing
 *      ii. If the next char is a letter and does not mean anything, the \ is skipped from the string.
 *      iii. If the next char is a special char(', ", \), then the special char will be included in the string
 */

/**
 * Scenario
 * 1. Hello World, it's me
 */
/**
 * Special characters
 * \b -> Backspace
 * \f -> Form feed
 * \n -> New line
 * \r -> Carriage return
 * \t -> Tab
 * \v -> Vertical tab
 * \' -> Apostrophe or single quote
 * \" -> Double quote
 * \\ -> Backslash character
 */

//let str = "Hello World \hit\s \fme";
let str = "It\'s me";
console.log(str);