const mediaQueryList = window.matchMedia('(min-width: 992px)')

const infoTab = document.querySelector('#info-tab')
const shareTab = document.querySelector('#share-tab')
const popupTab = document.querySelector('#popup-tab')
const shares = document.querySelectorAll('.share')



shares.forEach(share => {
    share.addEventListener('click', () => {
        const isInfoTabActive = infoTab.getAttribute('data-show')
        const isShareTabActive = shareTab.getAttribute('data-show')
        const isPopupTabActive = popupTab.getAttribute('data-show')

        if (mediaQueryList.matches) {
            if (isInfoTabActive == 'true' && isShareTabActive == 'false' && isPopupTabActive == 'false') {
                shareTab.setAttribute('data-show', 'false')
                popupTab.setAttribute('data-show', 'true')
            } else {
                popupTab.setAttribute('data-show', 'false')
            }
        } else {
            if (isInfoTabActive == 'true' && isShareTabActive == 'false') {
                infoTab.setAttribute('data-show', 'false')
                shareTab.setAttribute('data-show', 'true')
                popupTab.setAttribute('data-show', 'false')
            } else {
                infoTab.setAttribute('data-show', 'true')
                shareTab.setAttribute('data-show', 'false')
                popupTab.setAttribute('data-show', 'false')
            }
        }


    })
})

if (mediaQueryList.matches) {
    // The initial state matches the media query
    console.log('Initial state: The window width is at least 768px.');
} else {
    // The initial state does not match the media query
    console.log('Initial state: The window width is less than 768px.');
}
