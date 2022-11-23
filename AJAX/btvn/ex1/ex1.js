
var arrUrl = [];
async function getApi() {
  var tableList = document.getElementById('name');
  var result = [];
  
  try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    
      if (response.json().length > 0) {
        result = response.json();
      }
  } catch() {
    return;
  }
  
  if (result.length == 0) {
    var emptyRow = document.createElement('tr');
    emptyRow.innerHtml = 'KO co du lieu');
    tableList.appendChild(emptyRow);
    return;
  }
  
  for (let i = 0; i < result.length; i++){
    let dataRow = document.createElement('tr');
    let dataCell = document.creatElement('td');
    dataCell.innerHtml = results[i].name;
    
    dataCell.click = showDetail.bind(this, results[i].name, results[i].url, this);
    
    dataRow.appendChild(dataCell);
    
    tableList.appendChild(dataRow);
  }
}
getApi();

function showDetail(name, imageLink, event) {
  document.getElementById('ten_can_sua_doi').innerHTML = name;
  document.getElementById('anh_sua_doi').src = arrUrl[ull].imageLink;
  toggleActive(event);
}

function toggleActive(event) {
  event.target.classList.toggle('active');
}
