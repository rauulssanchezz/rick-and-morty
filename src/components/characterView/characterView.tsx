import { useNavigate } from "react-router-dom";
import style from "./characterview.module.css";

interface CharacterProps {
    characterImg: string;
    characterName: string;
    characterStatus: string;
    characterSpecie: string;
    characterGender: string;
    characterOrigin: string;
    characterLocation: string;
    characterEpisodes: string[];
}

export default function CharacterView({
    characterImg,
    characterName,
    characterStatus,
    characterSpecie,
    characterGender,
    characterOrigin,
    characterLocation,
    characterEpisodes
}: CharacterProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/characters/CharacterInfo', {
          state: {
            characterImg,
            characterName,
            characterStatus,
            characterSpecie,
            characterGender,
            characterOrigin,
            characterLocation,
            characterEpisodes: characterEpisodes.join(','),
          },
        });
      };
    return (
        <div className={style.card} onClick={handleClick} >
            <div className={style.cardContent}>
                <div className={style.imgContainer}>
                    <h3 className={style.h3}>{characterName}</h3>
                    <img width={1000} height={1000} className={style.img} src={characterImg} alt={"character image"}/>
                </div>
                <div className={style.characterInfo}>
                    <div>
                        <h4>Status:</h4>
                        <p className={style.p}>{characterStatus}</p>
                    </div>
                    <div>
                        <h4>Species:</h4>
                        <p className={style.p}>{characterSpecie}</p>
                    </div>
                    <div>
                        <h4>Gender:</h4>
                        <p className={style.p}>{characterGender}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}