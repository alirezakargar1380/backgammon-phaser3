var intervalID = null;
class Controller
{

	constructor()
	{
		emitter.on(G.ANSWER_SET, this.answerSet, this)
		socket.on(G.EVENT_NEW_TURN, this.startTimer.bind(this))
		socket.on(G.EVENT_GAME_RESULT, this.roundResult.bind(this))
		socket.on("boxesAndDots_send_answer", this.setCoordinate.bind(this))
		socket.on(G.EVENT_NEW_TURN, (game) => {
			if (client.id === game.turn)
			{
				model.locked = true
			}
			model.turn = game.turn
			model.results = game.scores
			console.log(game)
			// model.turn.clientId = game.turn
		})
		// socket.on(G.JOINED, this.switchScene.bind(this))
		socket.on(G.JOINED, () => {
			socket.emit("ready", {
				battle_id: battle._id
			})
		})
	}

	answerSet(params) {
		clearInterval(intervalID)
		model.answer(params)
	}

	setCoordinate(params) {
		if (params.coordinate === "timeout")
			return

		let color = client.id === params.client_id ? "green_vertical" : "red_bar"
		model.lines[params.coordinate].answer.parentContainer.setMark(color)
	}

	roundResult(result) {
		console.log("GAME IS FINISHED")
		console.log(result)
		model.result = result
	}

	switchScene() {
		// console.log("im switch scene")
		if (game.scene.isActive('SceneWaiting')){
			game.scene.switch('SceneWaiting', 'SceneMain')
		}
	}

	startTimer() {
		// console.log("im start time")
		this.switchScene()
		let timeleft = model.round_time ?? 10;
		model.seconds = timeleft
		if (intervalID !== "") {
			clearInterval(intervalID)
		}
		intervalID = setInterval(function(){

			if(timeleft <= 0){
				clearInterval(intervalID);
				intervalID = ""
				return
			}
			timeleft -= 1;

			model.seconds = timeleft

		}, 1000);
	}

}