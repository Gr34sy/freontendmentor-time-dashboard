import exercise from "../assets/icon-exercise.svg";
import play from "../assets/icon-play.svg";
import selfCare from "../assets/icon-self-care.svg";
import social from "../assets/icon-social.svg";
import study from "../assets/icon-study.svg";
import work from "../assets/icon-work.svg";

export default function getHeader(title){

    let icon;
    let color;

    switch(title){
        case 'Work':
            icon = work;
            color = 'orange';
        break;
        
        case 'Play':
            icon = play;
            color = 'azure';
        break;

        case 'Study':
            icon = study;
            color = 'red';
        break;

        case 'Exercise':
            icon = exercise;
            color = 'green';
        break;

        case 'Social':
            icon = social;
            color = 'purple';
        break;

        case 'Self Care':
            icon = selfCare;
            color = 'yellow';
        break;

        default:
            icon = exercise;
            color = "white";
        break;

    }


    return {
        icon: icon,
        color: color,
    }
}