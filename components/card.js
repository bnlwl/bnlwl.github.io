const template = document.createElement('template')

template.innerHTML = `
  <style>
  .card {
    padding: 0.8em 1.7em;
    background-color: transparent;
    border-radius: 0.3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    text-transform: uppercase;
    color: #00a97f;
    z-index: 1;
    width: 140px;
    height: 70px;
  }

  .card::before,
  .card::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: #00a97f;
    transition: 0.65s ease-in-out;
  }

  .card::before {
    top: -1em;
    left: -1em;
  }

  .card::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  .card:hover::before,
  .card:hover::after {
    height: calc(100% * 3);
    width: calc(100% * 1.5);
  }

  .card:hover {
    color: rgb(10, 25, 30);
  }

  .card:active {
    filter: brightness(0.8);
  }
  </style>
  <div class="card">
    <div class="name" />
  </div>
`

class Card extends HTMLElement {
  static get observedAttributes(){
    return ['name', 'href'];
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get href() {
    return this.getAttribute('href');
  }

  set href(value) {
    this.setAttribute('href', value);
  }


  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$name = this.getSelector('.name');
    this.$card = this.getSelector('.card');

    this.$card.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('onClick', {
          detail: {
            name: this.name,
            href: this.href
          }
        })
      )
    });
  }

  getSelector(selector) {
    return this._shadowRoot.querySelector(selector)
  }

  attributeChangedCallback(name, oldVal, newVal){
    this.render();
  }

  render(){
    this.$name.innerHTML = this.name;
  }
}

window.customElements.define('element-card', Card);
