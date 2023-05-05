export default class FillForm {
  constructor(protocol, locals, viewModel) {
    this.protocol = protocol;
    this.viewModel = viewModel;
  }

  isFormCompleted() {
    const intake = (this.protocol.clientItems || []).find(
      (x) => x.formName === "Schedule Form"
    );
    return !!(intake && intake.formAnswers);
  }
}
