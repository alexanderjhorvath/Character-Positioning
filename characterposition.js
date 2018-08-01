function characterPosition(str) {

  var str = str.split(" ").join("").split("");
  var letterCount = {};

  for (var i in str) {
    letterCount[str[i]] = [];
  }

  for (var i in str) {
    letterCount[str[i]].push(i);
  }

  console.log(letterCount);


}

characterPosition("lighthouse in the house");