/*11.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
 Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C*/

function convert(c, f) {
    let cTF = ((c * 1.8) + 32);
    let fTC = ((f - 32) / 1.8);
    console.log(`${c}°C is ${cTF}°F /// ${f}°F is ${fTC}°C`);
};

convert(60, 45); // 60°C is 140°F /// 45°F is 7.222222222222222°C