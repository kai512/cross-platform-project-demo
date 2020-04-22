import appAjax from "@/libs/app-ajax"

/**
 * 获取oss参数
 */
export const getOssParams = (tempFilePaths) => {
	
	return new Promise((resolve, reject) => {
		appAjax.postJson({
			service: "GET_UPLOAD_TOKEN",
			type : "GET",
			data : {
				size : 1
			},
			success: function(res) {
				var fileExt = ".png";
				var params = {
					OSSAccessKeyId : res.accessid,
					policy : res.policy,
					signature : res.signature,
					key : res.filename,
					success_action_status : '200'
				};
				if(tempFilePaths.lastIndexOf(".") > -1){
					fileExt = tempFilePaths.substring(tempFilePaths.lastIndexOf(".")).toLowerCase();
				}
				params.key = params.key + fileExt;
				resolve(params);
			}
		})
		
 	})
}

