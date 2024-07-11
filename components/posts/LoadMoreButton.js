import classes from './LoadMoreButton.module.scss';

const LoadMoreButton = ({ setSize, size, hitEnd, isLoading }) => {
    return (
        <div className={classes.loadMore}>
            <button
                onClick={() => setSize(size + 1)}
                disabled={hitEnd}>
                {isLoading ? 'Loading...' : hitEnd ? 'You\'ve reached the end!' : 'Load More Posts'}
            </button>
        </div>
    );
}

export default LoadMoreButton;