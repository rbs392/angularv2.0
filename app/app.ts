var header = {
	title 	: "Hello",
	logo 	: "my logo"
}


var navList = [
	{
		title 	: "home",
		link 	: "#/home"
	},
	{
		title 	: "about",
		link 	: "#/about"
	},
	{
		title 	: "contact",
		link 	: "#/contact"
	}
];

var table = {
	columnHeaders : ['title1','title2','title3','title4','title5'],
	rows 		  : [
		{
			'title1' 	: "helllo",
			'title2' 	: "helllo",
			'title3' 	: "helllo",
			'title4' 	: "helllo",
			'title5' 	: "helllo"
		},
		{
			'title1' 	: "helllo1",
			'title2' 	: "helllo1",
			'title3' 	: "helllo1",
			'title4' 	: "helllo1",
			'title5' 	: "helllo1"
		},
		{
			'title1' 	: "helllo2",
			'title2' 	: "helllo2",
			'title3' 	: "helllo2",
			'title4' 	: "helllo2",
			'title5' 	: "helllo2"
		}
	]
}
components.header(header.title,header.logo);
components.navBar(navList);
components.table(table);