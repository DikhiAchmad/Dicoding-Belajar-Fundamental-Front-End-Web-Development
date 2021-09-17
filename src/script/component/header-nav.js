import customStyle from '../../scss/custom.scss';

class HeaderNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      ${customStyle}
    </style>
    <header id="nav">
         <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
            <div class="container-fluid">
                  <a class="navbar-brand" href="#nav">CupKery</a>
             </div>
         </nav>
    </header>
    `;
  }
}

customElements.define('header-nav', HeaderNav);
