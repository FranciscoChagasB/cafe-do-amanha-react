import React from 'react';
import './Stories.css';

function Stories() {
    const stories = [
        {
            title: "MPB à Beira-Mar",
            content: "Junior, por outro lado, encontra a verdadeira paz ao som das ondas do mar e de uma boa música brasileira. Sua paixão pela MPB é evidente em cada detalhe do Café do Amanhã, onde as melodias de grandes ícones como Vinícius de Moraes e Tom Jobim preenchem o ambiente. Foi em uma noite tranquila, sentado na areia e ouvindo 'Garota de Ipanema', que Junior teve a ideia de criar um espaço onde música e café se encontram em perfeita harmonia."
        },
        {
            title: "Um Encontro de Paixões",
            content: "Quando Nanda e Junior se conheceram, parecia que o destino havia reunido duas almas complementares. Enquanto Nanda compartilha suas histórias de viagem e seu amor pelo rock, Junior fala de suas noites à beira-mar e da suavidade da MPB. Juntos, transformaram o Café do Amanhã em um lugar onde cada visita é uma nova história, cada xícara de café um novo capítulo, e cada canção no ar uma celebração de suas paixões."
        },
        {
            title: "Rock nas Estradas",
            content: "Nanda sempre teve uma alma inquieta, apaixonada por viagens e pela liberdade que só a estrada pode oferecer. Durante uma viagem pelo interior do Brasil, ao som de suas bandas de rock favoritas, ela descobriu um pequeno café escondido em uma vila remota. Inspirada pelo lugar, decidiu trazer essa experiência única para o Café do Amanhã, onde o aroma do café se mistura com a trilha sonora de suas aventuras."
        }
    ];

    return (
        <section className="stories-section">
            <div className="stories-content">
                <div className="title-box">
                    <h1 className="section-title">Histórias</h1>
                    <p className="section-description">
                        Descubra as histórias inspiradoras que fazem parte do Café do Amanhã. Desde as viagens aventureiras de Nanda até as serenatas à beira-mar de Junior, cada momento é uma celebração de suas paixões.
                    </p>
                </div>

                <div className="story-list">
                    {stories.map((story, index) => (
                        <div className="story" key={index}>
                            <h2>{story.title}</h2>
                            <p>{story.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stories;