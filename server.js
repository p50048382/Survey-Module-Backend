var express = require("express");
var app = express();


var surveyTable = [
  {
    key: "quickPoll",
    position: 1,
    name: "Quick Poll",
    openDate: new Date(),
    closedDate: new Date(),
    languages: [
      { value: "Mn", viewValue: "Mandarin" },
      { value: "Fr", viewValue: "French" },
      { value: "Ar", viewValue: "Arabic" },
      { value: "Sw", viewValue: "Swedish" },
	  { value: "pl", viewValue: "Polish" },
	],
  },
  {
    key: "covid19",
    position: 2,
    name: "Covid-19",
    openDate: new Date(),
    closedDate: new Date(),
    languages: [
      { value: "Gr", viewValue: "German" },
      { value: "fr", viewValue: "French" },
      { value: "Ur", viewValue: "Urdu" },
      { value: "Bh", viewValue: "Bahasa" },
    ],
  },
  {
    key: "medSurvey",
    position: 3,
    name: "Medical Store Survey",
    openDate: new Date(),
    closedDate: new Date(),
    languages: [
      { value: "Hi", viewValue: "Hindi" },
      { value: "fr", viewValue: "French" },
      { value: "Ar", viewValue: "Arabic" },
      { value: "Bn", viewValue: "Bengali" },
    ],
  },
  {
    key: "freshSurvey",
    position: 4,
    name: "Fresh Store Survey",
    openDate: new Date(),
    closedDate: new Date(),
    languages: [
      { value: "Gr", viewValue: "German" },
      { value: "fr", viewValue: "French" },
      { value: "Ar", viewValue: "Arabic" },
      { value: "En", viewValue: "English" },
    ],
  },
  {
    key: "retailSurvey",
    position: 5,
    name: "Retail Servey",
    openDate: new Date(),
    closedDate: new Date(),
    languages: [
      { value: "Ml", viewValue: "Malayalam" },
      { value: "fr", viewValue: "French" },
      { value: "Ar", viewValue: "Arabic" },
      { value: "Tm", viewValue: "Tamil" },
    ],
  },
];

var covidSurvey =[
	
	  

	{	controlType:'dropdown',
        key: 'Dropdown Select',
        label: 'How would you rate the precautions taken by the Reliance family against COVID-19.',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
          { key: 'Unsatisfactory', value: 'Unsatisfactory' },
        ],
        order: 1,
      },
	  {	
		controlType:'textbox',
        key: 'textbox1 input',
        label: 'Any new suggestions which could be forwarded to the upper authorities.*',
        // value: 'Amazing',
        required: true,
        order: 2,
      },
	  {
		controlType:'textbox',
        key: 'textbox2 input',
        label: 'Has anyone from your family been treated with COVID-19? Kindly give the name of the member and the relation with you.',
        type: 'email',
        order: 3,
      },
	  {
		controlType:'sChoice',
        key: 'Single Choice Questions',
        label: 'How would you rate the communications of HRBP regarding the infos of COVID-19.',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
        ],
        order: 4,
      },
	  {
		controlType:'mChoice',
        key: 'Multi Choice Question',
        label: 'Select your hobbies from the below list (note: multiple select allowed).',
        options: [
          { key: 'reading', value: 'Reading' },
          { key: 'swimming', value: 'Swimming' },
          { key: 'surfing', value: 'Surfing' },
          { key: 'cooking', value: 'Cooking' },
          { key: 'travelling', value: 'Travelling' },
        ],
        order: 5,
      }
	  ];
var medSurvey=[

	{	controlType:'dropdown',
        key: 'Dropdown Select',
        label: 'How would you rate the services provided in Reliance Retail?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
          { key: 'Unsatisfactory', value: 'Unsatisfactory' },
        ],
        order: 2,
      },
	  {	
		controlType:'textbox',
        key: 'textbox1 input',
        label: 'What Are The Three Qualities A Professional Pharmacist Should Have?*',
        // value: 'Amazing',
        required: true,
        order: 3,
      },
	  {
		controlType:'textbox',
        key: 'textbox2 input',
        label: 'What Are The Record Keeping Procedures That A Pharmacist Have To Do?',
        type: 'email',
        order: 4,
      },
	  {
		controlType:'sChoice',
        key: 'Single Choice Questions',
        label: 'What Are The Side Effects Of Methadone?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
        ],
        order: 5,
      },
	  {
		controlType:'mChoice',
        key: 'Multi Choice Question',
        label: 'What Are The Errors That A Pharmacist Should Avoid While Dispensing Drug?',
        options: [
          { key: 'reading', value: 'Reading' },
          { key: 'swimming', value: 'Swimming' },
          { key: 'surfing', value: 'Surfing' },
          { key: 'cooking', value: 'Cooking' },
          { key: 'travelling', value: 'Travelling' },
        ],
        order: 1,
      }];
