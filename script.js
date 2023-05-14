

var row = null;

function Submit(){
   var dataEntered = retrieveData();
   var readData =readingDataFromLocalStorage();
   if(dataEntered == false){
    msg.innerHTML = "Please Enter Data!"
   }else{
    if(row == null){
        insert(readData);
        msg.innerHTML = "Data Insetred!"
       }else{
        update();
        msg.innerHTML = "Data Updated!"
    
       }
   }
   document.getElementById("form").reset();
}


function retrieveData(){
  var name1 =  document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var id = document.getElementById("id").value;
  var gender = document.getElementById("gender").value;
  var email =document.getElementById("email").value;

  var arr = [name1, age, id ,gender ,email];
  if(  arr.includes("")){
    return false
  }else{
  return arr;
  }
}


function readingDataFromLocalStorage(dataEntered){
    var n = localStorage.setItem("Name", dataEntered[0])
    var a = localStorage.setItem("Age", dataEntered[1])
    var i = localStorage.setItem("ID", dataEntered[2])
    var g = localStorage.setItem("Gender", dataEntered[3])
    var e = localStorage.setItem("Email", dataEntered[4])


    var n1 = localStorage.setItem("Name", n)
    var a1 = localStorage.setItem("Age", a)
    var i1 = localStorage.setItem("ID", i)
    var g1 = localStorage.setItem("Gender", g)
    var e1 = localStorage.setItem("Email", e)

  var arr = [n1, a1 ,i1 ,g1 ,e1];
  return arr;

}


function insert(readData){
var row = table.insertRow();
 row.insertCell(0).innerHTML = readData[0];
 row.insertCell(1).innerHTML = readData[1];
 row.insertCell(2).innerHTML = readData[2];
 row.insertCell(3).innerHTML = readData[3];
 row.insertCell(4).innerHTML = readData[4];
 row.insertCell(5).innerHTML = `<button onclick =edit(this)>Edit</button>
                                <button onclick =remove(this)>Delete</button>`;


}


function edit(td){
 row = td.parentElement.parentElement;
 document.getElementById("name").value = row.cells[0].innerHTML;
 document.getElementById("age").value = row.cells[1].innerHTML;
 document.getElementById("id").value = row.cells[2].innerHTML;
 document.getElementById("gender").value = row.cells[3].innerHTML;
 document.getElementById("email").value = row.cells[4].innerHTML;

}


function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("age").value;
    row.cells[2].innerHTML = document.getElementById("id").value;
    row.cells[3].innerHTML = document.getElementById("gender").value;
    row.cells[4].innerHTML = document.getElementById("email").value;
    row = null;
}

function remove(td){
    var ans = confirm("Are you sure you want to delete?")
    if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    
    }

}