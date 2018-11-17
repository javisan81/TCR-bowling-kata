var spawn = require('cross-spawn');

new Promise(function (resolve, reject) {
	var child = spawn(`yarn test`, []);

	child.stdout.on('data', function (data: any) {
		process.stdout.write(data);
	});

	child.stderr.on('data', function (data: any) {
		process.stderr.write(data);
	});

	child.on('error', function (data: any) {
		reject(`git error! ${data}`);
	});

	child.on('exit', function () {
		resolve('success!');
	});
})
.then((msg) => console.log(msg))
.then(() => {
	return new Promise(function (resolve, reject) {
		var add = spawn.sync(`git add *`, []);
		
		var child = spawn(`git commit -m "tcr"`, []);

		child.stdout.on('data', function (data: any) {
			process.stdout.write(data);
		});
	
		child.stderr.on('data', function (data: any) {
			process.stderr.write(data);
		});
	
		child.on('error', function (data: any) {
			reject(`git error! ${data}`);
		});
	
		child.on('exit', function () {
			resolve('success!');
		});
	})
})
.catch((msg) => {
	console.log(msg)

	return new Promise(function (resolve, reject) {
		var child = spawn(`git reset --hard`, []);
	
		child.stdout.on('data', function (data: any) {
			process.stdout.write(data);
		});
	
		child.stderr.on('data', function (data: any) {
			process.stderr.write(data);
		});
	
		child.on('error', function (data: any) {
			reject(`git error! ${data}`);
		});
	
		child.on('exit', function () {
			resolve('success!');
		});
	})
});