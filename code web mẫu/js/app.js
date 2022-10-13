    document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active')) // thêm một sự kiện khi bấm vào nút menu trên màn hình id header-wrapper sẽ đc thêm một class là active sẽ giúp hiện thanh mage-content

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active')) //thêm một sự kiện khi bấm vào nút x trên màn hình id header-wrapper sẽ đc bỏ cái class active sẽ giúp đóng thanh mega-content