import indexModel from '../model/indexModel';
const indexController = {
	init() {
		return async(ctx, next) => {
			ctx.body = await ctx.render('./index')

		}
	},
	update() {
		return async(ctx, next) => {
			const update = new indexModel(ctx);

			ctx.body = await update.updateData()
		}
	},
	star(){
		return async (ctx,next)=>{
			if(ctx.response.header['x-pjax']){
				ctx.body = '<x-star></x-star>'
			}
			else{
				ctx.body = await ctx.render('./star');
			}
		}
	},
	praise(){
		return async (ctx,next)=>{
			if(ctx.response.header['x-pjax']){
				ctx.body = '<x-praise></x-praise>'
			}
			else{
				ctx.body = await ctx.render('./index');
			}
		}
	},
	advertisement(){
		return async(ctx,next)=>{
			ctx.body = '<div style="height:30px;background-color:red;margin-top:20px;" id="advertisement">我是广告我是广告啦~~~</div>'
		}
	}

}
export default indexController;