const { error } = require("console");

x=["the","at","there","some","my","of","be","use","her","than","and","this","an","would","first","a","have","each","make","water","to","from","which","like","been","in","or","she","him","call","is","one","do","into","who","you","had","how","time","oil","that","by","their","has","its","it","word","if","look","now","he","but","will","two","find","was","not","up","more","long","for","what","other","write","down","on","all","about","go","day","are","were","out","see","did","as","we","many","number","get","with","when","then","no","come","his","your","them","way","made","they","can","these","could","may","said","so","people","part"]

alpha_groups=[1:["a","b","c","d","e"],2:["f","g","h","i","j"],3:["k","l","m","n","o"],4:["p","q","r","s","t"],5:["u","v","w","x","y","z"]]

aa = gentree(x)

function gentree(words) {
    alpha_groups = [["a","b","c","d","e"],["f","g","h","i","j"],["k","l","m","n","o"],["p","q","r","s","t"],["u","v","w","x","y","z"]]
    for (let i = 0; i < x.length; i++) {
        //y is word_at_i
        y = words[0]
        head = new nod(false);
        travaler = head
        pred = travaler
        //b is is_last_letter
        b=false
        for (let j = 0; j < y.length; j++) {
            //a is alpha_code
            if(j == y.length-1){
                //if its last letter
                b=true
            }
            
            a = char_to_alpha(acces_letter(y, j))

            if(travaler.is_alpha_in(a)){
                travaler = get_tri_child_by_alpha(travaler, a)
                skip
            }

            c = new nod(b)
            travaler.add_child(a, c)
        }
        
    }
}


function get_tri_child_by_alpha(tri_node,alpha){
    return(tri_node.get_childs_map.get(alpha))
}
function char_to_alpha(char_1){
    alpha_groups = [["a","b","c","d","e"],["f","g","h","i","j"],["k","l","m","n","o"],["p","q","r","s","t"],["u","v","w","x","y","z"]]

    x = order_char(char_1)
    x = int_devide(x,5)-2
    //range 1-5
    if(x<=0 || x>5){
        Error()
    }
    return x
}
function int_devide(a,b){
    return Math.floor(a/b)
}
function order_char(char_1){
    if(typeof(char_1)!="String"){
        Error()
    }
    if(char_1.length!=1){
        Error()
    }
    return char_1.charCodeAt(0)


}
function acces_letter(strn,x){
    return strn[x]

}



class tri{
    constructor (){
        this.head = new nod(false)

}

class nod{
    constructor (is_a_word){
        if(typeof(is_a_word)!="Boolian"){
            Error()
        }
        this.is_a_word = is_a_word;
        this.childs_map = new Map();
    }
    constructor (is_a_word, childs_map) {
        if(typeof(childs)!="Map"){
            Error()
        }
        if(typeof(nod1)!="nod"){
            Error()
        }
        this.is_a_word = is_a_word
        this.childs_map = childs_map
    }
    function add_child(alpha_code,child_nodd) {
        this.childs_map[alpha_code] = child_nodd
    }
    function is_alpha_in(alpha_code) {
        for (let i = 0; i < childs_map.length; i++) {
            const element = childs_map[i];
            if(alpha_code == element){
                retrun(true)
            }
        }
        return(false)
    }
}

function combine_maps(map1,map2){
    if(typeof(map1)!="Map"){
        Error()
    }
    if(typeof(map2)!="Map"){
        Error()
    }
    a = map2.keys()
    for (let i = 0; i < a.length; i++) {
        const b = a[i];
        if (is_in_map(map1,b)) {
            
        }
        map1.set()
        
    }
    return 
}
function is_in_map(map,key){
    retrun( map.has(key))
}

function add_child_to_nod(nod1,childs_alpha_code,nod2){
    b = nod1.get_childs
    a = new nod(nod1.is_a_word,nod1.get_childs().set(childs_alpha_code,nod2))
    return a
}