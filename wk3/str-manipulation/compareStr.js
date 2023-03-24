"use strict";

/**
 * Comparer string
 * 1. Full match
 * 2. Partial match
 *      - includes()
 *      - startsWith()
 *      - endsWith()
 * 
 * @questions:
 * 1. Is this a case sensitive comparison?
 * 2. Does the string needs to be trimmed?
 */

let filename = "invoice_123.pdf"

// Full match
if (filename === "invoice_123.pdf") {
    console.log(`>> The filename ${filename} matches...`)
}

// Partial match
if (filename.startsWith("invoice")) {
    console.log(`Yes it starts with invoice...`);
}

if (filename.endsWith(".pdf")) {
    console.log(`Yes it ends with .pdf...`);
}