/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
 function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});


if(localStorage.getItem('rank1') == null)
  {
      localStorage.setItem('rank1',50);  
      localStorage.setItem('rank2',22);  
      localStorage.setItem('rank3',57);  
      localStorage.setItem('rank4',18);  
      localStorage.setItem('rank5',37);  
      localStorage.setItem('rank6',10);  
      localStorage.setItem('rank7',80); 
      localStorage.setItem('rank8',70);  
      localStorage.setItem('rank9',60);   
  }




var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");
var span1 = document.getElementById("rank1");
 
button11.onclick = function(){

  span1.innerHTML = Number(localStorage.getItem('rank1'));
  span1.innerHTML++;
  localStorage.setItem('rank1',span1.innerHTML);
           
};     
span1.innerHTML = localStorage.getItem('rank1');


button12.onclick = function(){
  span1.innerHTML = Number(localStorage.getItem('rank1'));
  span1.innerHTML--;
  localStorage.setItem('rank1',span1.innerHTML);               
};
span1.innerHTML = localStorage.getItem('rank1');


var button21 = document.getElementById("button21");
var button22 = document.getElementById("button22");
var span2 = document.getElementById('rank2');
button21.onclick = function(){
  span2.innerHTML = Number(localStorage.getItem('rank2'));
  span2.innerHTML++;
  localStorage.setItem('rank2',span2.innerHTML); 
};    span2.innerHTML = localStorage.getItem('rank2');


button22.onclick = function(){
  span2.innerHTML = Number(localStorage.getItem('rank2'));
  span2.innerHTML--;
  localStorage.setItem('rank2',span2.innerHTML);               
};    span2.innerHTML = localStorage.getItem('rank2');



var button31 = document.getElementById("button31");
var button32 = document.getElementById("button32");
var span3 = document.getElementById('rank3');
button31.onclick = function(){
  span3.innerHTML = Number(localStorage.getItem('rank3'));
  span3.innerHTML++;
  localStorage.setItem('rank3',span3.innerHTML);
};    span3.innerHTML = localStorage.getItem('rank3');
button32.onclick = function(){
  span3.innerHTML = Number(localStorage.getItem('rank3'));
  span3.innerHTML--;
  localStorage.setItem('rank3',span3.innerHTML);
};    span3.innerHTML = localStorage.getItem('rank3');




var button41 = document.getElementById("button41");
var button42 = document.getElementById("button42");
var span4 = document.getElementById('rank4');
button41.onclick = function(){
  span4.innerHTML = Number(localStorage.getItem('rank4'));
  span4.innerHTML++;
  localStorage.setItem('rank4',span4.innerHTML);
};    span4.innerHTML = localStorage.getItem('rank4');
button42.onclick = function(){
  span4.innerHTML = Number(localStorage.getItem('rank4'));
  span4.innerHTML++;
  localStorage.setItem('rank4',span4.innerHTML);
};    span4.innerHTML = localStorage.getItem('rank4');


var button51 = document.getElementById("button51");
var button52 = document.getElementById("button52");
var span5 = document.getElementById('rank5');
button51.onclick = function(){
  span5.innerHTML = Number(localStorage.getItem('rank5'));
  span5.innerHTML++;
  localStorage.setItem('rank5',span5.innerHTML);
};    span5.innerHTML = localStorage.getItem('rank5');

button52.onclick = function(){
  span5.innerHTML = Number(localStorage.getItem('rank5'));
  span5.innerHTML--;
  localStorage.setItem('rank5',span5.innerHTML);
};    span5.innerHTML = localStorage.getItem('rank5');


var button61 = document.getElementById("button61");
var button62 = document.getElementById("button62");
var span6 = document.getElementById('rank6');
button61.onclick = function(){
  span6.innerHTML = Number(localStorage.getItem('rank6'));
  span6.innerHTML++;
  localStorage.setItem('rank6',span6.innerHTML);
};    span6.innerHTML = localStorage.getItem('rank6');

button62.onclick = function(){
  span6.innerHTML = Number(localStorage.getItem('rank6'));
  span6.innerHTML--;
  localStorage.setItem('rank6',span6.innerHTML);
};    span6.innerHTML = localStorage.getItem('rank6');



var button71 = document.getElementById("button71");
var button72 = document.getElementById("button72");
var span7 = document.getElementById('rank7');
button71.onclick = function(){
  span7.innerHTML = Number(localStorage.getItem('rank7'));
  span7.innerHTML++;
  localStorage.setItem('rank7',span7.innerHTML);
};    span7.innerHTML = localStorage.getItem('rank7');

button72.onclick = function(){
  span7.innerHTML = Number(localStorage.getItem('rank7'));
  span7.innerHTML--;
  localStorage.setItem('rank7',span7.innerHTML);
};    span7.innerHTML = localStorage.getItem('rank7');



var button81 = document.getElementById("button81");
var button82 = document.getElementById("button82");
var span8 = document.getElementById('rank8');
button81.onclick = function(){
  span8.innerHTML = Number(localStorage.getItem('rank8'));
  span8.innerHTML++;
  localStorage.setItem('rank8',span8.innerHTML);
};    span8.innerHTML = localStorage.getItem('rank8');

button82.onclick = function(){
  span8.innerHTML = Number(localStorage.getItem('rank8'));
  span8.innerHTML--;
  localStorage.setItem('rank8',span8.innerHTML);
};    span8.innerHTML = localStorage.getItem('rank8');



var button91 = document.getElementById("button91");
var button92 = document.getElementById("button92");
var span9 = document.getElementById('rank9');
button91.onclick = function(){
  span9.innerHTML = Number(localStorage.getItem('rank9'));
  span9.innerHTML++;
  localStorage.setItem('rank9',span9.innerHTML);
};    span9.innerHTML = localStorage.getItem('rank9');

button92.onclick = function(){
  span9.innerHTML = Number(localStorage.getItem('rank9'));
  span9.innerHTML--;
  localStorage.setItem('rank9',span9.innerHTML);
};    span9.innerHTML = localStorage.getItem('rank9');



