let search = document.getElementById('search');
let jerseys = document.querySelectorAll('.home-jersey');

search.addEventListener('input',function(){
    let searchValue = search.value.toLowerCase();

    jerseys.forEach(function(jersey){
        let jerseyName = jersey.textContent.toLowerCase();

        if (jerseyName.includes(searchValue)){
            jersey.style .display = 'block';
        }else{
            jersey.style .display = 'none'
        }
    })
})

// moblie screen
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

    bar.addEventListener('click',()=> {
        nav.classList.toggle('active');
    })
