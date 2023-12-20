let btn=document.querySelectorAll(".btn");
let msg=document.querySelector(".new-container");
let msgp=document.querySelector(".msg");
let newbtn=document.querySelector("#new-btn");
let resbtn=document.querySelector(".res-btn");



let turnO=true;




let winnerpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame =()=>{
    turnO=true;
    enblebox();
    msg.classList.add("hide");
};

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled= true;
        checkwinner();
        
    });
});

const showwinner= (win)=>{
    msgp.innerText=`Congratulations ${win}  has Won`;
    msg.classList.remove("hide");
    disablebox();
};

const disablebox=()=>{
    for(let box of btn){
        box.disabled=true;
    }
};

const checkwinner = ()=>{
    for(let pattern of winnerpattern){
        let val1=btn[pattern[0]].innerText;
        let val2=btn[pattern[1]].innerText;
        let val3=btn[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!="" ){
            if(val1===val2 && val2 ===val3){
                showwinner(val1);
            }
        }
    }
};

const enblebox =()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
};

newbtn.addEventListener("click" , resetgame);
resbtn.addEventListener("click" , resetgame);