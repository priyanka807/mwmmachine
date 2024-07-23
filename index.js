

// const navlinks = document.querySelectorAll('.nav-link')
// navlinks.forEach((navItems)=>{
//     navItems.addEventListener('click',(event)=>{
//         event.preventDefault()
//     document.querySelector('.active')?.classList.remove('active')
//     navItems.classList.add('active')
//     })
// })



const specification = document.getElementById('specification')
const features = document.getElementById('features')
const more_products = document.getElementById('more_products')
const view_complete_details = document.getElementById('view_complete_details')


let isShowing = false
view_complete_details.addEventListener('click',()=>{
    if(!isShowing){
        specification.style.display = "block"  ;
        features.style.display = "block"   ;
        more_products.style.display = "block"   ;
        isShowing = true
    }else{
        specification.style.display = "none"  ;
        features.style.display = "none"   ;
        more_products.style.display = "none"   ;
        isShowing = false
    }
  
    // console.log(specification,features,get_quote,view_complete_details )

})



