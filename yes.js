const db = window.openDatabase("data","1.0","data",1*1024*1024)

function Yes(){
    var the = ["blue","red","purple","green","pink","navy"]
    const randomIndex = Math.floor(Math.random() * the.length);

    // get random item
    const item = the[randomIndex];

    document.getElementById("esads").style.color = item;
}

function randomInt(){
    const randomint2 =  Math.random(5,100) * 100
    document.getElementById("the2").innerHTML = Math.ceil(randomint2);
}

function random(){
    const xhr = new XMLHttpRequest()
    xhr.open("get","https://some-random-api.ml/animal/cat")
    xhr.send()
    xhr.onload = function() {
        if (xhr.status === 200) {
          //parse JSON datax`x
          data = JSON.parse(xhr.responseText);
          document.getElementById("the").innerHTML = data.fact;
          document.getElementById("the").style.backgroundColor = "black";
          document.getElementById("the").style.border = "width style color";
          document.getElementById("the").style.textAlign = "center";
        } else if (xhr.status === 404) {
          console.log("No records found")
        }
      }
      
      //triggered when a network-level error occurs with the request
      xhr.onerror = function() {
        console.log("Network error occurred")
      }
      
}

function getInputValue(){
  var inputVal = document.getElementById("coolinput").value;
  var inputVal2 = document.getElementById("coolio").value;
  var s = parseInt(inputVal);
  var sdf = parseInt(inputVal2);
  var s = s + sdf;
  document.getElementById("coolvalue").innerHTML = s;
  document.getElementById("coolvalue").style.color = "black";

  console.log(`${s}`);
}

function s(){
  var inputVal = document.getElementById("coolinput").value;
  var inputVal2 = document.getElementById("coolio").value;
  var s = parseInt(inputVal);
  var sdf = parseInt(inputVal2);
  var s = s + sdf;
  document.getElementById("coolvalue").innerHTML = s;
  document.getElementById("coolvalue").style.color = "black";

  console.log(`${s}`);
}

function getInputValue2(){
  var s = document.getElementById("yespls").value;
  console.log(s);
  db.transaction(t => {
    t.executeSql('CREATE TABLE IF NOT EXISTS stuff2(name TEXT, price TEXT)');
    }, e => console.error(e));
  console.log("first one work");
  db.transaction(t=>{
    t.executeSql("INSERT OR IGNORE INTO stuff2(name,price) VALUES (hi,bye)")
  })
  console.log("second one work");
  db.transaction(t => t.executeSql(
    'SELECT * FROM stuff2',[],
    (t, result) => console.log(result)
));
}

