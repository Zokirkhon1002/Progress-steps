let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let items = document.querySelectorAll(".item");
let progressLine = document.getElementById("line");

let CA = 1; // birdonadan surish uchun kerak bo'ladi.


rightBtn.addEventListener('click', () => {
    CA++
    if(CA > items.length){
        CA = items.length;
    }
    asosiyFunksiya();
})

leftBtn.addEventListener('click', () => {
    CA--
    if(CA < 1){
        CA = 1;
    }
    asosiyFunksiya();
})

function asosiyFunksiya() {
    items.forEach((item,index) => {
        if(index < CA){
            item.classList.add('active'); // agar CA qiymatning indeksidan katta bo'lsa active class qo'shadi
        } else {
            item.classList.remove('active');
        }
    })

    let activeHolat = document.querySelectorAll(".active");

    
    progressLine.style.width = (activeHolat.length - 1) / (items.length - 1) * 100 + '%';
console.log(progressLine);

    if(CA === 1){
        leftBtn.disabled = true;
    }else if(CA === items.length){
        rightBtn.disabled = true;
    } else {
        rightBtn.disabled = false;
        leftBtn.disabled = false;
    }
}

