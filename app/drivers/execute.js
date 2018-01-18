import { exec } from 'child_process';

export default (cmd, option = { maxBuffer: 1024 * 1500 }) => new Promise((resolve, reject) => {
	exec(cmd, option, (err, stdout, stderr) => {
		if(err) {
			console.log('Err: ', err)
			reject(err);
			return;
		}
		if(stderr) {
			console.log('Err: ', stderr)
			reject(stderr);
			return;
		}
		resolve(stdout);
	})
});
