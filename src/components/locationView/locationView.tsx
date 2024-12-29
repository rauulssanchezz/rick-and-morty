import { useNavigate } from 'react-router-dom';
import style from './location.module.css';

interface LocationProps{
    locationName:string;
    locationType:string;
    locationDimension:string;
    locationResidents: string[];
}

export default function LocationView(
    {
        locationName,
        locationType,
        locationDimension,
        locationResidents
    }:LocationProps
){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/locations/LocationInfo', {
            state: {
                locationName,
                locationType,
                locationDimension,
                locationResidents: locationResidents.join(',')
            }
        });
    }

    return(
        <div className={style.card} onClick={handleClick}>
            <div className={style.cardContent}>
                <div className={style.locationHeader}>
                    <h3 className={style.h3}>{locationName}</h3>
                    <p>Click for know more</p>
                </div>
                <div className={style.locationInfo}>
                    <div>
                        <h4>Dimension:</h4>
                        <p>{locationDimension}</p>
                    </div>
                    <div>
                        <h4>Type:</h4>
                        <p>{locationType}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}