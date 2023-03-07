const ftpClient = require('ftp-client');

const { red, green } = require('colorette');






const testFTPConnection = () => {
    console.log( red("Initiate connection..."));


    const config = {
        host: 'localhost',
        port: 21,
        user: 'dxb160',
        password: 'D@njo2023'
    };

    const options = {
        logging: 'basic'
    };


    const client = new ftpClient(config, options);

    client.connect(function () {
 
        // client.upload(['test/**'], '/public_html/test', {
        //     baseDir: 'test',
        //     overwrite: 'older'
        // }, function (result) {
        //     console.log(result);
        // });
     
        client.download('test.txt', 'testlocal.txt', {
            overwrite: 'all'
        }, function (result) {
            console.log(result);
        });
     
    });



}

testFTPConnection();
