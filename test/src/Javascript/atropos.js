let vlx = document.querySelector("[valuex]")
let vly = document.querySelector("[valuey]")


class AtroposComponent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.atropos = new Atropos({
        el: this.querySelector('.atropos'),
        onEnter() {
          console.log('Atropos Component: Enter');
        },
        onLeave() {
          console.log('Atropos Component: Leave');
        },
        onRotate(x, y) {
          vlx.innerHTML = x;
          vly.innerHTML = y;
        }
      });

      console.log('Atropos Component: Connected!', this);
    }

    disconnectedCallback() {
      this.atropos.destroy();

      console.log('Atropos Component: Disconnected!', this);
    }
  }

  customElements.define('atropos-component', AtroposComponent);