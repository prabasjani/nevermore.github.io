var stars = document.querySelectorAll('.stars a');

stars.forEach((item, index1) => {
    item.addEventListener('click', () => {
        stars.forEach((stars, index2) => {
            index1 >= index2 ? stars.classList.add('active'): stars.classList.remove('active')
        })
    })
})