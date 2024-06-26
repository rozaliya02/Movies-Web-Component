import { html, render } from "https://esm.run/lit-html@1";
import { getUserData } from "../services/authService.js";

const template = ctx => html`<div
    class="jumbotron jumbotron-fluid text-light"
    style="background-color: #343a40;"
  >
    <img
      src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
      class="img-fluid"
      alt="Responsive image"
    />
    <h1 class="display-4">Movies</h1>
    <p class="lead">
      Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
    </p>
  </div>
  ${ctx.isAuthenticated ? html`<movies-component></movies-component>` : ""}`;

class Home extends HTMLElement {
  connectedCallback() {
    Object.assign(this, getUserData());

    this.render();
  }

  render() {
    render(template(this), this, { eventContext: this });
  }
}

export default Home;
