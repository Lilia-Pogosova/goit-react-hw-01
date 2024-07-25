import css from "./Profile.module.css";
const Profile = ({ img, name, tag, location, stats: { followers, views, likes } }) => {
    return (
        <div className={css.containerProfile}>
            <div>
                <img className={css.imgProfile}
                    src = {img}
                    alt="User avatar"
                />
            
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                
                <p className={css.location}>{location}</p>
            </div>

            <div className={css.containerStats}>
            
            <ul className={css.statsList}>
                <li className={css.itemList}>
                    <span>Followers</span>
                    <span className={css.stats}>{followers}</span>
                </li>
                    
                <li className={css.itemList}>
                    <span>Views</span>
                    <span className={css.stats}>{views}</span>
                </li>
                    
                <li className={css.itemLi}>
                    <span>Likes</span>
                    <span className={css.stats}>{likes}</span>
                </li>
            </ul>
            </div> 
        </div>
    )
};
export default Profile;
