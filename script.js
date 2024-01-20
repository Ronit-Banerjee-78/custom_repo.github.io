const APIURL="https://api.github.com/users/"


const getUser=async(username)=>{
      const res=await fetch(`${APIURL+username}/repos`);
      const data=await res.json();

console.log(data);



let itemperPage=10;
let curentPAge=1;
  const repoLength=data.length;
  const pages=[];

  for(let i=0;i<=Math.ceil(repoLength/itemperPage);i++){
    pages.push(i)
  }

  const indexofLastPage=curentPAge*itemperPage;
  const indexofFisrtPage=indexofLastPage-itemperPage;
  const currentItems=data.slice(indexofFisrtPage,indexofLastPage);
console.log(currentItems);
console.log(indexofFisrtPage);
console.log(indexofLastPage);
//showing data
const rowHap=document.querySelector('.row')

const cardsShow=()=>{
  currentItems.map((user)=>{
    const postData=document.createElement("div")
    postData.classList.add('.card');
    postData.innerHTML=`
    <div class="card col-6" style="width: 35rem;">
     <div class="card-body">
     <h5 class="card-title">${user.name}</h5>
     <p class="card-text">${user.description}.</p>
     <a href="#" class="btn btn-primary">${user.language}</a>
     </div>
     </div>
    `

rowHap.appendChild(postData);
// console.log(user.name)

  })
}
cardsShow();

const prevBtn=()=>{
  if((curentPAge-1)*itemperPage){
    curentPAge=curentPAge-1
    // cardsShow();
    console.log(currentItems);
  }
}
const nxtBtn=()=>{
  if((curentPAge*itemperPage)/repoLength){
    curentPAge=curentPAge+1;
    // cardsShow();
    console.log(currentItems);

  }
}
document.getElementById("prev").addEventListener("click",prevBtn);
document.getElementById("next").addEventListener("click",nxtBtn);
}
getUser("johnpapa");

