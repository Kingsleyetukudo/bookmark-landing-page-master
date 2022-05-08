let open = document.querySelector('.hamburger').addEventListener('click', openMenu)

function openMenu(){
    document.querySelector('.mobile-nav-holder').classList.toggle('show')
    // document.querySelector('.mobile-nav-holder').style.width = '100%'
}

let close = document.querySelector('.close-menu').addEventListener('click', closeMenu)

function closeMenu() {
    document.querySelector('.mobile-nav-holder').classList.remove('show')

    // document.querySelector('.mobile-nav-holder').style.width = '0%'
}

// for the features nav active states
const btnContainer = document.querySelector(".features-menu");

const btns = btnContainer.getElementsByClassName("act");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Show the other features pages

document.querySelector('.simple').addEventListener('click', change)

function change() {
document.getElementById('enter').innerHTML = `<div id="check" class=" use1 use-1 container-lg mt-5 mb-lg-5">
   
<div class="image-holder1 ">
  <img src="images/illustration-features-tab-1.svg" class="img-fluid" alt="">
</div>

<div class="text-box container-sm ">
  <h1>Bookmark in one click</h1>
  <p class="text">organize your bookmarks however you like. Our simple dray-and-drop interface gives you complete control over how you manage your favourite sites.</p>

  <div class="btn-holder me-2">
    <button  class="btn me-1 bg-primary">More Info</button> 
  </div>
</div>

</div>`
}

document.querySelector('.speedy').addEventListener('click', change1)



function change1() {

    document.getElementById('enter').innerHTML= ` <div id="speedy" class=" use1 use-2 container-lg mt-5 mb-lg-5">
   
    <div class="image-holder1 ">
      <img src="images/illustration-features-tab-2.svg" class="img-fluid" alt="">
    </div>
   
    <div class="text-box container-sm ">
      <h1>Intelligent search</h1>
      <p class="text">Our powerful search feature will help you find saved sites in on time at all. No need to trawl through all of your bookmarks.</p>

      <div class="btn-holder me-2">
        <button  class="btn me-1 bg-primary">More Info</button> 
      </div>
    </div>

  </div>`
}



document.querySelector('.easy').addEventListener('click', change2)

function change2() {
    document.getElementById('enter').innerHTML = `<div id="easy" class=" use1 use-3 container-lg mt-5 mb-lg-5">
   
    <div class="image-holder1 ">
      <img src="images/illustration-features-tab-3.svg" class="img-fluid" alt="">
    </div>
   
    <div class="text-box container-sm ">
      <h1>Share your bookmarks</h1>
      <p class="text">Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.</p>

      <div class="btn-holder me-2">
        <button  class="btn me-1 bg-primary">More Info</button> 
      </div>
    </div>

  </div>`
}

