const arrows = document.querySelectorAll('.arrow');
let i=0;
arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        if(e.target.id === 'left'){
            i--;
            if(i < 0){
                i=pics.length-1;
            }
        }else if (e.target.id === 'right'){
            i++;
            if(i > pics.length-1){
                i=0; //마지막 이미지인경우, 첫번째로 이동
            }
        }
        container.style.transform = `url(images/${pics[i]})`;
    });
});