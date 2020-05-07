var express = require("express");
var app = express();

var covidSurvey =[
	{	ctType:'dropdown',
        key: 'Dropdown Select',
        label: 'Dropdown Selection Example',
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
		ctType:'textbox',
        key: 'textbox1 input',
        label: 'Text Box Question Example.',
        // value: 'Amazing',
        required: true,
        order: 1,
      },
	  {
		ctType:'textbox',
        key: 'textbox2 input',
        label: 'Another Text Box Question Example',
        type: 'email',
        order: 3,
      },
	  {
		ctType:'sChoice',
        key: 'Single Choice Questions',
        label: 'Single Selection Example',
        options: [
          { key: 'amazing', value: 'Amazing' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'bad', value: 'Bad' },
        ],
        order: 4,
      },
	  {
		ctType:'mChoice',
        key: 'Multi Choice Question',
        label: 'Multiple Selection Example',
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
var medSurvey=[];
var quickPoll=[];
var medSurvey=[];
var freshSurvey=[];


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
  var user = req.params.user;
  console.log(user);
  //var result = messages.filter((message) => message.owner == user);
  res.json(covidSurvey);
});

app.listen(3000);
