/**
 * Use case 3: Use of break statements
 * @scenario:
 * Switch to a specific window
 */

let windows = ["Google", "Amazon", "YouTube"]
for (let i = 0; i < windows.length; i++) {
    const window = windows[i];
    if (window === "Amazon") {
        break;
    }
    console.log(window); // Google
    
}