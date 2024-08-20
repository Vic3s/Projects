const cc2 = (word, key) => {

  const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"
  ,"o","p","q","r","s","t","u","v","w","x","y","z"];

  const abCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"
  ,"O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let arr = [];

  for(i of word){
    if(i === i.toUpperCase() && !Number(i) && i != "0"){
      if((abCaps.indexOf(i) + abc.indexOf(key)) >= (abCaps.length)){
        arr.push(abCaps[(abCaps.indexOf(i) + abc.indexOf(key)) - (abCaps.length)]);
      }else if((abCaps.indexOf(i) + abc.indexOf(key)) < (abCaps.length)){
        arr.push(abCaps[abCaps.indexOf(i) + abc.indexOf(key)]);
      }
    }else if(i !== i.toUpperCase() && !Number(i)){
      if((abc.indexOf(i) + abc.indexOf(key)) >= (abc.length)){
        arr.push(abc[(abc.indexOf(i) + abc.indexOf(key)) - (abc.length)]);
      }else if((abc.indexOf(i) + abc.indexOf(key)) < (abc.length)){
        arr.push(abc[abc.indexOf(i) + abc.indexOf(key)]);
      }
    }
    if(!abc.includes(i) && !abCaps.includes(i)) arr.push(i);
  }

  return arr.join("");
}

const decc2 = (word, key) => {

  const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"
  ,"o","p","q","r","s","t","u","v","w","x","y","z"];

  const abCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"
  ,"O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let arr = [];

  for(i of word){

    if(i === i.toUpperCase() && !Number(i) && i != "0"){
      if((abCaps.indexOf(i) - abc.indexOf(key)) >= 0){
        arr.push(abCaps[(abCaps.indexOf(i) - abc.indexOf(key))]);
      }else if((abCaps.indexOf(i) - abc.indexOf(key)) < 0){
        arr.push(abCaps[(abCaps.indexOf(i) - abc.indexOf(key)) + abCaps.length]);
      }
    }else if(i !== i.toUpperCase() && !Number(i)){
        if((abc.indexOf(i) - abc.indexOf(key)) >= 0){
          arr.push(abc[(abc.indexOf(i) - abc.indexOf(key))]);
        }else if((abc.indexOf(i) - abc.indexOf(key)) < 0){
          arr.push(abc[(abc.indexOf(i) - abc.indexOf(key)) + abc.length]);
        }
    }
          if(!abc.includes(i) && !abCaps.includes(i)) arr.push(i);
  }
  
  return arr.join("");
}

  exports.cc2 = cc2;
  exports.decc2 = decc2;