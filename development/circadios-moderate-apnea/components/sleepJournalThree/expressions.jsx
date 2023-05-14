export default class SleepJournalOne {
  constructor(protocol, locals, viewModel) {
    this.protocol = protocol;
    this.viewModel = viewModel;
  }

  isFormCompleted() {
    // Find Sleep Journal One Form
    const sleepJournalOne = (this.protocol.clientItems || []).find((x) => {
      if (x.formName !== "Moderate/Severe OSA - 3") return false;
      const diff = moment().diff(moment(x.dateCreated), "h");
      return diff < 18;
    });

    return !!(sleepJournalOne && sleepJournalOne.formAnswers);
  }
}
