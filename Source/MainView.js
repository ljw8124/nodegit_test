	/**
Constructor
*/
class MainView extends AView
{
	constructor()
	{
		super()

		//TODO:edit heredfdfd
		console.log('스테이징 테스트');
		console.log('web에서 변경');
        console.log('커밋푸시테스트222');
	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here
		console.log('23124')

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

window["MainView"] = MainView
