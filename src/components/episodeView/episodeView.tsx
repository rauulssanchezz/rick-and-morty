import { useNavigate } from 'react-router-dom';
import style from './episodeview.module.css';

interface EpisodeProps {
    episodeName: string,
    episodeAirDate: string,
    episodeCode: string,
    episodeCharacters: string[]
}

export default function EpisodeView(
    {
        episodeName,
        episodeAirDate,
        episodeCode,
        episodeCharacters
    }:EpisodeProps
){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/episodes/EpisodeInfo', {
            state: {
                episodeName,
                episodeAirDate,
                episodeCode,
                episodeCharacters: episodeCharacters.join(',')
            }
        });
    };

    return(
        <div className={style.card} onClick={handleClick}>
            <div className={style.cardContent}>
                <div className={style.episodeHeader}>
                    <h3 className={style.h3}>{episodeName}</h3>
                    <p>Click for know more</p>
                </div>
                <div className={style.episodeInfo}>
                    <div>
                        <h4>Air Date:</h4>
                        <p>{episodeAirDate}</p>
                    </div>
                    <div>
                        <h4>Episode:</h4>
                        <p>{episodeCode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}