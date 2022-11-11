import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useSubscription } from "../hooks/useIntermediate"
import { useAuthContext } from '../hooks/useAuthContext'

const Intermediate = () => {

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
            <img className="img-xs-size" src="./img/inter.png" alt="vector of a man cleaning a human brain"/>
          </div>
          <div className="m-4">
          <h3>Intermédiaire</h3>
            <div className="course-body">
              <p>La pleine conscience se produit lorsque nous nous ancrons dans notre conscience et que nous considérons tout le reste comme 
                des objets impersonnels de notre conscience... Nous perdons la pleine conscience lorsque nous nous identifions à nos pensées, 
                sensations, sentiments, états mentaux ou autres objets de notre conscience... Essayez calmement de remarquer la différence entre 
                la pleine conscience et la non-prise de conscience tout au long de cette méditation. Soyez avec amour l'observateur de vos 
                pensées, émotions, sensations, états mentaux, schémas réactifs et de toutes les autres expériences. L'objet de votre attention n'a 
                pas d'importance. N'importe quel objet fera l'affaire. Si l'esprit juge, notez gentiment : "le jugement est connu". Si l'agitation de 
                l'esprit ou du corps est présente, alors notez "l'agitation est connue". Ce qui est connu n'a pas d'importance, tant que vous êtes 
                conscient qu'il est connu. Rappelez-vous patiemment de remarquer ce que la conscience connaît déjà. L'effort de sagesse requis pour 
                faire la méditation de la conscience nue est presque nul. Si cette méditation vous semble être un travail difficile, faites moins 
                d'efforts et détendez-vous davantage. Laissez l'esprit être spacieux et alerte, et laissez le cœur et le corps être détendus, ouverts
                et doux. </p>
                <p>Pour les adult méditants, nous avons des bénévoles experts en méditation qui enseignent tous les samedis matin pour la 
                classe des Intermediare. Regardez l'horaire ci-dessous et inscrivez-vous à votre classe de méditation.</p>
                <h4>Lieu: 1 Rue Botzaris, 75019 Paris</h4>
                <h4>Jour et l'heure: Dimanche, 08h-10h</h4>
            </div>

          <form className="login" onSubmit={handleSubmit}>
            <h3 className="mb-4">Inscrire</h3>
      
            <label>nom :</label>
            <input type="nom" onChange={(e) => setNom(e.target.value)} value={nom} className="mb-2" autoComplete="off" placeholder="votre nom" />
            <label>Prenom:</label>
            <input type="prenom" onChange={(e) => setPrenom(e.target.value)} value={prenom} className="mb-4" autoComplete="off" placeholder="Votre prenom" />
            <div className="d-flex">
            <Button disabled={isLoading} className="btn btn-success me-4" children="submit" />
            {error && <div className="error">{error}</div>}
            <Link to='/courses'><Button type="submit" className="btn btn-danger" children="retour" /> </Link>
            </div>
          </form>
          </div>
      </div>
</div>
  )
}
export default Intermediate;
