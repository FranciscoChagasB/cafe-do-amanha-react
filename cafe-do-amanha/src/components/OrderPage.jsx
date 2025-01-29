import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './OrderPage.css';

function OrderPage() {
    const [order, setOrder] = useState({ name: '', tableNumber: '', items: [] });
    const [showModal, setShowModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentItem, setCurrentItem] = useState('');
    const [currentQuantity, setCurrentQuantity] = useState(1);

    const menuItems = {
        cafes: { 'Águas de Março': 5.00, 'Sampa': 6.50, 'Garota de Ipanema': 7.00 },
        sobremesas: { 'Doce de Maracujá': 8.00, 'Romeu e Julieta': 9.00 },
        especiais: { 'Tarde em Itapoã': 12.00, 'O Canto da Cidade': 10.00 },
        bebidasGeladas: { 'Sorvete de Baunilha': 7.00, 'Milk Shake de Chocolate': 10.00 },
        chas: { 'Chá de Hortelã': 4.50, 'Chá Verde': 5.00 }
    };

    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            const price = menuItems[item.category]?.[item.name] || 0;
            return total + price * item.quantity;
        }, 0).toFixed(2);
    };

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
        setCurrentItem('');
        setCurrentQuantity(1);
        setShowModal(true);
    };

    const handleAddItem = () => {
        if (!currentItem || currentQuantity <= 0) {
            alert('Por favor, selecione um item e uma quantidade válida.');
            return;
        }

        const updatedItems = [...order.items];
        const existingItem = updatedItems.find(item => item.category === currentCategory && item.name === currentItem);

        if (existingItem) {
            existingItem.quantity += currentQuantity;
        } else {
            updatedItems.push({ category: currentCategory, name: currentItem, quantity: currentQuantity });
        }

        setOrder(prev => ({ ...prev, items: updatedItems }));
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!order.name.trim() || !order.tableNumber.trim() || order.items.length === 0) {
            alert('Preencha todas as informações antes de enviar o pedido.');
            return;
        }
        alert(`Pedido enviado com sucesso! Valor total: R$ ${calculateTotal(order.items)}`);
        setOrder({ name: '', tableNumber: '', items: [] });
    };

    return (
        <div className="order-container">
            <h2>Faça seu pedido</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input id="name" name="name" type="text" value={order.name} placeholder="Seu nome" 
                        onChange={(e) => setOrder({ ...order, name: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label htmlFor="tableNumber">Número da Mesa:</label>
                    <input id="tableNumber" name="tableNumber" type="text" value={order.tableNumber} placeholder="Número da mesa"
                        onChange={(e) => setOrder({ ...order, tableNumber: e.target.value })} required />
                </div>
                <div className="menu-category-list">
                    {Object.keys(menuItems).map((category) => (
                        <Button key={category} onClick={() => handleCategoryClick(category)} className="category-button">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Button>
                    ))}
                </div>
                <h3>Total: R$ {calculateTotal(order.items)}</h3>
                <button type="submit">Enviar Pedido</button>
            </form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Selecione o item e a quantidade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="itemSelect">Item:</label>
                        <select id="itemSelect" name="itemSelect" value={currentItem}
                            onChange={(e) => setCurrentItem(e.target.value)} className="form-control">
                            <option value="">Selecione um item</option>
                            {Object.keys(menuItems[currentCategory] || {}).map((item) => (
                                <option key={item} value={item}>{item} - R$ {menuItems[currentCategory][item].toFixed(2)}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantidade:</label>
                        <input id="quantity" name="quantity" type="number" value={currentQuantity} min="1"
                            onChange={(e) => setCurrentQuantity(parseInt(e.target.value))} className="form-control" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={handleAddItem}>Adicionar ao Pedido</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OrderPage;
