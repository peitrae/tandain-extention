import clsx from 'clsx';
import Spinner from 'tandainClient/Spinner';

import classes from './SavingProgress.module.sass';

const SavingProgress = () => (
	<div className={clsx(classes.Progress, 'flex px0p75 py0p5')}>
		<Spinner className={classes.ProgressSpinner} />
		<span className='font-semibold'>saving...</span>
	</div>
);

export default SavingProgress;
