import customStyle from '../../scss/custom.scss';

class FooterCr extends HTMLElement {
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
      <footer>
        <p class="copyright text-center">Copyright 2021 @ Dikhi Achmad Dani.</p>
      </footer>
      `;
  }
}

customElements.define('footer-cr', FooterCr);
