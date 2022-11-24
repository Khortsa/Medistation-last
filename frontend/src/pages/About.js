

const About = () => {
  return (
      <>
      <div className="container">
        <div className="ps-2 about-div" >
          <h3 className="display-4 fw-normal pt-3 text-center">À propos de nous</h3>
          <img className="img-about " src="./img/about.jpeg" alt="vecteur de différentes races d'adultes en train de méditer"/>
          <div className="about">
            <p>Medistation est une plateforme pour ceux qui sont en route pour pratiquer la méditation et pour ceux qui veulent apprendre la méditation. Notre style de méditation est compatible avec toute culture, philosophie, croyance ou mode de vie. Nos cours sont dispensés par des bénévoles très expérimentés.
              "Le corps bénéficie des mouvements et l'esprit bénéficie de l'immobilité".
            </p>
          </div>
        <div className="about-items">
            <div className="about-item">
            <h4>Qui sommes-nous ?</h4>
            <p>Considérez MediStation comme le meilleur ami de votre esprit. Nous sommes là pour vous quand vous en avez besoin, où que vous soyez, pour vous aider à surmonter les moments difficiles et à trouver de la joie dans chaque jour.</p>
          </div> 
          <div className="about-item">
            <h4>Notre mission</h4>
            <p>Grâce à des outils de méditation et de pleine conscience validés par la science, ediStation vous aide à créer des habitudes qui changeront votre vie, afin de préserver votre santé mentale et de vous rendre plus sain et plus heureux.</p>
          </div> 
          <div className="about-item">
            <h4>Pourquoi nous le faisons</h4>
            <p>Il est prouvé que la MediStation réduit le stress de 14 % en quelques séances. Elle peut également vous aider à détendre votre esprit en quelques minutes, à améliorer votre concentration et à obtenir le meilleur sommeil qui soit.</p>
          </div> 
        </div>
        </div>
       
      </div>
      </>
    )
  }
  
  export default About;