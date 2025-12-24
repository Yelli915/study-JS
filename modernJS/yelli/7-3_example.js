save_btn.addEventListener('click', (e) => {
    const item = document.createElement('li');
    item.innerHTML = `
        ${title.value} - ${author.value} 
        <span class="delete-btn">삭제</span>    
        `;
bookList.appendChild(item);
});

save_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const delButtons = document.querySelectorAll('.delete-btn');
    for (let delButton of delButtons){
        delButton.addEventListener('click', ()=>{
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
    )};
});