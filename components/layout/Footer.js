import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <p>This site was created for demonstration purposes only.</p>
            </div>
        </footer>
    );
}

export default Footer;