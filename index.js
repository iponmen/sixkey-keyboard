// Add event listener on keyup
let right_sett = new Set();
let left_sett = new Set();
const left_values = new Set(["a","s","d","f"]);
const right_values = new Set(["j","k","l",";",]);
const left = ["f","d","s","a"];
const right = ["l","k","j",";"];
const alpha_chart = {  '16': 'e',  '26': 'f',  '36': 'k',  '46': 'p',  '56': 'u',  '116': 'be',  '136': 'an',  '146': 'at',  '156': 'by',  '166': 'a',  '216': 'he',  '226': 'if',  '236': 'in',  '246': 'is',  '326': 'of',  '336': 'on',  '346': 'or',  '356': 'my',  '436': 'to',  '516': 'we',  '546': 'up',  '1136': 'can',  '1156': 'day',  '1216': 'did',  '1316': 'and',  '1336': 'all',  '1366': 'do',  '1416': 'are',  '1466': 'as',  '1546': 'but',  '2116': 'had',  '2146': 'her',  '2236': 'him',  '2246': 'his',  '2346': 'for',  '2356': 'how',  '2366': 'go',  '2446': 'its',  '2466': 'it',  '3156': 'may',  '3236': 'oil',  '3316': 'one',  '3346': 'not',  '3356': 'now',  '3366': 'no',  '3546': 'out',  '4116': 'see',  '4216': 'the',  '4366': 'so',  '4536': 'two',  '5146': 'was',  '5156': 'way',  '5236': 'who',  '5356': 'you',  '5416': 'use',  '11126': 'each',  '11136': 'been',  '11336': 'call',  '13316': 'come',  '13536': 'down',  '21466': 'get',  '21516': 'have',  '22316': 'find',  '23436': 'into',  '24336': 'from',  '31116': 'made',  '31316': 'make',  '31356': 'many',  '32316': 'like',  '33326': 'long',  '33336': 'look',  '33416': 'more',  '41216': 'said',  '41446': 'part',  '42136': 'than',  '42146': 'that',  '42156': 'they',  '42166': 'she',  '42246': 'this',  '42316': 'time',  '43316': 'some',  '51416': 'were',  '52136': 'when',  '52146': 'what',  '52336': 'will',  '52426': 'with',  '53416': 'word',  '53546': 'your',  '113546': 'about',  '135316': 'could',  '224446': 'first',  '342146': 'other',  '421246': 'their',  '421366': 'them',  '421416': 'there',  '514146': 'water',  '522126': 'which',  '535316': 'would',  '542416': 'write',  '3531146': 'number',  '4134316': 'people',  '4214166': 'these'}

let alpha = null
let sicx=false

document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    console.log(name + code);
    console.log(2);
    document.getElementById(name).classList.remove("key");
    document.getElementById("6list").innerHTML += name


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
    console.log("total="+total)
    //total is zero sometimes because the listene sometimes double taps and when the list is emptyed already it returns 0

    if(total!=0){
      document.getElementById("6num").innerHTML += String(total)
    }
    
    if(total==6){
      sicx = true
      
    }
    if (total!=0 && sicx && total!=6) {
      console.error("error",total)
      let temp1 = document.getElementById("6num").innerHTML.slice(1,document.getElementById("6num").innerHTML.length-1)
      document.getElementById("6alpha").innerHTML += temp1
      if(alpha_chart[temp1] != undefined){
        console.error("temp1",alpha_chart[temp1])
        document.getElementById("6words").innerHTML += alpha_chart[temp1] + " "
      }
      document.getElementById("6num").innerHTML += String(total)
      // if(alpha_chart[temp1] == undefined){
      //   document.getElementById("6words").innerHTML += "0" + ","
      // }
      document.getElementById("6num").innerHTML = "="
      sicx = false

    }

    if(total==7){
      document.getElementById("6num").innerHTML = "="
    }

    document.getElementById("6set").innerHTML = "="+String(Array.from(left_sett)+"="+String(Array.from(right_sett)));

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
    setHTML("6set","="+String(Array.from(left_sett)+"="+String(Array.from(right_sett))))

  }, false);

  const fs = require("fs");

  function filetester() {
    fs.open("sample.txt", "w", (err, file) => {
      if (err) throw err;
      console.log(file);
   });
  };



  function alpha_num_to_word(numstr){
    return alpha_chart[numstr]
  }

  function getHTML(id){
    document.getElementById(String(id)).innerHTML
  }
  function setHTML(id,str1){
    document.getElementById(String(id)).innerHTML = str1
  }
  function add_toHTML(id,str1){
    document.getElementById(String(id)).innerHTML += str1
  }
  //t9shi section
  