function displayUbi(entries){
    let entry = entries[0]
    if(entry.isIntersecting){
        ubi.classList.add("block")
    }
}
let observerUbi = new IntersectionObserver(displayUbi,
{
   threshold:0.75
})
let svgUbi = document.querySelector(".obs")
observerUbi.observe(svgUbi)
let ubi = document.querySelector(".ubi")
// ----------------------
// function displayUbi2(entries){
//     let entry = entries[0]
//     if(entry.isIntersecting){
//         ubi2.classList.add("block")
//     }
// }
// let observerUbi2 = new IntersectionObserver(displayUbi2,
// {
//    threshold:0.75
// })
// let svgUbi2 = document.querySelector(".obs2")
// observerUbi2.observe(svgUbi2)
// let ubi2 = document.querySelector(".ubi2")