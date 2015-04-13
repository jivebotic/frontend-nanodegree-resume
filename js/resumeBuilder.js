var name = "Justin Barr";
var role = "Bird Law Specialist";
var phone = "(949) 726-5555";
var contact = "Contact";
var mobile = "(949) 555-5555";
var email = "jiveboti@gmail.com";
var twitter = "justinlbarr";
var github = "jivebotic";
var location1 = "Orange County";
var blog = "http://about.me";


var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var formattedPhone = HTMLcontactGeneric.replace("%data%", phone);
var formattedPhone1 = formattedPhone.replace("%contact%", contact);
$("#topContacts").append(formattedPhone1);

var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var formattedLocation1 = HTMLlocation.replace("%data%", location1);
$("#topContacts").append(formattedLocation1);

var formattedBlog = HTMLblog.replace("%data%", blog);
$("#topContacts").append(formattedBlog);
