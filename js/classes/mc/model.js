class Model
{
	constructor() {
		this.test = null
		this.lineCoordinates = {}
		this.boxColors = {}
		this.grid_size = 4
		this.lines = {}
		// this.turn = 6992
		// this.turn = 0
		this._question = {}
		this.locked = false
		this.remaining_questions = 0
		this.question_time = 0
		this.turn = {clientId: 6992}
		this.leading_client_id = 6992
		this.correct_answer = ""
		this.my_selected_answer = ""
		this._results = []
		this.round_time = 10
		this.seconds = 0
	}

	set seconds(val)
	{
		this._seconds = val;
		emitter.emit(G.TIMER);
	}

	answer(params) {
		model.lines[params.coordinate].answer.parentContainer.setMark("red_bar")
	}

	get seconds()
	{
		return this._seconds;
	}

	set question(val)
	{
		this._question = val;
		this.locked = false
		this.my_selected_answer = ""
		this.correct_answer = ""
		emitter.emit(G.EVENT_NEW_QUESTION);
	}

	get question()
	{
		return this._question;
	}

	set results(val)
	{
		this._results = val;
		emitter.emit(G.EVENT_QUESTION_RESULT);
	}

	get results()
	{
		return this._results
	}

}