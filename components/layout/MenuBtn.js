import classes from './MenuBtn.module.scss';

const MenuBtn = ({ toggleMenu }) => {
    return (
        <button className={classes.menuBtn} onClick={()=>toggleMenu()}></button>
    );
}

export default MenuBtn;