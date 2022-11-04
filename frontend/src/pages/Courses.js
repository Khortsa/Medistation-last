import Card from '../components/Card';
import { Link} from 'react-router-dom';


 const Courses = () => {

    return (
        <div className="courses-main-div">    
          <h3>Cours</h3>
          <div className="courses-container"> 
            <div className="courses">
              <Link to='/beginner'>
                <Card title="Débutant " img="./img/begin.png" body=" La première chose à clarifier : ce que nous faisons ici, c'est viser la
                 pleine conscience, et non un processus qui efface comme par magie votre esprit des innombrables et interminables pensées qui
                surgissent et résonnent constamment dans notre cerveau. Nous nous entraînons simplement à porter notre attention sur notre 
                respiration, puis à revenir à la respiration lorsque nous remarquons que notre attention s'est égarée. Installez-vous 
                confortablement et préparez-vous à rester assis sans bouger pendant quelques minutes. Après avoir arrêté de lire ce texte, 
                vous allez simplement vous concentrer sur votre propre inspiration et expiration naturelles."/>          
              </Link>
            </div>
            <div className="courses">
              <Link to='/intermediate'>
                <Card title="Intermédiaire" img="./img/inter.png" body=" La pleine conscience se produit lorsque nous nous ancrons 
                dans notre conscience et que nous considérons tout le reste comme des objets impersonnels de notre conscience... 
                Nous perdons la pleine conscience lorsque nous nous identifions à nos pensées, sensations, sentiments, états mentaux ou autres 
                objets de notre conscience... Essayez calmement de remarquer la différence entre la pleine conscience et la non-prise de conscience 
                tout au long de cette méditation. Soyez avec amour l'observateur de vos pensées, émotions, sensations, états mentaux, schémas réactifs 
                et de toutes les autres expériences."/>
              </Link>
            </div>
            <div className="courses">
              <Link to='/advance'>
                <Card title="Avancé" img="./img/advance.png" body=" Si vous souhaitez élargir votre expérience en vous plongeant dans des pratiques
                 de méditation profondes, par où commencer? Commencez par vous asseoir ou vous allonger confortablement. Jetez un coup 
                 d'œil à votre environnement, en prenant note de l'espace. Fermez ensuite les yeux et prenez quelques respirations profondes.
                Une fois que vous vous sentez installé et détendu, placez votre conscience dans la zone de votre tête ou de votre cerveau et
                 répétez en silence : Je ne suis pas dans l'esprit, l'esprit est en moi. Visualisez une bulle de conscience en expansion qui se 
                 développe pour envelopper votre tête. Sentez-vous comme la bulle de conscience qui continue à grandir."/>
              </Link>
            </div>
          </div>
        </div>
        )
      }
      export default Courses;