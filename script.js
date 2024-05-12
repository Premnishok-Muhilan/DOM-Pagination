// function check() {
//   var food = document.querySelectorAll(".food:checked");
//   console.log(food.length);
// }

//Header
var h1 = document.createElement("h1");
h1.innerHTML = "PAGINATION TASK";
h1.setAttribute("id", "title");
h1.setAttribute("align", "center");

var p = document.createElement("p");
p.innerHTML = `
TASK DETAILS:
Design a Pagination in DOM manipulation.
Create the needed HTML elements using DOM.
Use only CSS for the design.
Usage of any deprecated tags is not allowed to be created in DOM.
Include the test suite in your html file which is given below.
`;
p.setAttribute("style", "margin: 20px");
p.setAttribute("id", "description");
document.body.append(h1, p);

//Creating indivudial elements
var container = document.createElement("div");
container.className = "container";
container.setAttribute("style", "margin-left:100px");

var row = document.createElement("div");
row.className = "row";

var col = document.createElement("div");
col.className = "col-6 text-center mx-auto";
//col.setAttribute("style", "background-color: gray");

var table_responsive = document.createElement("div");
table_responsive.className = "table-responsive";

var table = document.createElement("table");
table.setAttribute("class", "table table-bordered");
//table.className = "table table-striped table-dark";
table.id = "myTable";

var thead = document.createElement("thead");

var header_row = document.createElement("tr");

var th1 = document.createElement("th");
th1.scope = "col";
th1.innerHTML = "id";

var th2 = document.createElement("th");
th2.scope = "col";
th2.innerHTML = "name";

var th3 = document.createElement("th");
th3.scope = "col";
th3.innerHTML = "email";

//Creating tbody element
var tbody = document.createElement("tbody");

header_row.append(th1, th2, th3);
thead.append(header_row);
table.append(thead, tbody);

table_responsive.append(table);
col.append(table_responsive);
row.append(col);
container.append(row);

document.body.append(container);

//PAGINATION
//For this pagination task first,last, previous and next buttons are required.
var nav = document.createElement("nav");
nav.setAttribute("class", "navbar-centre");
var ul = document.createElement("ul");
ul.setAttribute("class", "pagination");

var li1 = document.createElement("li");
li1.setAttribute("class", "page-item");
var a1 = document.createElement("a");
a1.setAttribute("class", "page-link");
//href attribute
a1.setAttribute("href", "javascript:load(0)");
a1.innerHTML = "First";
li1.append(a1);

var li2 = document.createElement("li");
li2.setAttribute("class", "page-item");
var a2 = document.createElement("a");
a2.setAttribute("class", "page-link");
//href attribute
a2.setAttribute("href", "javascript:load(10)");
a2.innerHTML = "2";
li2.append(a2);

var li3 = document.createElement("li");
li3.setAttribute("class", "page-item");
var a3 = document.createElement("a");
a3.setAttribute("class", "page-link");
//href attribute
a3.setAttribute("href", "javascript:load(20)");
a3.innerHTML = "3";
li3.append(a3);

var li4 = document.createElement("li");
li4.setAttribute("class", "page-item");
var a4 = document.createElement("a");
a4.setAttribute("class", "page-link");
//href attribute
a4.setAttribute("href", "javascript:load(30)");
a4.innerHTML = "4";
li4.append(a4);

var li5 = document.createElement("li");
li5.setAttribute("class", "page-item");
var a5 = document.createElement("a");
a5.setAttribute("class", "page-link");
//href attribute
a5.setAttribute("href", "javascript:load(40)");
a5.innerHTML = "5";
li5.append(a5);

var li6 = document.createElement("li");
li6.setAttribute("class", "page-item");
var a6 = document.createElement("a");
a6.setAttribute("class", "page-link");
//href attribute
a6.setAttribute("href", "javascript:load(50)");
a6.innerHTML = "6";
li6.append(a6);

var li7 = document.createElement("li");
li7.setAttribute("class", "page-item");
var a7 = document.createElement("a");
a7.setAttribute("class", "page-link");
//href attribute
a7.setAttribute("href", "javascript:load(60)");
a7.innerHTML = "7";
li7.append(a7);

var li8 = document.createElement("li");
li8.setAttribute("class", "page-item");
var a8 = document.createElement("a");
a8.setAttribute("class", "page-link");
//href attribute
a8.setAttribute("href", "javascript:load(70)");
a8.innerHTML = "8";
li8.append(a8);

var li9 = document.createElement("li");
li9.setAttribute("class", "page-item");
var a9 = document.createElement("a");
a9.setAttribute("class", "page-link");
//href attribute
a9.setAttribute("href", "javascript:load(80)");
a9.innerHTML = "9";
li9.append(a9);

var li10 = document.createElement("li");
li10.setAttribute("class", "page-item");
var a10 = document.createElement("a");
a10.setAttribute("class", "page-link");
//href attribute
a10.setAttribute("href", "javascript:load(90)");
a10.innerHTML = "Last";
li10.append(a10);

ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, li10);
nav.append(ul);

document.body.append(nav);

/*XML-HTTP request(XHR):If the interaction has been done
based on the API then it is called the XML-HTTP request.*/

// 4 simple steps:
// Step 1:create a XHR Object
var request = new XMLHttpRequest();

// Step 2: initate a request / Open a request
request.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);

// Step 03: initate a request
request.send();

//Step 04:if the server responds success
request.onload = function () {
  var data_obj_arr = JSON.parse(request.response);

  for (var i = 0; i < 10; i++) {
    // Create a new row
    var newRow = tbody.insertRow(i);

    // Insert cells for each of the table header
    var id_cell = newRow.insertCell(0);
    var name_cell = newRow.insertCell(1);
    var email_cell = newRow.insertCell(2);

    // Add input values to the cells
    id_cell.innerHTML = data_obj_arr[i].id;
    name_cell.innerHTML = data_obj_arr[i].name;
    email_cell.innerHTML = data_obj_arr[i].email;

    tbody.append(id_cell, name_cell, email_cell);
  }
};

function load(start_index) {
  console.log("start_index", start_index);

  var data_obj_arr = JSON.parse(request.response);
  console.log(data_obj_arr);

  tbody.innerHTML = "";

  var row = 0;
  let end_index = start_index + 10;
  console.log(end_index);
  for (var i = start_index; i < end_index; i++) {
    console.log("i", i);
    // Create a new row
    var newRow = tbody.insertRow(row);

    // Insert cells for each of the table header
    var id_cell = newRow.insertCell(0);
    var name_cell = newRow.insertCell(1);
    var email_cell = newRow.insertCell(2);

    // Add input values to the cells
    id_cell.innerHTML = data_obj_arr[i].id;
    name_cell.innerHTML = data_obj_arr[i].name;
    email_cell.innerHTML = data_obj_arr[i].email;

    tbody.append(id_cell, name_cell, email_cell);
    row += 1;
  }
}
