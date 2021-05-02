const Zip = require("zip-lib");
const file = require("fs");
const cmd = require("child_process");
const config = require("./Config.json");



if(process.argv.length != 3){

    console.log("指令錯誤");


    return;
}


/* 部署 line 的 webhook */

if(process.argv[2] === "webhook"){

    const code_name = "lineServer.zip";

    if(file.existsSync(code_name)){

        file.unlinkSync(code_name);

    }

    let code_zip = new  Zip.Zip();

    code_zip.addFile("./WebHook/index.js");

    code_zip.addFolder("./WebHook/node_modules/");

    code_zip.archive(code_name).then(() => {

        cmd.execSync(`aws lambda update-function-code --function-name ${config["lambda_function_name"]} --zip-file fileb://${code_name}`);

        file.unlinkSync(code_name);

    }); 

}



if(process.argv[2] === "liff"){


    cmd.execSync("npm --prefix ./liff run build");

    cmd.execSync(`aws s3 sync ./liff/dist/ s3://${config["s3_bucket_name"]}/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers`);

    

}