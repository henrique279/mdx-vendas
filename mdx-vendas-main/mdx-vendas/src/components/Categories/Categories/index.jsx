import './Categories.css';
import Celular from '../../../assets/Img/aplicativo-movel.png';
import Carro from '../../../assets/Img/carro.png';
import Decoracao from '../../../assets/Img/decoracao-da-casa.png';
import Eletro from '../../../assets/Img/eletrodomestico.png';
import Esporte from '../../../assets/Img/esporte.png';
import Habitacao from '../../../assets/Img/habitacao.png';

const categories = [
    {name: 'Celular', img: Celular},
    {name: 'Carro', img: Carro},
    {name: 'Decoracao', img: Decoracao},
    {name: 'Eletro', img: Eletro},
    {name: 'Esporte', img: Esporte},
    {name: 'Habitacao', img: Habitacao},
];

export default function Categories ({ selectedBtn, onSelect}) {
    return (
        <section className='categories'>
            {categories.map((cat) => (
                <button
                    key={cat.name}
                    onClick={() => onSelect(cat.name)}
                    className={`btn ${selectedBtn === cat.name ? 'selectedBtn' : ''}`}
                >
                    <img src={cat.img} alt={cat.name}/>
                    <span>{cat.name}</span>
                </button>
            ))}
        </section>
    )
}
