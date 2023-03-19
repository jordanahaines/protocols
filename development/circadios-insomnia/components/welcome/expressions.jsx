export default class Welcome {
  constructor(protocol, locals, viewModel) {
    this.protocol = protocol;
    this.viewModel = viewModel;
  }

  getWelcomeName() {
    return this.shouldShowButton() ? "world!" : "Client!";
  }

  getMoment() {
    return moment().format("YYYY [escaped] YYYY");
  }

  shouldShowButton() {
    return !(this.protocol.clientItems || []).some((x) => x.welcome);
  }
}
