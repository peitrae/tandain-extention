import { FC } from 'react';
import Title from 'tandainClient/Title';

import classes from './SavedItem.module.sass';
import { SavedItemProps } from './SavedItem.types';

const SavedItem: FC<SavedItemProps> = ({ title, sourceURL, imgURL }) => (
	<section className={classes.SavedItem}>
		<img src={imgURL} alt='' className={classes.SavedItemImg} />
		<div>
			<Title as='h2' size='xs' className='font-bold'>
				{title}
			</Title>
			<span className={classes.SavedItemURL}>{sourceURL}</span>
		</div>
	</section>
);

export default SavedItem;
