import clsx from 'clsx';

import Button from 'tandainClient/Button';
import TrashIcon from 'tandainClient/TrashIcon';
import CheckmarkIcon from 'tandainClient/CheckmarkIcon';

import classes from './SavedProgress.module.sass';

const SavedProgress = () => (
	<div className={classes.Progress}>
		<i className={clsx(classes.ProgressIcon, 'items-center')}>
			<CheckmarkIcon />
		</i>
		<div className='flex-grow-1 justify-between items-center'>
			<span className='font-semibold'>saved</span>
			<Button
				startIcon={<TrashIcon variant='bold' />}
				size='sm'
				variant='text'
				color='dark'
			/>
		</div>
	</div>
);

export default SavedProgress;
