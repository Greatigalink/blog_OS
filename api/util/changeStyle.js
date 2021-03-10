const dayOrNight = function (element, clock="daytime") {
  switch (element) {

    case "post": 
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
      };

    case "markdown":
      return {
        color: clock == "night" ? "#bdbdbd" : "#212121",
      };

    case "about":
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#212121",
      };
    
    case "classify":
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#424242",
      }

    case "navList":
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#212121"
      }
    
    case "buildHistory":
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#212121"
      }
    
    case "link":
      return {

        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#212121"
      }

    case "footer":
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#212121"
      }
  }
};

export { dayOrNight };