var quickPoll=[

	{	controlType:'dropdown',
        key: 'Dropdown Select',
        label: 'Have you used this program/app before?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
          { key: 'Unsatisfactory', value: 'Unsatisfactory' },
        ],
        order: 4,
      },
	  

	{	controlType:'dropdown',
        key: 'Dropdown Select',
        label: 'Using one word, what do you think is the major challenge event organizers are facing?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
          { key: 'Unsatisfactory', value: 'Unsatisfactory' },
        ],
        order: 5,
      },
	  {	
		controlType:'textbox',
        key: 'textbox1 input',
        label: 'What is the biggest cybersecurity threat to your business?*',
        // value: 'Amazing',
        required: true,
        order: 6,
      },
	  {
		controlType:'textbox',
        key: 'textbox2 input',
        label: 'How would you rate the quality of audience interaction when attending online events?',
        type: 'email',
        order: 1,
      },
	  {
		controlType:'sChoice',
        key: 'Single Choice Questions',
        label: 'If you could bring one thing from the office to your home, what would it be?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
        ],
        order: 2,
      },
	  {
		controlType:'mChoice',
        key: 'Multi Choice Question',
        label: 'What’s the first thing you will do once the quarantine is over?',
        options: [
          { key: 'reading', value: 'Reading' },
          { key: 'swimming', value: 'Swimming' },
          { key: 'surfing', value: 'Surfing' },
          { key: 'cooking', value: 'Cooking' },
          { key: 'travelling', value: 'Travelling' },
        ],
        order: 3,
      }];
var retailSurvey=[
	{	controlType:'dropdown',
        key: 'Dropdown Select',
        label: 'Were you made to feel welcome during your visit (greeted and/or thanked by one or more associates)?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
          { key: 'Unsatisfactory', value: 'Unsatisfactory' },
        ],
        order: 5,
      },
	  {	
		controlType:'textbox',
        key: 'textbox1 input',
        label: 'Were the items appropriately priced?*',
        // value: 'Amazing',
        required: true,
        order: 4,
      },
	  {
		controlType:'textbox',
        key: 'textbox2 input',
        label: 'Was the merchandise high quality?',
        type: 'email',
        order: 3,
      },
	  {
		controlType:'sChoice',
        key: 'Single Choice Questions',
        label: 'Did the cashier process the transaction quickly and effectively?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
        ],
        order: 2,
      },
	  {
		controlType:'mChoice',
        key: 'Multi Choice Question',
        label: 'Did the store have a reasonable return and exchange policy?',
        options: [
          { key: 'reading', value: 'Reading' },
          { key: 'swimming', value: 'Swimming' },
          { key: 'surfing', value: 'Surfing' },
          { key: 'cooking', value: 'Cooking' },
          { key: 'travelling', value: 'Travelling' },
        ],
        order: 1,
      }];
var freshSurvey=[
	{	controlType:'dropdown',
        key: 'Dropdown Select',
        label: 'Are traders delivering products stored outside the market area?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
          { key: 'Unsatisfactory', value: 'Unsatisfactory' },
        ],
        order: 4,
      },
	  {	
		controlType:'textbox',
        key: 'textbox1 input',
        label: 'Were adequate informations provided to you in the store?*',
        // value: 'Amazing',
        required: true,
        order: 5,
      },
	  {
		controlType:'textbox',
        key: 'textbox2 input',
        label: 'Were the managers and staff members courteous, helpful to you?',
        type: 'email',
        order: 3,
      },
	  {
		controlType:'sChoice',
        key: 'Single Choice Questions',
        label: 'How will you rate the qualities of the vegetables getting sold in the store?',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
        ],
        order: 1,
      },
	  {
		controlType:'mChoice',
        key: 'Multi Choice Question',
        label: 'What are go to items everytime you visit the fresh store',
        options: [
          { key: 'reading', value: 'Lecturing' },
          { key: 'swimming', value: 'Marathon' },
          { key: 'surfing', value: 'Walking' },
          { key: 'cooking', value: 'Running' },
          { key: 'travelling', value: 'Singing' },
        ],
        order: 2,
      }];


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/table", (req, res) => {
  res.json(surveyTable);
});

app.get("/survey/:name", (req, res) => {
  var user = req.params.name;
  //console.log(req.params);
  //console.log(user);
  if (user == "quickPoll" )
  {
	console.log(user);  
	res.json(quickPoll);
  }
  if (user == "covid19" )
  {
	console.log(user);
	res.json(covidSurvey);
  }
  if (user == "medSurvey" )
  {
	console.log(user);
	res.json(medSurvey);
  }
  if (user == "freshSurvey" )
  {
	console.log(user);
	res.json(freshSurvey);
  }
  if (user == "retailSurvey" )
  {
	console.log(user);
	res.json(retailSurvey);
  }
});

app.listen(3000);
