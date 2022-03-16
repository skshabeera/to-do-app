function dlt_b(index){
    var list=JSON.parse(localStorage.getItem("keys"));
    list.splice(index,1)
    // ShowTask(list)
    localStorage.setItem("keys",JSON.stringify(list))
    ShowTask(list)
  }
  function ShowTask(list){
    var docid=document.getElementById("input1");
    var todulist=document.getElementById("todoList");
    var local=JSON.parse(localStorage.getItem("keys"))
    li=""
    index=0
    for (j of local){
      li+="<li>"+j+"<input type='button'value='delete' onclick='dlt_b("+index+")'/> </li>"
      index++
    }
    document.getElementById("todoList").innerHTML = li
    var list=JSON.parse(localStorage.getItem("keys"))
    var to_show="you have"+index+"tasks"
    document.getElementById("footer").innerHTML=to_show;
  }
  function clearAll(){
    var docid=document.getElementById("input1");
    var footer=document.getElementById("footer");
    localStorage.removeItem("keys")
    document.getElementById("todoList").innerHTML=" "
    document.getElementById("footer").innerHTML=" "
  }
  function addBtn() {
     var docid=document.getElementById("input1");
     var loc=localStorage.getItem("keys")
     list=[]
     if (loc==null){
          list.push(docid.value)
          localStorage.setItem("keys",JSON.stringify(list))
    }else{
        //  var loc=localStorage.getItem("keys");
          var storage = JSON.parse(loc);
          storage.push(docid.value);
          localStorage.setItem("keys",JSON.stringify(storage));
    }
    docid.value=" "
    ShowTask(list)
  }