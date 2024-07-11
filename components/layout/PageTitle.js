import classes from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
    return (
        <div className={classes.pageTitle}>
            <div className="container">
                <h1>{title}</h1>
            </div>
         </div>
    );
}

export default PageTitle;