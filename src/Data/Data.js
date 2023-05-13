import liveIcon from '../assets/icons/live.png';
import scoreboardIcon from '../assets/icons/scoreboard.png';
import trophyIcon from '../assets/icons/trophy.png';
import momentIcon from '../assets/icons/moment.png';
import compositionIcon from '../assets/icons/cricket-player.png';
import groundIcon from '../assets/icons/ground.png';

export const SideBarData = [
  {
    icon: liveIcon,
    heading: 'Live Match',
    navComponent: '/'
  },
  {
    icon: scoreboardIcon,
    heading: 'Score Predictor',
    navComponent: '/score-prediction'
  },
  {
    icon: trophyIcon,
    heading: 'Win Predictor',
    navComponent: '/win-probability'
  },
  {
    icon:momentIcon,
    heading: 'High Impact Moment Analysis',
    navComponent: '/high-impact-moment'
  },
  {
    icon: compositionIcon,
    heading: 'Team Composition Analysis',
    navComponent:"/team-composition"
  },
  {
    icon: groundIcon,
    heading: 'Ground Effect Analysis',
    navComponent:"/ground-effect"
  }
];