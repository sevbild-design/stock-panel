import './styles.css';

import { ProductCard } from './components/views/ProductCard';
import { cloneTemplate } from './utils/utils';

// Клон шаблона → компонент → рендер с данными → на страницу.
const card = new ProductCard(cloneTemplate<HTMLElement>('#product-card'));
document.body.append(card.render({ title: 'Тестовый товар', price: 100, stock: 5 }));
card.render({ stock: 99 }); 
