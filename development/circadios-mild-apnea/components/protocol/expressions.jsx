export default class FillForm {
  constructor(protocol, locals, viewModel) {
    this.protocol = protocol;
    this.viewModel = viewModel;
  }

  // Returns whether or not it's the week indicated by week X
  isWeek(x) {
    return moment().diff(moment(this.protocol.dateCreated), "weeks") + 1 === x;
  }

  isWeekOne() {
    console.log("Is Week One?");
    console.log(moment().diff(moment(this.protocol.dateCreated), "weeks") + 1);
    return this.isWeek(1);
  }
  isWeekTwo() {
    return this.isWeek(2);
  }
  isWeekThree() {
    return this.isWeek(3);
  }
  isWeekFour() {
    return this.isWeek(4);
  }
  isWeekFive() {
    return this.isWeek(5);
  }
  isWeekSix() {
    return this.isWeek(6);
  }
  isWeekSeven() {
    return this.isWeek(7);
  }
  isWeekEight() {
    return this.isWeek(8);
  }
  isWeekNine() {
    return this.isWeek(9);
  }

  showScheduleLink() {
    // Must schedule during odd weeks
    return (
      (moment().diff(moment(this.protocol.dateCreated), "weeks") + 1) % 2 === 1
    );
  }

  isFormCompleted() {
    return true;
    const intake = (this.protocol.clientItems || []).find(
      (x) => x.formName === "Intake"
    );
    return !!(intake && intake.formAnswers);
  }
}
