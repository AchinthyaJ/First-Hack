const codeSnippet = `
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => reject(new Error(xhr.statusText));
        xhr.send();
    });
}

async function processData(url) {
    try {
        const data = await fetchData(url);
        console.log("Data received:", data);
        // Process the data
        data.forEach(item => {
            console.log("Processing item:", item);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

processData("https://api.example.com/data");

// Python Code
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3,6,8,10,1,2,1]))

// More JavaScript
function encrypt(text, key) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) ^ key);
    }
    return encrypted;
}

const secretMessage = "Secret Message";
const key = 42;
const encryptedMessage = encrypt(secretMessage, key);
console.log("Encrypted Message:", encryptedMessage);

const decryptedMessage = encrypt(encryptedMessage, key);
console.log("Decrypted Message:", decryptedMessage);

// Pseudo Code for hacking simulation
initialize_hack_module();
while (target_is_online()) {
    exploit_vulnerability();
    if (access_granted()) {
        retrieve_sensitive_data();
        log_activity();
        cover_tracks();
    } else {
        attempt_bypass();
    }
    wait_for_next_cycle();
}

shutdown_hack_module();

// C Code for variety
#include <stdio.h>

void hack_function() {
    printf("Hacking in progress...\\n");
    for (int i = 0; i < 10; i++) {
        printf("Step %d complete\\n", i+1);
    }
    printf("Hack successful!\\n");
}

int main() {
    hack_function();
    return 0;
}

// More JavaScript for the end
(function() {
    let hackTimer = setInterval(() => {
        console.log("Hacking in progress...");
    }, 1000);

    setTimeout(() => {
        clearInterval(hackTimer);
        console.log("Hack complete.");
    }, 10000);
})();
`;

let enterCount = 0;
let backspaceCount = 0;
let codeIndex = 0;


document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('container').style.display = 'flex';
    document.getElementById('entryBox').value = '';
    document.getElementById('entryBox').placeholder = 'This Site is not meant for Mobile, Please ';
    enterCount = 0;
    backspaceCount = 0;
});

document.addEventListener('keydown', function(event) {
    let codeDisplay = document.getElementById('codeDisplay');
    let charsToAdd = 4;

    if (event.key === 'Enter') {
        enterCount++;
        if (enterCount === 3) {
            enterCount = 0;
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('container').style.display = 'none';
            document.getElementById('entryBox').value = 'Access Granted';
            document.getElementById('entryBox').style.color = 'green';
        }
        return;
    }

    if (event.key === 'Backspace') {
        backspaceCount++;
        if (backspaceCount === 3) {
            backspaceCount = 0;
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('container').style.display = 'none';
            document.getElementById('entryBox').value = 'Access Denied';
            document.getElementById('entryBox').style.color = 'red';
        }
        return;
    }

    if (codeIndex < codeSnippet.length) {
        let nextPart = codeSnippet.substring(codeIndex, codeIndex + charsToAdd);
        codeDisplay.textContent += nextPart;
        codeIndex += charsToAdd;
    } else {
        codeIndex = 0; // Reset codeIndex to start from the beginning of the code snippet
    }
});
window.setInterval(function() {
    var elem = codeDisplay
    elem.scrollTop = elem.scrollHeight;
  }, 0);
// Handle icon clicks to open password cracker
document.getElementById('icon1').addEventListener('click', function() {
    document.getElementById('passwordCracker').classList.remove('hidden');
});
document.getElementById('icon2').addEventListener('click', function() {
    document.getElementById('passwordCracker').classList.remove('hidden');
});
document.getElementById('icon3').addEventListener('click', function() {
    document.getElementById('passwordCracker').classList.remove('hidden');
});
  

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
}
// Handle password cracking
document.getElementById('crackButton').addEventListener('click', function() {
    let passwordInput = document.getElementById('passwordInput').value;
    let crackerOutput = document.getElementById('crackerOutput');

    crackerOutput.textContent = 'Cracking password...\n';
    

    // Simulate password cracking process
    setTimeout(() => {
        crackerOutput.textContent += `Password cracked: ${generatePassword()}\n`;
    }, 2000); // Simulate delay for password cracking
});

window.onload = function(){
    document.getElementById('close').onclick = function(){
        
        return false;
    };
};

