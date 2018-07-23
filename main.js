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
    //   this.name = myObj.FoodScountry.Koreanfood.queens.name
    //   // this.star = myObj.FoodScountry.queens.star
    // );
    document.getElementById("name1").innerHTML = 'restaurant name ' + myObj.FoodScountry.Koreanfood.queens.name;
    document.getElementById("star").innerHTML = 'star rated ' + this.star = myObj.FoodScountry.queens.star;



    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/dana2848/data_test/master/dat.json", true);
  xhttp.send();
}
