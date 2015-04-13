var name = "Justin Barr";
var role = "Bird Law Specialist";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
