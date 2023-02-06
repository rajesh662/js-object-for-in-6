const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};
const isObject = function(val) {
    if (val === null){
        return false;
    }
    return typeof val === 'object';
};

const nestedObject= function(obj){
	for (const key in obj){
		if(isObject(obj[key])){
			for(let innerkey in obj[key]){
				if(isObject(obj[key][innerkey])){
					for( let out in obj[key][innerkey]){
						document.write(`${out}===>${obj[key][innerkey][out]}`);
						document.write("<br>");
					}
				}
				else{
				document.write(`${innerkey}===>${obj[key][innerkey]}`);
				document.write("<br>");
				}
			}
		}
	else{
		document.write(`${key}===>${obj[key]}`);
		document.write("<br>");
		} 
	}
}
nestedObject(person);