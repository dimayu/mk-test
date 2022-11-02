window.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.js-tab'),
        header = document.querySelector('.js-tabs'),
        tabContent = document.querySelectorAll('.js-tab__content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    header.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('js-tab')) {

            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

        if(target.classList.contains('js-tab')) {
            for(let i = 0; i < tab.length; i++) {
                tab[i].classList.remove('js-tab-active');
            }
            // Добавляем тому на который нажали
            target.classList.add('js-tab-active');
        }
    });
});