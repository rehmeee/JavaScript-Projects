let arr = [];
let checkedArray = [];
const completedtag = document.getElementById('completedtag');
completedtag.style.display = 'none';

function add() {

  const description = document.getElementById("description").value;

  // console.log(description);
  if(description == '' || description ==" "){
    return;
  }
  let obj = {
    id: Date.now(),
    description: description,
  };
  arr.push(obj);
  // console.log(obj);
  addToParagraph(arr);
  const inputval = document.getElementById("description");
  inputval.value = "";
}
function addToParagraph(arr) {
  let htmlString = "";
  const para = document.getElementById("show");
  
  console.log("this in addtopagargaph called");
  console.log("the length of arr is " +  arr.length);
  console.log(arr);
  let i = 0;
  arr.forEach((obj) => {
    i++;
    console.log("the object is add to list");
    htmlString += `<div class = "task">
      <input type="checkbox" name="" id="check" onclick="remove(${obj.id})">
        <p id="textCheck">${obj.description}</p>
        <button onclick="del(${obj.id})"><img src="pngwing.com.png" alt="delete bin image"></button>
        </div>
        
        `;
        
        
      });
      console.log("the value of i is" + i);
  para.innerHTML = htmlString;
}

function del(id){
  checkedArray = checkedArray.filter((obj)=>{
    if(obj.id == id){
      return;
    }
    return obj;
  })
  addCompleted()
  arr = arr.filter((obj)=>{
    if(obj.id == id){
      return;
    }
    return obj;
  })
  addToParagraph(arr);
}
//  this is for completed tasks
function addCompleted(){
  completedtag.style.display = '';
  const completddiv = document.getElementById('completed');
  let htmlString = '';
  if(checkedArray.length == 0){
    completedtag.style.display = 'none';
    return;
  }
  else {
    checkedArray.forEach((obj)=>{
      htmlString +=`
      <div class = "showCompleted" id="showCompleted">
      <input type="checkbox" name="" id="check2" onclick="add2(${obj.id})" checked  >
      <p id="textCompleted">${obj.description}</p>
      <button onclick="del(${obj.id})"><img src="pngwing.com.png" alt="delete bin image"></button>
          </div>
      `;
  
    })
  }
  completddiv.innerHTML = htmlString;
}
function add2(id){
  const copleteddiv = document.getElementById("completed");
  console.log('add2 is called');
  if(checkedArray.length ==0){
      copleteddiv.style.display = "none";

      return;
    }
    checkedArray = checkedArray.filter((obj)=>{
      if(obj.id != id){
        
        return obj;
      }
      arr.push(obj);
      return;
      
     
    });
    console.log("lenth of checked array is " + checkedArray.length);
  
  
  arr.forEach((obj)=>{
    console.log(obj.id, obj.description);
  })
  addCompleted()
  addToParagraph(arr);
}

function remove(id) {
  console.log('remove is called');
     arr=arr.filter((obj)=>{
        if(obj.id == id){
          checkedArray.push(obj);
          return;
        }
        return obj;
    })
    console.log(arr);
    addCompleted()
    addToParagraph(arr)
    
  }
 