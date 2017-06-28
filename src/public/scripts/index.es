//es6
import css from '../css/index.css';
//es6
class PraiseButton{
	constructor(){
		
	}
	clickAction(){
		
	    axios.get('/index/update')
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}
class Thumb extends PraiseButton{
	constructor(){
		super()
	}
}
class Star extends PraiseButton{
	constructor(){
		super()
	}
}
export default{
	Thumb,
	Star
}