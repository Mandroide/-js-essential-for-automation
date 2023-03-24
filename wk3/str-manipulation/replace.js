"use strict";

/**
 * Replace and replace all
 * @rules:
 * 1. Replace method can accept a string/regexp as its first arg
 * 
 * @returns
 * The modified string value
 */

/**
 * Scenario:
 * 1. Get only the filename
 * 2. Rename the file extension from .pdf -> .txt
 * 3. Replace table_name with Accounts
 * 4. Convert the given date format to YYYYMMDD format
 */

let filename = "invoice_123.pdf"
let query_template = `SELECT * FROM {{table_name}}`
let dt = "2022-01-01";

// 1. Get only the filename
const onlyFilename = filename.replace(".pdf","")
console.log(onlyFilename);

// 2. Rename the file extension from .pdf -> .txt
const txtFile = filename.replace(".pdf","")
console.log(txtFile);

// 3. Replace table_name with Accounts\
const actualQ = query_template.replace("{{table_name}}", "Accounts")
console.log(actualQ);

// 4. Convert the given date format to YYYYMMDD format
//const modifiedDt = dt.replace("-", "")
//const modifiedDt = dt.replace(/-/g, "")
const modifiedDt = dt.replaceAll("-", "")
console.log(modifiedDt);