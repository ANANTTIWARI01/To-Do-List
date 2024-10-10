let Input= document.querySelector("input")
let Button= document.querySelector("button")
let Taskdiv = document.querySelector("#taskdiv")
let arr=[]
let arr2=[]
let count =0
let ChangedobjectTask =null;
let EDitingPara = null;
let flag = false



Button.addEventListener('click',function(e){
if(Input.value===""){
  alert("Please Enter the task !")
}

else{

if(EDitingPara){
  EDitingPara.innerHTML = Input.value

  arr = arr.map((taski)=>{  
    if(taski.task === ChangedobjectTask){
        taski.task=Input.value
      }
      return taski
     })

     console.log(arr);
Input.value=""
flag= true
EDitingPara=null

}

else{
  ToDoList()
}
}
})



function ToDoList(){

  let para= document.createElement("p")
  para.innerHTML=Input.value  
  Taskdiv.append(para)
  
  
  
  let Editbtn = document.createElement("button")
  Editbtn.innerHTML="Edit"
  let Delatebtn = document.createElement("button")
  Delatebtn.innerHTML="Delete"
  let divi= document.createElement("div")
  divi.append(para,Editbtn,Delatebtn)
  ////////////////
  ///////////////////
  let obj={
  id:++count,
  task:para.innerHTML
}
  arr.push(obj)

  
  Taskdiv.append(divi)

  Input.value=""
  ////////////////////////////////////////
  Editbtn.addEventListener('click',function(){

          Edit(obj.task,para)
  })


  Delatebtn.addEventListener('click',function(){

          DeleteTask(obj.id,divi);
})
}

///////////////////////////////

function DeleteTask(id,secondarydiv){
  arr = arr.filter((task)=> task.id !== id)
// console.log(arr);

secondarydiv.remove()
}


/////////////////////////

function Edit(task,para){
  Input.value = para.innerHTML

  ChangedobjectTask= task

    flag=true
    
    EDitingPara = para
}



