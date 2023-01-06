import menus from './definitions.js'

/**
 * @description it manages all the mechanism around the home page...
 */
export default class HomePageManage {
    constructor() {
        this.menuList = document.querySelectorAll('.home_page_banner .menu .wrap_menu_item a');
        this.spanList = document.querySelectorAll('.home_page_banner .description_company span');
        this.title =  document.querySelector('.home_page_banner .description_company h2');
        this.descriptions =  document.querySelector('.home_page_banner .description_company p');
        this.assets = document.querySelector('.home_page_banner .assets');
        this.btns = document.querySelectorAll('.home_page_banner .wrap_button button');
        this.img = document.createElement('img');

        this.init()
        this.inputOnClick()
    }

    /**
     * @description initializes the different actions en the home page
     * @return {void}
     */
    init() {
        if(this.menuList.length && this.spanList.length) {
            const company = Array.from(this.menuList)[0]
            this.span = Array.from(this.spanList)[1]

            this.injectHtmlContent(company)
        }
    }

    /**
     * @description toggle the content of the sidebar according to the actions on the menu
     * @return {void}
     */
     toggleContentMenu() {
        Array.from(this.menuList).forEach((item) => {
            item.onclick = (e) => {
                e.preventDefault();

                this.imageManager()
                this.injectHtmlContent(item)
            }
        })
    }

    /**
     * @description it displays the details of each menu
     * @param assetUrl{string}
     * @param href{string | undefined}
     * @return {void}
     */
    displayCompanyLogo(assetUrl, href) {
        this.img.alt = "Logo";

        Array.from(this.btns).forEach((item, i) => {
            item.onclick = (e) => {
                e.preventDefault();

                if (item.classList.value === 'btn_logo' &&  i % 2 === 0) {
                    this.imageManager(assetUrl, 'flex')
                    this.assets.appendChild(this.img)
                } else {
                    if (!href) {
                        const modal = document.querySelector('modal-prog-chris')
                            .shadowRoot.querySelector('.modal')
                        modal.style.display = 'flex';
                        return;
                    }
                    window.location.href = href;
                }
            }
        })
    }

    /**
     * @description manages the display of application logos
     * @param src{string | undefined}
     * @param display{string | undefined}
     * @return {void}
     */
    imageManager(src='', display='none') {
        this.img.src = src;
        this.assets.style.display = display;
    }

    /**
     * @description inject values to dom elements
     * @param item{HTMLElement}
     * @return {void}
     */
    injectHtmlContent(item) {
        const h2 = [...menus].filter((t) => t.name.toLowerCase() === item.innerHTML.toLowerCase())[0]

        this.span.innerHTML = item.innerHTML;
        this.title.innerHTML = h2.title
        this.descriptions.innerHTML = h2.descriptions
        this.displayCompanyLogo(h2.asset, h2.href)
    }

    inputOnClick() {
        const inputs = document.querySelectorAll('form input')
       for(let input of inputs) {
           input.onclick = (e) => {
               e.preventDefault();
               e.stopPropagation();
               console.log(e)
           }
       }
    }
}