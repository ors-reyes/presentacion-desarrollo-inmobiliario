function displayUbi(entries){
    let entry = entries[0]
    if(entry.isIntersecting){
        ubi.classList.add("block")
    }
}
let observerUbi = new IntersectionObserver(displayUbi,
{
   threshold:0.5
})
let svgUbi = document.querySelector(".obs")
observerUbi.observe(svgUbi)
let ubi = document.querySelector(".ubi")
// ----------------------
function displayUbi2(entries){
    let entry = entries[0]
    if(entry.isIntersecting){
        ubi2.classList.add("block")
    }
}
let observerUbi2 = new IntersectionObserver(displayUbi2,
{
   threshold:0.75
})
let svgUbi2 = document.querySelector(".obs2")
observerUbi2.observe(svgUbi2)
let ubi2 = document.querySelector(".ubi2")
//-------
const obsIz = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("addIz")
            }
        })
    },
    {
        threshold:0.5
    }
)
const izS = document.querySelectorAll(".iz")
izS.forEach(iz=>{
    obsIz.observe(iz)
})
//-------
const obsDr = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("addDr")
            }
        })
    },
    {
        threshold:0.5
    }
)
const drS = document.querySelectorAll(".dr")
drS.forEach(dr=>{
    obsDr.observe(dr)
})
//-------
const obsbottom = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("addbottom")
            }
        })
    },
    {
        threshold:0.5
    }
)
const bottomS = document.querySelectorAll(".bottom")
bottomS.forEach(dr=>{
    obsbottom.observe(dr)
})
//-------
const obstop = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("addtop")
            }
        })
    },
    {
        threshold:0.5
    }
)
const topS = document.querySelectorAll(".top")
topS.forEach(top=>{
    obstop.observe(top)
})