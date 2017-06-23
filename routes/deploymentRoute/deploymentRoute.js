var express = require('express');
var router = express.Router();
var getData=require('../../services/deploymentService/deploymentService')
var DepJob=require('../../models/deploymentJob');
var fs=require('fs');

router.get('/api/getapp/:appname',function(req,res,next){
	
	var appname=req.param('appname');
	
	var arr=[];
	var count=0;
	
	DepJob.findAll({where :{
		
		ApplicationName:appname //matching passed parameter value with Database-Table(DeploymentJob) field value
	} }).then(function(data) {
	
	getData.getConfData(data,arr,count);
	
	res.json(arr);
	console.log("Testing Data :"+JSON.stringify(arr));
	console.log("\nTotal Count : "+c);
	
});
});

router.post('/api/getdata/:postdata',function(req,res,next){
	
var d=req.params.postdata;
console.log("Type of File :"+d);

getData.getFileData(d,res);



 console.log("Data Inserted in DataBase");
 
	
})

module.exports = router;
