import { html, render } from "https://esm.run/lit-html@1";
import { register } from "../services/authService.js";

const template = ctx => html`<form
  class="text-center border border-light p-5"
  action="#"
  method="post"
  @submit=${ctx.onSubmit}
>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      class="form-control"
      placeholder="Email"
      name="email"
      value=""
    />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      name="password"
      value=""
    />
  </div>

  <div class="form-group">
    <label for="repeatPassword">Repeat Password</label>
    <input
      type="password"
      class="form-control"
      placeholder="Repeat-Password"
      name="repeatPassword"
      value=""
    />
  </div>

  <button type="submit" class="btn btn-primary">Register</button>
</form>`;

class Register extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeatPassword");

    if (password != repeatPassword) {
      notify("passwords must match", "error");
      return;
    }
    if (password.length < 6) {
      notify("passwords too short", "error");
      return;
    }

    register(email, password)
      .then(res => {
        notify("Successful Registration", "success");
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  render() {
    render(template(this), this, { eventContext: this });
  }
}

export default Register;
