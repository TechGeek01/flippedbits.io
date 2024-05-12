// Add email to page
setTimeout(() => {
	const content = 'andy';
	const content2 = 'flippedbits.io';
	const address = `${content}&#64;${content2}`;
	document.getElementById('email').innerHTML = `<a href="mailto:${address}">${address}</a>`;
}, 1500);
