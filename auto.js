let fs = require('fs');
let arg = process.argv;
let S = fs.readFileSync(arg[2], 'utf8');
S = S.toString();
let n = S.length;
let T = fs.readFileSync(arg[3], 'utf8');
T = T.toString();
let m = T.length;

let alph = new Array();
for (i = 0; i < m; i++)
	alph[T.charAt(i)] = 0;

let del = new Array(m + 1);
for (j = 0; j <= m; j++)
	del[j] = new Array();

for (i in alph)
	del[0][i] = 0;

for (j = 0; j < m; j++){
	let prev = del[j][T.charAt(j)];
	del[j][T.charAt(j)] = j + 1;
	for (i in alph)
		del[j + 1][i] = del[prev][i];
}

//for (j = 0; j <= m; j++){
//	let out = '';
//	for (i in alph)
//		out += del[j][i] + ' ';
//	console.log(out);
//}*/

let tmp = 0;
let count = 0;
for (i = 0; i < n; i++){
	if (S.charAt(i) in alph){
		tmp = del[tmp][S.charAt(i)];
		if (tmp == m){
			console.log(i - m + 2);
			count++;
		}
	}
	else 
		tmp = 0;
}

