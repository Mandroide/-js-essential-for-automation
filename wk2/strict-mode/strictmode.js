"use strict";
/**
 * Use case:
 * 1. Prevents any undeclared global variable
 * 2. Use of implements, interface, let, package, private, protected, public, static, and yield as identifiers
 */
// Use case 1
a = 1 // Asign to global object globalThis
console.log(a)