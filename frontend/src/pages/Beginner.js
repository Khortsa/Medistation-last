import { useState } from "react"
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useSubscription } from "../hooks/useBeginner"

const Beginner = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const {subscription, error, isLoading} = useSubscription()

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      await subscription(nom, prenom)

    }

  return (
    <div className='container'>
       <div className='xs-flex-col d-flex'>
          <div className="m-4 py-5">
            <img className='img-xs-size' src="./img/begin.png" alt="vector, group of kids with a teacher in a circle sitting down meditating"/>
          </div>
          <div className="m-4">
            <h3>Débutant</h3>
            <div className="course-body">
              <p>
              La première chose à clarifier : ce que nous faisons ici, c'est viser la pleine conscience, et non un processus qui efface 
              comme par magie votre esprit des innombrables et interminables pensées qui surgissent et résonnent constamment dans notre 
              cerveau. Nous nous entraînons simplement à porter notre attention sur notre respiration, puis à revenir à la respiration 
              lorsque nous remarquons que notre attention s'est égarée. Installez-vous confortablement et préparez-vous à rester assis sans 
              bouger pendant quelques minutes.Concentrez-vous sur votre respiration. Où ressentez-vous le plus votre respiration ? 
              Dans votre ventre ? Dans le nez ? Essayez de maintenir votre attention sur votre inspiration et votre expiration. Suivez votre 
              respiration pendant deux minutes. Inspirez profondément, en gonflant votre ventre, puis expirez lentement, en allongeant 
              l'expiration à mesure que votre ventre se contracte.Les gens peuvent associer la méditation au fait de s'asseoir en silence et 
              d'arrêter toutes nos pensées et tous nos sentiments pour devenir calme. Mais ce n'est pas vraiment ainsi que fonctionne l'esprit, 
              et la méditation non plus. Plutôt que d'essayer d'arrêter nos pensées, nous nous exerçons à laisser les pensées aller et venir.
              </p>
              <p>Pour les bébés méditants, nous avons des bénévoles experts en méditation qui enseignent tous les samedis matin pour la 
                classe des débutants. Regardez l'horaire ci-dessous et inscrivez-vous à votre classe de méditation.</p>
                <h4>Lieu: 1 Rue Botzaris, 75019 Paris</h4>
                <h4>Jour et l'heure: Samedi, 08h-10h</h4>
            </div>
            <form className="login" onSubmit={handleSubmit}>
              <h3 className="mb-4">Inscrire </h3>
              <label>Nom :</label>
              <input type="nom" onChange={(e) => setNom(e.target.value)} value={nom} className="mb-2" autoComplete="off" placeholder="votre nom" />
              <label>Prenom:</label>
              <input type="prenom" onChange={(e) => setPrenom(e.target.value)} value={prenom} className="mb-4" autoComplete="off" placeholder="Votre prenom" />
              <div className="d-flex">
              <Button disabled={isLoading} className="btn btn-success me-4" children="submit"/>
              {error && <div className="error">{error}</div>}
              <Link to='/courses'><Button type="submit" className="btn btn-danger" children="retour" /> </Link>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}
export default Beginner;
