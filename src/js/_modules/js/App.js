class App {
  constructor() {
    this.currentState = "home";
  }

  setState = (state) => {
    this.currentState = state;
  }
}

export default new App();