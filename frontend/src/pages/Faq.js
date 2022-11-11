
// import React, { useState } from "react";



const Faq=()=>{
 
  
    

    

      // State to show/hide accordion
    //   const [show, setShow] = useState(false);
    //   const handleOpen = () => {
    //     setShow(!show); // Toggle accordion
    //   };

    
      return (
<div id="accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
    //     <div className="container">
    //         <h3>FAQ</h3>
    //       <div className="accordian">
    //         <div className="accordian-header" onClick={handleOpen}>
    //           <div>Qu'est-ce que la méditation?</div>
    //           <div className="sign">{show ? 'read less' : 'read more'}</div>
    //         </div>
    //         {show && (
    //           <p className="accordian-body">
    //             Différentes choses pour différentes personnes. Pour certaines personnes, il s'agit d'un bénéfice spécifique 
    //              (meilleure santé, vaincre l'anxiété, créativité, etc.), ou de croissance personnelle et de guérison. Pour d'autres, il s'agit de 
    //              spiritualité, d'éveil et de transcendance.Quelle que soit la motivation qui vous pousse à commencer à méditer, c'est bien. Vos 
    //              objectifs peuvent changer avec le temps.
    //           </p>
    //         )}
    //       </div>
    //       <div className="accordian">
    //         <div className="accordian-header" onClick={handleOpen}>
    //           <div> Comment commencer à méditer?</div>
    //           <div className="sign">{show ? 'read less' : 'read more'}</div>
    //         </div>
    //         {show && (
    //           <p className="accordian-body">
    //             C'est en fait une très bonne question, que beaucoup de gens se posent,
    //             Commencez simplement, il n'y a aucune préparation nécessaire. Vous pouvez commencer dès aujourd'hui. Choisissez un moment de la 
    //             journée et un endroit dans votre maison pour faire votre méditation. Apportez tous les petits changements nécessaires à votre emploi 
    //             du temps et à votre mode de vie, afin que cette habitude soit encouragée et ait sa place.
    //           </p>
    //         )}
    //       </div>
    //       <div className="accordian">
    //         <div className="accordian-header" onClick={handleOpen}>
    //           <div>Quand méditer?</div>
    //           <div className="sign">{show ? 'read less' : 'read more'}</div>
    //         </div>
    //         {show && (
    //           <p className="accordian-body">
    //             Est-il préférable de méditer le matin ou le soir ?
    //             En règle générale, le meilleur moment pour méditer est tôt le matin, juste après un passage aux toilettes mais avant le 
    //             petit-déjeuner. Cela dit, tout moment qui convient à votre emploi du temps est bon, et le plus important est de choisir un moment où vous êtes plus susceptible de le faire réellement.`
    //           </p>
    //         )}
    //       </div>
    //       <div className="accordian">
    //         <div className="accordian-header" onClick={handleOpen}>
    //           <div>Où méditer?</div>
    //           <div className="sign">{show ? 'read less' : 'read more'}</div>
    //         </div>
    //         {show && (
    //           <p className="accordian-body">
    //             Méditer toujours au même endroit et au même moment est une bonne aide pour concentrer l'esprit. Votre cerveau associe cet 
    //             endroit à la pratique, il est donc plus facile pour vous de vous concentrer. Il y a moins de distractions.Je trouve généralement 
    //             qu'il est plus facile de se concentrer lorsque je médite à mon endroit préféré. Pourtant, il m'est arrivé de ressentir une fraîcheur
    //             différente dans la pratique lorsque je m'asseyais à différents endroits, à la maison ou dans la nature. Donc, pour résumer : 
    //             ayez votre lieu de méditation préféré dans votre maison, mais essayez de temps en temps d'autres endroits. Vous ne devriez pas 
    //             vous limiter à trouver votre paix intérieure dans un ou deux endroits seulement.
    //           </p>
    //         )}
    //       </div>
    //       <div className="accordian">
    //         <div className="accordian-header" onClick={handleOpen}>
    //           <div>À quelle fréquence faut-il méditer?</div>
    //           <div className="sign">{show ? 'read less' : 'read more'}</div>
    //         </div>
    //         {show && (
    //           <p className="accordian-body">
    //             Il est préférable de pratiquer la méditation quotidiennement. Si vous pratiquez moins que cela, vous ressentirez des 
    //             bienfaits après chaque séance, mais ils ne dureront pas longtemps et ne vous transformeront pas.
    //           </p>
    //         )}
    //       </div>
    //       <div className="accordian">
    //         <div className="accordian-header" onClick={handleOpen}>
    //           <div>La méditation est-elle une pratique religieuse?</div>
    //           <div className="sign">{show ? 'read less' : 'read more'}</div>
    //         </div>
    //         {show && (
    //           <p className="accordian-body">
    //             La méditation n'est pas une religion, ni une spiritualité ; c'est une technologie d'amélioration de l'esprit qui peut 
    //             enrichir la vie d'une personne, y compris sa vie religieuse. La spiritualité est une émotion. La religion est une obligation. 
    //             Cette affirmation montre à elle seule à quel point cet homme et la plupart des religieux sont perdus. Lorsque vous naissez dans ce
    //             monde, vous n'avez pas de religion mais vous avez un esprit.
    //           </p>
    //         )}
    //       </div>

 
    // </div>
      );
    }
    export default Faq;