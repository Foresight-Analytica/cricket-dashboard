import scoreboardIcon from '../assets/icons/scoreboard.png';
import trophyIcon from '../assets/icons/trophy.png';
import momentIcon from '../assets/icons/moment.png';
import compositionIcon from '../assets/icons/cricket-player.png';
import groundIcon from '../assets/icons/ground.png';

export const SideBarData = [
  {
    icon: scoreboardIcon,
    heading: 'Score Predictor',
    navComponent: '/score-prediction'
  },
  {
    icon:momentIcon,
    heading: 'High Impact Moment Analysis',
    navComponent: '/high-impact-moment'
  },
  {
    icon: trophyIcon,
    heading: 'Win Predictor',
    navComponent: '/win-probability'
  },
  {
    icon: compositionIcon,
    heading: 'Next Best Batsman',
    navComponent:"/team-composition"
  },
  {
    icon: groundIcon,
    heading: 'Player-Ground Analysis',
    navComponent:"/ground-effect"
  }
];