const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.producto'),
      modalClose = document.querySelectorAll('.close-modal'),
      modalCard= document.querySelectorAll('.modal-card')
let activeModal=(modalClick)=>{
    modal[modalClick].classList.add('active-modal')
}
cardBtn.forEach((cardBtn,i)=>{
    cardBtn.addEventListener('click',()=>{
        activeModal(i)
    })
})
modalClose.forEach((modalClose)=> {
    modalClose.addEventListener('click',()=>{
        modal.forEach((modalRemove)=>{
            modalRemove.classList.remove('active-modal')
        }) 
    })
})
modal.forEach((modal)=>{
    modal.addEventListener('click',()=>{
        modal.classList.remove('active-modal')
    })
})
modalCard.forEach((modalCard)=>{
    modalCard.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
})