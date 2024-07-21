import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ cardComponent, type }) {
    const { image, title } = cardComponent;
    // console.log("Inside card");
    // console.log(type);
    return (
        <>
            {type == "Albums" ? (
                <Tooltip title={`${cardComponent.songs.length} songs`} placement="top" arrow>
                    <Link to={`/album/${cardComponent.slug}`}>
                       
                    <div className={styles.card}>
                        <div className={styles.cardimage}>
                            <img src={image} alt="album image" />
                         </div>
                                <div className={styles.banner}>
                                    <Chip
                                        label={`${cardComponent.follows} follows`}
                                        size="small"
                                        className={styles.chip}
                                    />
                                </div>
                                <div className={styles.title}>
                                    {title}
                        </div>
                    </div>
                    </Link>
                </Tooltip>
            ) : (
                <>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="album image" />
                                <div className={styles.banner}>
                                    <Chip
                                        label={`${cardComponent.likes} likes`}
                                        size="small"
                                        className={styles.chip}
                                    />
                                </div>
                                <div className={styles.title}>
                                    {title}
                                </div>
                            </div>
                        </div>
                    
                </>
            )}
        </>
    );
}
