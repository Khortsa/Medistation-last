
import Accordion from '../components/Accordion';

const Faq=()=>{
    const accordionData = [
      {
        title: "Qu'est-ce que la méditation?",
        content:
                 `Différentes choses pour différentes personnes. Pour certaines personnes, il s'agit d'un bénéfice spécifique
                    (meilleure santé, vaincre l'anxiété, créativité, etc.), ou de croissance personnelle et de guérison. Pour d'autres, il s'agit de
                    spiritualité, d'éveil et de transcendance.Quelle que soit la motivation qui vous pousse à commencer à méditer, c'est bien. Vos
                     objectifs peuvent changer avec le temps. `
      },
      {
        title: 'Comment commencer à méditer?',
        content: `C'est en fait une très bonne question, que beaucoup de gens se posent,
                   Commencez simplement, il n'y a aucune préparation nécessaire. Vous pouvez commencer dès aujourd'hui. Choisissez un moment de la
                  journée et un endroit dans votre maison pour faire votre méditation. Apportez tous les petits changements nécessaires à votre emploi
                    du temps et à votre mode de vie, afin que cette habitude soit encouragée et ait sa place.`
      },
      {
        title: 'Quand méditer?',
        content: `Est-il préférable de méditer le matin ou le soir ?
        En règle générale, le meilleur moment pour méditer est tôt le matin, juste après un passage aux toilettes mais avant le
        petit-déjeuner. Cela dit, tout moment qui convient à votre emploi du temps est bon, et le plus important est de choisir un moment où vous êtes plus susceptible de le faire réellement.`
      },
      {
        title: 'Où méditer?',
        content: `   Méditer toujours au même endroit et au même moment est une bonne aide pour concentrer l'esprit. Votre cerveau associe cet
        endroit à la pratique, il est donc plus facile pour vous de vous concentrer. Il y a moins de distractions.Je trouve généralement
        qu'il est plus facile de se concentrer lorsque je médite à mon endroit préféré. Pourtant, il m'est arrivé de ressentir une fraîcheur
        différente dans la pratique lorsque je m'asseyais à différents endroits, à la maison ou dans la nature. Donc, pour résumer :
        ayez votre lieu de méditation préféré dans votre maison, mais essayez de temps en temps d'autres endroits. Vous ne devriez pas
        vous limiter à trouver votre paix intérieure dans un ou deux endroits seulement.`
      },
      {
        title: 'À quelle fréquence faut-il méditer?',
        content: `  Il est préférable de pratiquer la méditation quotidiennement. Si vous pratiquez moins que cela, vous ressentirez des
        bienfaits après chaque séance, mais ils ne dureront pas longtemps et ne vous transformeront pas.`
      },
      {
        title: 'La méditation est-elle une pratique religieuse?',
        content: `
        La méditation n'est pas une religion, ni une spiritualité ; c'est une technologie d'amélioration de l'esprit qui peut
        enrichir la vie d'une personne, y compris sa vie religieuse. La spiritualité est une émotion. La religion est une obligation.
        Cette affirmation montre à elle seule à quel point cet homme et la plupart des religieux sont perdus. Lorsque vous naissez dans ce
        monde, vous n'avez pas de religion mais vous avez un esprit.
`
      },
    ];
    return (
      <div>
        <h1 className="faq-title">FAQ's</h1>
        <div className="accordion container">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    );
  };
    export default Faq;