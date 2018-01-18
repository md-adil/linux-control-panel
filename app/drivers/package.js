import { EOL } from 'os';
import exec from './execute';

export const all = () => {
	return exec(`pacman -Qi | awk '/^Name|^Version|^Installed\ Size|^Install\ Date|^Packager|^\s*$/' | head -n 100`).then(stdout => {
		return buildPackages(stdout);
	});
}

export const show = name => {
	return exec(`pacman -Qii ${name}`).then(stdout => {
		return splitPkgInfo(stdout);
	})
}

export const remove = name => {
	return exec(`gksudo "pacman -R ${name}"`);
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
