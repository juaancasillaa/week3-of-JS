function exerciseOfTheDay(){

    const DEFAULT_STRING_VAR = "Today's exercise is: ";

    const today = new Date ();

    const dayOfTheWeek = today.getDay();

    let exercise; 

    switch(dayOfTheWeek) {
        case 0:
            exercise = "Running";
            break;
        case 1:
            exercise = "Swimming"
            break;
        case 2:
            exercise = "Dancing"
            break;
        case 3:
            exercise = "Fecing";
            break;
        case 4:
            exercise = "Weightlifting";
            break;
        default:
            exercise = "Rest";
            break;
    }

    console.log(DEFAULT_STRING_VAR + exercise);
}

exerciseOfTheDay()