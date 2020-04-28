const submenuClass = document.getElementById('submenu').classList
const openSubmenuBtn = document.getElementById('open-modal')
const closeSubmenuBtn = document.getElementById('close-modal')

const openSubmenuBtnClass = openSubmenuBtn.classList
const closeSubmenuBtnClass = closeSubmenuBtn.classList

openSubmenuBtn.addEventListener('click', ()=>{
    submenuClass.toggle('mobile-sub-menu')
    openSubmenuBtnClass.toggle('hide-original')
    closeSubmenuBtnClass.toggle('hide-original')
  
})
closeSubmenuBtn.addEventListener('click', ()=>{
    submenuClass.toggle('mobile-sub-menu')
    openSubmenuBtnClass.toggle('hide-original')
    closeSubmenuBtnClass.toggle('hide-original')
})