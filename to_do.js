
    var inp = document.getElementById("checkbox");
    var text = document.getElementById("text");
    var first=document.getElementById("task");
    var sec = document.getElementById("second");
    var thirdtxt = document.getElementById("thirdtext");
    var thirdch = document.getElementById("third");
    const btn1=document.getElementById("checkbox");
    const btn2=document.getElementById("second");
    var txtarea = document.getElementById("#newli");
    var frm = document.getElementById("list");
    
    
    text.style.display = "flex";
    sec.style.display = "grid";
    thirdtxt.style.display = "grid";
    // if (inp.checked == true) {
    //   text.style.display = "flex";
    //   sec.style.display = "grid";
    //   thirdtxt.style.display = "grid";
    //   third.style.display = "grid";
    // } else {
    //   text.style.display = "none";
    //   sec.style.display = "none";
    //   thirdch.style.display = "none";
    //   thirdtxt.style.display = "none";
    //}
//   }
  
  //storinng the data
  
  function setdata() {
    var text1 = document.getElementById("task").value;
    let first = document.getElementById("task").value;
    let des = document.getElementById("text").value;
    let tag = document.getElementById("thirdtext").value;
    if(!(first.value==="" || text.value===""||tag.value==="")){
    let lists = {
      title: first,
      description: des,
      tags: tag 
    };
    let arr1 = [];
    let deslist = JSON.parse(localStorage.getItem("tasks"));
    if (deslist != null) {
      deslist.push(lists);
      localStorage.setItem("tasks", JSON.stringify(deslist));
    } else {
      arr1.push(lists);
      console.log(arr1);
      localStorage.setItem("tasks", JSON.stringify(arr1));
    }      
  }         
else{
  alert("Please enter title, description and tag...");

 }
  
    showdata();
  }
  //displaying the data
  
  showdata();
  function showdata() {
    let task = JSON.parse(localStorage.getItem("tasks"));
  
    let output = "";
  
    let displaytitle = document.querySelector("#newli");
  
    task.forEach((arr1,index) => {
      output += `<li class="mainli" id="li" >${arr1.title}</li>
      </b><button id="delete" type="submit" onclick="deleteItem(${index})">X</button>`;
      // output += ` <li>${arr1.title}</li>`;
      output += `<p>${arr1.description}</p>`;
      output += ` <h6>${arr1.tags}</h6>`;
    });
  
    displaytitle.innerHTML = output;
    
    // let no = document.getElementById("newli").getElementsByTagName("li").length;
    // {
    //   document.getElementById("total").value = no;
    // }
  }
  function deleteItem(index) {
    let task = JSON.parse(localStorage.getItem("tasks"));
    task.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(task));
    showdata();
  }


  var list = document.querySelector("#newli");
  list.addEventListener(
    "click",
    function (e) {
      let arr1 = [];
      
      var t = e.target;
      if (t.classList.contains("checked")) {
        t.style.textDecoration = "line-through";
        // t.style.display = "none";
        // list.classList.remove('output');
      // let task1 = Array.from(JSON.parse(localStorage.getItem("tasks")));
        
        // localStorage.setItem("tasks", JSON.stringify(arr1));
       
        // localStorage.remove("list");      
      } else {
        t.classList.add("checked");
      }
      // task1.forEach((list) => {
      //   if (list.list === e.parentNode.children[1].value) {
      //     task1.splice(task1.indexOf(list), 1);
      //   }
      // });
   },
  
    false
  );
  