
  const APIURL="https://api.github.com/users/"

const getUser=async(username)=>{
      const res=await fetch(`${APIURL+username}/repos`);
      const data=await res.json();

      console.log(data);

const rowHap=document.querySelector('.row')

const cardsShow=()=>{
  data.map((user)=>{
    const postData=document.createElement("div")
    // rowHap.classList.add('.row');
    postData.innerHTML=`
    <div class="card col-6" style="width: 35rem;">
     <div class="card-body">
     <h5 class="card-title">{user.name}</h5>
     <p class="card-text">{user.description}.</p>
     <a href="#" class="btn btn-primary">{user.language}</a>
     </div>
     </div>
    `

rowHap.appendChild(postData);
// console.log(user.name)

  })
}
cardsShow();


// let tab='';
// data.forEach(function(user){
//   tab +=`
//   <div class="card col-6" style="width: 35rem;">
//   <div class="card-body">
//     <h5 class="card-title">${user.name}</h5>
//     <p class="card-text">${user.description}.</p>
//     <a href="#" class="btn btn-primary">${user.language}</a>
//   </div>
//   </div>`
// })


  }

  getUser("johnpapa");




  {/* <div class="card col-6" style="width: 35rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  <div class="card col-6" style="width: 35rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div> */}


