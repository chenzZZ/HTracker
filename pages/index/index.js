//index.js
const app = getApp()

Page({
	data:{
		edit:'',
		addname:'',
		showtracktype:false,
		showrecordtype:false,
		newplacehold:'请添加想要追踪的爱好/习惯...',
		newtrackpicker:[
			["——追踪类型——","爱好","习惯"],
			["——记录方式——","打卡","进度条"]
		],
		trackpickervalue:[
			["","hobby","habit"],
			["","check","slide"]
		],
		multiIndex:[0,0,0]
	},
  addList:function(e){
		this.setData({newplacehold:''});
	},
	inputedit:function(e){
		let that = this;
		that.data.addname = e.detail.value;
	},
	bindMultiPickerChange: function (e) {
		this.setData({
				multiIndex: e.detail.value
		})
	},
	bindMultiPickerColumnChange: function (e) {
		console.log(e)
	},
	saveNewList:function(e){
		let that = this;
		const details = e.detail.value;
		const tracktxt = that.data.addname;console.log(tracktxt);
		const tracktype = that.data.trackpickervalue[0][details[0]];
		const recordtype = that.data.trackpickervalue[1][details[1]];
	}
})
