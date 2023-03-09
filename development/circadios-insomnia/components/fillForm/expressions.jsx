export default class FillForm {
	constructor(protocol, locals, viewModel) {
		this.protocol = protocol;
		this.viewModel = viewModel;
	}

	isFormCompleted() {
		return (this.protocol.clientItems || []).some(x => x.medicalFormData);
	}
}