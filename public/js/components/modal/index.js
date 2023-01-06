const template = document.createElement("template");
template.innerHTML = `
  <style>    
    .modal {
      width:100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      color: yellow;
      display: none;
      justify-content: center;
      align-items: center;
      background-color: rgba(221,239,204,0.32);
    }
  </style>
  <div class="modal"><slot /></div>
`;

export class ModalProgChris extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.closeModal()
    }

    closeModal() {
        const modal = this.shadowRoot.querySelector('.modal')
        modal.onclick = (e) => {
            e.preventDefault();
            modal.style.display = "none"
        }
    }
}
