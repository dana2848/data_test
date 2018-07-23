// class Foodbycountry {
//   constructor(name, star){
//     this.name = name;
//     this.star = star;
//   }
// }

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
       console.log(myObj);
    // var korean = (
    //   this.name = myObj.koreanfood.name,
    //   this.star = myObj.koreanfood.star
    // );
    // document.getElementById("name").innerHTML = 'restaurant name ' + korean.name;
    // document.getElementById("star").innerHTML = 'star rated ' + korean.star;



    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/dana2848/data_test/master/dat.json", true);
  xhttp.send();
}
