//index.js
const app = getApp()

Page({
	data:{
		edit:'',
		addname:'',
		showtracktype:false,
		showrecordtype:false,
		newplacehold:'请添加想要追踪的爱好/习惯...',
		newtype:[
			{"text":"爱好","value":"hobby"},
			{"text":"习惯","value":"habit"}
		],
		recordtype:[
			{"show":"打卡","value":"check"},
			{"show":"进度条","value":"slide"}
		],
		newtrackpicker:[
			["——追踪类型——","爱好","习惯"],
			["——记录方式——","打卡","进度条"]
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
		console.log(that.data.addname)
	}
})
