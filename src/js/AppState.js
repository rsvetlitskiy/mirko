class AppState {
  constructor() {
    this.currentState = "home";
  }
  
  set = (state) => {
    this.currentState = state;

    console.log(this.currentState);
  }
}

export default new AppState();