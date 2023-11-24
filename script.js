function firstWord(s) {
  // your code here
	s = s.trimStart();
	
	s = s.split(' ');
	for(let i=0; i<s.length; i++)
		{
			return s[0];
		}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
 