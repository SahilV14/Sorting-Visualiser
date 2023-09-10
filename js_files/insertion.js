
async function insertion(){
    if(hasPressedStop ==true){
        return;
    }
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        if(hasPressedStop ==true){
            return;
        }
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await waitforme(delay);

        if(hasPressedStop ==true){
            return;
        }

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            if(hasPressedStop==true){
                return;
            }
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            if(hasPressedStop==true){
                return;
            }
            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                if(hasPressedStop ==true){
                    return;
                }
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    disableStopSortingBtn();
});


