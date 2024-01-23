const APIURL="https://api.github.com/users/"
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const btnVal=document.querySelector("#firs")
const btnVal2=document.querySelector("#sec")
const btnVal3=document.querySelector("#thir")
const old=document.querySelector("#old")
const newp=document.querySelector("#newp")

const pageNumber = document.querySelector(".page-link")

const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 3000);
}

// hiding loading
function hideLoading() {
    loader.classList.remove("display");
}


//getting the details
const getUser=async(username)=>{
displayLoading();
  const res=await fetch(`${APIURL+username}/repos`);
  const data=await res.json();

  console.log(data);

  const itemperPage=10;
  let curentPAge=1;
  let pages=[];
  const repoLength=data.length;
  const pageCount=Math.ceil(repoLength/itemperPage);



  for(let i=0;i<=pageCount;i++){
    pages.push(i)
  }

//showing data
const rowHap=document.querySelector('#row')

const cardsShow=()=>{
  const indexofLastPage=curentPAge*itemperPage;
  const indexofFisrtPage=indexofLastPage-itemperPage;

  const currentItems=data.slice(indexofFisrtPage,indexofLastPage);
console.log(data.sort(data.created_at))

 rowHap.innerHTML= currentItems.map((user)=>

`<div class="col-md-6">
    <div class="card mt-4" style="width: 30rem;">
     <div class="card-body">
     <h5 class="card-title">${user.name}</h5>
     <p class="card-text">${user.description}.</p>
     <a href="#" class="btn btn-primary">${user.language}</a>
     </div>
     </div>
     </div>
    `

  ).join('');
more()
  console.log(indexofFisrtPage);
console.log(indexofLastPage);
}
hideLoading();

cardsShow();



document.querySelectorAll("#pagination-number").forEach((button) => {
  const pageIndex = Number(button.getAttribute("page-index"));
  if (pageIndex) {
    button.addEventListener("click", () => {
     console.log(pageIndex);
    });
  }

})
function prevPage(){
  if((curentPAge-1)*itemperPage){

    curentPAge--;

    cardsShow();
    hideLoading();
  }
  console.log(curentPAge);
}
function more(){

  if(curentPAge<=1){
    old.innerHTML=`
    <button class="rounded-pill rev" disabled id="old"><i class="bi bi-arrow-left"></i>Older</button>
    `
  }else{
    old.innerHTML=`
    <button class="rounded-pill" id="old"><i class="bi bi-arrow-left"></i>Older</button>
    `
  }

  if(curentPAge>=pageCount){
    newp.innerHTML=`
    <button class="rounded-pill rev" disabled id="newp"><i class="bi bi-arrow-right"></i>New</button>
    `
  }else{
    newp.innerHTML=`
    <button class="rounded-pill" id="newp"><i class="bi bi-arrow-right"></i>New</button>
    `
  }


}
function prevPageF(){
  if((curentPAge-1)*itemperPage){


    curentPAge--;


    cardsShow();
    hideLoading();

  }
  console.log(curentPAge);
}

function nextPage(){
  if((curentPAge*itemperPage)/repoLength){

    curentPAge++;
    cardsShow();
    hideLoading();


  }if((curentPAge*itemperPage)/repoLength<=0){
    rowHap.innerHTML=

`<div class="col-md-6">
    <div class="card mt-4" style="width: 30rem;">
     <div class="card-body">
     <h5 class="card-title">No More data</h5>
     </div>
     </div>
     </div>
    `

  }
  console.log(curentPAge);


}

prevButton.addEventListener("click",prevPage,displayLoading,false)
nextButton.addEventListener("click",nextPage,displayLoading,false)

old.addEventListener("click",prevPageF,displayLoading,false)
newp.addEventListener("click",nextPage,displayLoading,false)

btnVal.addEventListener("click",()=>{
if(curentPAge==btnVal){
btnVal.classList.add("active")
}{


  curentPAge=1;
  cardsShow();

}


})
btnVal2.addEventListener("click",()=>{
  curentPAge=2
  cardsShow()

})
btnVal3.addEventListener("click",()=>{
curentPAge=3
cardsShow()

})

}

getUser("johnpapa");

