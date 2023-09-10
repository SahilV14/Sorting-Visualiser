

async function heap_root(ele, i, array_length) {
    console.log("Heapify");
    var left = 2 * i ;
    var right = 2 * i + 1;
    var max = i;

    if (left < array_length && ele[left].style.height > ele[max].style.height) {
       console.log("left");
        max = left;
    }

    if (right < array_length && ele[right].style.height > ele[max].style.height){
        console.log("right");
        max = right;
    }

    if (max != i) {
        console.log("new max");    
        await swap(ele[i], ele[max]);    
        await heap_root(ele, max, array_length);    
    }
}

async function swap2(ele, index_A, index_B) {
    console.log("swap");
    var temp = ele[index_A].style.height;
    ele[index_A].style.height = ele[index_B].style.height;
    ele[index_B].style.height = temp;
}

async function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

async function heapify(ele){
    var array_length = ele.length;
    console.log('sort');
    for (var i = Math.floor(array_length/2)-1; i >= 0; i--) {
        heap_root(ele, i,array_length);
        await waitforme(delay);
      }
}

async function heapSort(ele , n) {
if(n === 0){
    return
}

    await swap(ele[0] , ele[n])
    await heap_root(ele , 0 , n - 1);
    await heapSort(ele , n - 1)
}


const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll(".bar");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapify(ele)
    await heapSort(ele , ele.length - 1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});