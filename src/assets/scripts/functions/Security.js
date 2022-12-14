import CryptoJS from 'crypto-js';

export function formdata(files) {
	const form = new FormData();
	Object.keys(files).forEach(key => form.append(key, files[key]));
	return form;
}

export function encodeAES(files) {
	const list = new Object();
	const key = CryptoJS.enc.Utf8.parse(
		CryptoJS.MD5(import.meta.env.VITE_KEY)
	);
	const iv = {
		iv: CryptoJS.enc.Utf8.parse(import.meta.env.VITE_IV)
	};

	Object.entries(files).forEach(([index, file]) => {
		list[index] = CryptoJS.AES.encrypt(file, key, iv).toString();
	});

	return list;
}

export function decodeAES(files) {
	return {
		status: 'warning',
		message: 'waiting...'
	};
}

export function encodeSHA256(file) {
	return CryptoJS.SHA256(file).toString();
}

export function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
}