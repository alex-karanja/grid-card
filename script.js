const hover_state = document.querySelector('.btn');
hover_state.addEventListener('mouseenter', ()=>{
    hover_state.classList.add('hover');
});
hover_state.addEventListener('mouseout', ()=>{
    hover_state.classList.remove('hover');
})