import React, { useState } from 'react';
import './Review.css'; // Lembre-se de atualizar o estilo para as estrelas

const Review = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0); // Para hover das estrelas
    const [comment, setComment] = useState('');

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0); // Volta para o valor inicial do hover
    };

    const handleClick = (index) => {
        setRating(index); // Define a avaliação quando clicar
    };

    const submitReview = () => {
        // Lógica para enviar a avaliação
        console.log(`Avaliação: ${rating}, Comentário: ${comment}`);
    };

    return (
        <div className="review-container">
            <h3 className="review-title">Deixe sua avaliação</h3>

            <div>
                <label>Avaliação:</label>
                <div className="stars-container">
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                        <span
                            key={starIndex}
                            className={`star ${starIndex <= (hoverRating || rating) ? 'filled' : 'empty'}`}
                            onClick={() => handleClick(starIndex)}
                            onMouseEnter={() => handleMouseEnter(starIndex)}
                            onMouseLeave={handleMouseLeave}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <label>Comentário:</label>
                <textarea
                    className="review-textarea"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Deixe seu comentário"
                />
            </div>

            <button className="review-submit-btn" onClick={submitReview}>Enviar Avaliação</button>
        </div>
    );
};

export default Review;