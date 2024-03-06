let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let winner=document.getElementById("winner-tag")
let turn=true // True->X false->O

const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]
turnLabel=()=>{
return turn?"X":"O"
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
           console.log("Clicked")
           box.innerText=turnLabel()
           turn=!turn
           box.disabled=true
           checkWinner();
    })
})
resetbtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
       box.innerHTML=""
       box.disabled=false
       winner.innerText="Who's Winner?"
    })
    turn=true
})
checkWinner=()=>{
    for(pattern of winPatterns){
        console.log("Pattern",pattern)
       let pos1val=boxes[pattern[0]].innerText
       let pos2val= boxes[pattern[1]].innerText
       let pos3val=boxes[pattern[2]].innerText
         
       if( pos1val!="" && pos1val===pos2val && pos2val===pos3val){
        console.log("Winner->",pos1val)
        winner.innerText=`${pos1val} `+ "is Winner"
        boxes.forEach((box)=>{
         box.disabled=true
           
         })
        return
       }

    }
}
console.log("box",boxes,resetbtn)