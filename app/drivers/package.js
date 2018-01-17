import { exec } from 'child_process';
import { EOL } from 'os';

export const all = () => {
	return new Promise((resolve, reject) => {
		exec('pacman -Qi', {maxBuffer: 1024 * 1500}, (err, stdout, stderr) => {
			if(err) {
				reject(err);
				return;
			}
			if(stderr) {
				reject(err);
				return;
			}

			var _package = buildPackages(stdout);
			resolve(_package);
		});
		
	});
}

const buildPackages = stdout => {
	const result = [];
	splitPackages(stdout).forEach(pkg => {
		if(!pkg) return;
		result.push(
			splitPkgInfo(pkg)
		)
	});
	return result;
}

const splitPackages = pkgStr => {
	return pkgStr.split(EOL + EOL);
}


const splitPkgInfo = pkg => {
	if(!pkg) return;
	var result = {};
	var desc = pkg.split(EOL);
	desc.forEach(info => {
		if(!info) return;

		var desc = info.split(':');
		if(!desc[0] || !desc[1]) return;

		result[desc[0].trim().replace(/\s+/g, '_').toLowerCase()] = desc[1].trim()
	});
	return result;
}
