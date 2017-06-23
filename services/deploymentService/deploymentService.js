var fs=require('fs');
var DepJob=require('../../models/deploymentJob')
var getConfData = function (data,arr,count) {
	
	for(i=0;i<data.length;i++)
	{
	var json={
		
		"ApplicationName":data[i].ApplicationName,
		"StartDateTime":data[i].StartDateTime,
		"EndDateTime":data[i].EndDateTime
		
			}
		arr.push(json);//Pushing 'json' data to arr array variable
		count++; //counting number of records from the output		
	}
	c=count;
};


var getFileData=function(d,res){
	

	fs.exists(d,function (exists) {
        if (exists) {
            fs.stat(d,function (error, stats) {
                fs.open(d, "r",function (error, fd) {
                    var buffer = new Buffer(stats.size);
                    fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
                        var data = buffer.toString("utf8", 0, buffer.length);
                       // console.log(data);
                       // fs.close(fd);
					   var r=JSON.parse(data);
					   //console.log(r);
					   var arr=[];
					   for(i=0;i<r.length;i++)
						{
						var json={
							
					
							"Id":r[i].Id,
							"StartDateTime":r[i].StartDateTime,
							"EndDateTime":r[i].EndDateTime,
							"Status":r[i].Status,
							"ApplicationName":r[i].ApplicationName,
							"CreatedBy":r[i].CreatedBy,
							"CreatedOn":r[i].CreatedOn,
							"ModifiedOn":r[i].ModifiedOn,
							"ModifiedBy":r[i].ModifiedBy,
							"IsDeleted":r[i].IsDeleted,
							"Configuration_Id":r[i].Configuration_Id,
							"SignOffUser":r[i].SignOffUser
							
							
								}
							arr.push(json);
								
									
						}
						//console.log(arr);
					  
					  for(i=0;i<arr.length;i++){
					  
					  DepJob.create({	"Id":arr[i].Id,
										"StartDateTime":arr[i].StartDateTime,
										"EndDateTime":arr[i].EndDateTime,
										"Status":arr[i].Status,
										"ApplicationName":arr[i].ApplicationName,
										"CreatedBy":arr[i].CreatedBy,
										"CreatedOn":arr[i].CreatedOn,
										"ModifiedOn":arr[i].ModifiedOn,
										"ModifiedBy":arr[i].ModifiedBy,
										"IsDeleted":arr[i].IsDeleted,
										"Configuration_Id":arr[i].Configuration_Id,
										"SignOffUser":arr[i].SignOffUser
									}).then(function(a) { 
										//console.log(a);
										res.json(a); 
										}) 
										
								}
					  
                    });
                });
            });
        }
    });
		
}

exports.getConfData = getConfData;
exports.getFileData = getFileData;