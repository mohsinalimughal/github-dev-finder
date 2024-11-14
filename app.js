const searchBtn = document.querySelector("#search-btn")
const profileContainer = document.querySelector(".profile-box")
const input = document.querySelector("#input")

searchBtn.addEventListener("click" , async ()=>{
  const data = await  fetch(`https://api.github.com/users/${input.value}`)
  .then(res =>res.json())
  .then((res)=>{
      console.log(res)
      
      profileContainer.innerHTML= ` 
              <div class="head">
            <div>
            <img src="${res.avatar_url}" alt="#">
              <div class="name">
                <h2>${res.name}</h2>
                <h3 class="user-name">${res.login}</h3>
                <h4>${res.created_at}</h4>
              </div>
            </div>
        </div>
            <div class="bio">
              <h5>${res.bio}</h5>
            </div>
            <div class="followers">
                <div><h4>repo</h4><h5>${res.public_repos}</h5></div>
                <div><h4>followers</h4><h5>${res.followers}</h5></div>
                <div><h4>following</h4><h5>${res.following}</h5></div>
            </div>
            <div class="links">
                <div><div><i class="fa-solid fa-location-dot"></i><p>${res.location}</p></div><div><i class="fa-solid fa-link"></i><p>${res.html_url}</p></div></div>
                <div><div><i class="fa-solid fa-building"></i><p>${res.company}</p></div><div><i class="fa-brands fa-twitter"></i><p>${res.twitter_username}</p></div></div>
            </div>

      
      
      `



  })
  .catch((err)=>{
      console.log(err)
  })
})