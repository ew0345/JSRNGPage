function main() {
    var inputs = [document.getElementsByClassName('num')[0].value, document.getElementsByClassName('num')[1].value];

    var nums = [parseInt(inputs[0]), parseInt(inputs[1])];

    var output = document.getElementsByClassName('output')[0];

    if (Number.isInteger(nums[0])) {
        if (Number.isInteger(nums[1])) {
            var out = random(nums[0], nums[1]);
            output.innerHTML = "Random Number: "+out;
        } else {
            if (output.innerHTML.includes("not valid")) {
                output.innerHTML = output.innerHTML+"\n";
            } else {
                output.innerHTML = "";
            }
            output.innerHTML = output.innerHTML+" "+inputs[1]+" is not a valid number.";
        }
    } else {
        if (output.innerHTML.includes("not valid")) {
            output.innerHTML = output.innerHTML+"\n";
        } else {
            output.innerHTML = "";
        }
        output.innerHTML = output.innerHTML+" "+inputs[0]+" is not a valid number.";
    }
}

function random(max, min) {
    console.log("Max Num: "+max+"\nMin Num :"+min);
    var rand = Math.floor(Math.random() * max+1);
    console.info('Initial Roll: '+rand);

    while (rand < min) {
        rand = Math.floor(Math.random() * max+1);
        console.info('Rerolled to: '+rand);
    }

    return rand;
}