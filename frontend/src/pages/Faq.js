import React from 'react';


const Faq=()=>{

    return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="faq-title text-center pb-3">
                            <h2>FAQ</h2>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="faq" id="accordion">
                            <div className="card">
                                <div className="card-header" id="faqHeading-1">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                            <span className="badge">1</span>Qu'est-ce que la méditation ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Différentes choses pour différentes personnes. Pour certaines personnes, il s'agit d'un bénéfice spécifique 
                                            (meilleure santé, vaincre l'anxiété, créativité, etc.), ou de croissance personnelle et de guérison. Pour d'autres, il s'agit de 
                                            spiritualité, d'éveil et de transcendance.Quelle que soit la motivation qui vous pousse à commencer à méditer, c'est bien. Vos 
                                            objectifs peuvent changer avec le temps. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-2">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                            <span className="badge">2</span> Comment commencer à méditer ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>C'est en fait une très bonne question, que beaucoup de gens se posent,
                                            Commencez simplement, il n'y a aucune préparation nécessaire. Vous pouvez commencer dès aujourd'hui. Choisissez un moment de la 
                                            journée et un endroit dans votre maison pour faire votre méditation. Apportez tous les petits changements nécessaires à votre emploi 
                                            du temps et à votre mode de vie, afin que cette habitude soit encouragée et ait sa place.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-3">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                            <span className="badge">3</span>Quand méditer ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Est-il préférable de méditer le matin ou le soir ?
                                            En règle générale, le meilleur moment pour méditer est tôt le matin, juste après un passage aux toilettes mais avant le 
                                            petit-déjeuner. Cela dit, tout moment qui convient à votre emploi du temps est bon, et le plus important est de choisir un moment où vous êtes plus susceptible de le faire réellement.`
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-4">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                            <span className="badge">4</span>Où méditer ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-4" className="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Méditer toujours au même endroit et au même moment est une bonne aide pour concentrer l'esprit. Votre cerveau associe cet 
                                            endroit à la pratique, il est donc plus facile pour vous de vous concentrer. Il y a moins de distractions.Je trouve généralement 
                                            qu'il est plus facile de se concentrer lorsque je médite à mon endroit préféré. Pourtant, il m'est arrivé de ressentir une fraîcheur
                                            différente dans la pratique lorsque je m'asseyais à différents endroits, à la maison ou dans la nature. Donc, pour résumer : 
                                            ayez votre lieu de méditation préféré dans votre maison, mais essayez de temps en temps d'autres endroits. Vous ne devriez pas 
                                            vous limiter à trouver votre paix intérieure dans un ou deux endroits seulement.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-5">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                            <span className="badge">5</span> À quelle fréquence faut-il méditer ?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-5" className="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                                    <div className="card-body">
                                        <p> Il est préférable de pratiquer la méditation quotidiennement. Si vous pratiquez moins que cela, vous ressentirez des 
                                             bienfaits après chaque séance, mais ils ne dureront pas longtemps et ne vous transformeront pas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="faqHeading-6">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                            <span className="badge">6</span> La méditation est-elle une pratique religieuse?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-6" className="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>La méditation n'est pas une religion, ni une spiritualité ; c'est une technologie d'amélioration de l'esprit qui peut 
                                            enrichir la vie d'une personne, y compris sa vie religieuse. La spiritualité est une émotion. La religion est une obligation. 
                                            Cette affirmation montre à elle seule à quel point cet homme et la plupart des religieux sont perdus. Lorsque vous naissez dans ce
                                            monde, vous n'avez pas de religion mais vous avez un esprit.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card">
                                <div className="card-header" id="faqHeading-7">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                            <span className="badge">7</span> Why do we use it?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-7" className="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                  </div>
        </div>
 
    )}
export default Faq;