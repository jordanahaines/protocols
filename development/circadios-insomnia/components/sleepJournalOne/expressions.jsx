export default class SleepJournalOne {
  constructor(protocol, locals, viewModel) {
    this.protocol = protocol;
    this.viewModel = viewModel;
  }

  isFormCompleted() {
    return false;
    // Find Sleep Journal One Form
    const sleepJournalOne = (this.protocol.clientItems || []).find(
      (x) => x.formName === "Sleep Journal One"
    );
    return !!(sleepJournalOne && sleepJournalOne.formAnswers);
  }
}
