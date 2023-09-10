async function heapSort(arr, n) {
    for (var i = n / 2 - 1; i >= 0; i--) {
        if(hasPressedStop == true){
            return;
        }
        await heapify(arr, n, i);
    }
    for (var i = n - 1; i > 0; i--) {
        if(hasPressedStop == true){
            return;
        }

        arr[0].style.background = 'cyan';
        arr[i].style.background = 'green';
        swap(arr[0], arr[i]);
        await waitforme(delay);

        await heapify(arr, i, 0);
    }
    setColor();
}

async function heapify(arr, n, i) {
    if(hasPressedStop == true){
        return;
    }
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 
    
    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)) {
        // arr[l].style.background = 'yellow'; 
        arr[largest].style.background = 'red';
        largest = l;
        swap(arr[largest], arr[l]);
        // arr[l].style.background = 'yellow';
    }
    

    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)) { 
        // arr[r].style.background = 'lightgreen';
        arr[largest].style.background = 'yellow'; 
        largest = r;
        swap(arr[largest], arr[r]);
        arr[largest].style.background = 'cyan'
    }

    if (largest != i) {
        arr[largest].style.background='red';
        arr[i].style.background='red';
        swap(arr[i], arr[largest]);
        waitforme(delay);
        arr[largest].style.background='cyan';
        arr[i].style.background='cyan';

        await heapify(arr, n, largest);
    }
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener("click", async function () {
    let arr = document.querySelectorAll('.bar');
    let n = arr.length;

    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await heapSort(arr,n);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    disableStopSortingBtn();
});