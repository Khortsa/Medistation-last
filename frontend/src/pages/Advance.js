import { Link} from 'react-router-dom';
import Button from '../components/Button';
import { useSubscription } from "../hooks/useAdvance"
import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

const Advance = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const {subscription, error, isLoading} = useSubscription()
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      await subscription(user, nom, prenom)

    }

  return (
  <div className='container'>
    
      <div className='xs-flex-col d-flex'>    
        <div className="m-4 py-5" >
          <img className='img-xs-size ' src="./img/advance.png" alt=""/>
        </div>
        <div className="m-4">
        <h3>Avancé</h3>
          <div className="course-body">
          <p>Si vous souhaitez élargir votre expérience en vous plongeant dans des pratiques de méditation profondes, par où commencer ?  
             Commencez par vous asseoir ou vous allonger confortablement. Jetez un coup d'œil à votre environnement, en prenant note de 
             l'espace. Fermez ensuite les yeux et prenez quelques respirations profondes.Une fois que vous vous sentez installé et détendu,
            placez votre conscience dans la zone de votre tête ou de votre cerveau et répétez en silence : "Je ne suis pas dans l'esprit, 
            l'esprit est en moi." Visualisez une bulle de conscience en expansion qui se développe pour envelopper votre tête. Sentez-vous
            comme la bulle de conscience qui continue à grandir.Imaginez maintenant que la conscience enveloppe votre corps physique. 
            Répétez silencieusement à vous-même : "Je ne suis pas dans le corps, le corps est en moi". Regardez votre conscience s'étendre 
            pour remplir la pièce dans laquelle vous vous trouvez. Répétez : "Je ne suis pas dans cette pièce, la pièce est en moi."
            Au fur et à mesure que votre conscience se développe, voyez-la absorber le bâtiment entier. Affirmez à nouveau : "Je ne suis pas
            dans ce bâtiment, le bâtiment est en moi."En augmentant de façon exponentielle, votre conscience s'étend à votre ville. 
            Répétez : "Je ne suis pas dans cette ville, la ville est en moi."Votre conscience absorbe votre état ou votre province. "Je ne 
            suis pas dans cet état, cet état est en moi."</p>
            <p>Pour les vieux méditants, nous avons des bénévoles experts en méditation qui enseignent tous les samedis matin pour la 
                classe des avancé. Regardez l'horaire ci-dessous et inscrivez-vous à votre classe de méditation.</p>
                <h4>Lieu: 1 Rue Botzaris, 75019 Paris</h4>
                <h4>Jour et l'heure: Samedi, 17h-19h</h4>
          </div>
          <form className="login" onSubmit={handleSubmit}>
            <h3 className="mb-4">Inscrire</h3>
            <label>Nom :</label>
            <input type="nom" onChange={(e) => setNom(e.target.value)} value={nom} className="mb-2" autoComplete="off" placeholder="votre nom" />
            <label>Prenom:</label>
            <input type="prenom" onChange={(e) => setPrenom(e.target.value)} value={prenom} className="mb-4" autoComplete="off" placeholder="Votre prenom" />
            <div className="d-flex">
            <Button disabled={isLoading} className="btn btn-success me-4" children="submit" />
            {error && <div className="error">{error}</div>}
            <Link to='/courses'><Button type="back" className="btn btn-danger" children="retour" /> </Link>
            </div>
          </form>
        </div>
    </div>
  </div>
  )
}
export default Advance;