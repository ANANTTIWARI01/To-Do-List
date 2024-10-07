let Input= document.querySelector("input")
let Button= document.querySelector("button")
let Taskdiv = document.querySelector("#taskdiv")
let arr=[];
let count =0

Button.addEventListener('click',function(){
  
  ToDoList()

})



function ToDoList(){

  ++count
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
  id:count,
  task:para.innerHTML
}
  arr.push(obj)
  
  Taskdiv.append(divi)

  Input.value=""
  
  Editbtn.addEventListener('click',function(){

          Edit(obj.id,para,divi)

  })


  Delatebtn.addEventListener('click',function(){

          DeleteTask(obj.id,para,divi);
})


}



function DeleteTask(id,para,divi){
  arr = arr.filter((task)=> task.id !== id)

  divi.remove()
  
  
}

function Edit(id,para,divi){
  
   Input.value = para.innerHTML

   Button.addEventListener('click',function(){

   para.innerHTML=divi.replaceWith(Input.value)

   
   })

}



