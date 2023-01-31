// Add event listener on keyup
var right_sett = new Set();
var left_sett = new Set();
const left_values = new Set(["a","s","d","f"]);
const right_values = new Set(["j","k","l",";",]);
const left = ["f","d","s","a"];
const right = ["l","k","j",";"];


document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    console.log(name + code);
    console.log(2);
    document.getElementById(name).classList.remove("key");
    document.getElementById("liss").innerHTML += name

    console.log(sett)

    console.log("left.has(name)");
    console.log(left_values.has(name));

    total = 0;
    if(left_values.has(name)){
      total=0;
      for (let i = 0; i < 3; i++) {
        const element = left[i];
        if (left_sett.has(element)) {
          total += 2 ** i
        }
      }
      left_sett.clear();
    }

    if(right_values.has(name)){
      total=0;
      for (let i = 0; i < 3; i++) {
        const element = right[i];
        if (right_sett.has(element)) {
          total += 2 ** i
        }
      }
      right_sett.clear();
    }

    if(total!=0){
      document.getElementById("numss").innerHTML += String(total)+","
    }
    if(total==7){
      document.getElementById("numss").innerHTML = "="
    }

    document.getElementById("sett").innerHTML = "="+String(Array.from(left_sett)+"="+String(Array.from(right_sett)));

  }, false);
  
  
  document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    console.log(name + code);
    console.log(1);
    document.getElementById(name).classList.add("key");

    if(left_values.has(name)){
      left_sett.add(name)
    }

    if(right_values.has(name)){
      right_sett.add(name)
    }
    console.log(String(Array.from(left_sett))+String(Array.from(right_sett)));
    document.getElementById("sett").innerHTML = "="+String(Array.from(left_sett)+"="+String(Array.from(right_sett)));

  }, false);

  