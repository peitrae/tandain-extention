import classes from './Popup.module.sass';

import Button from 'tandainClient/Button';
import SavingProgress from './SavingProgress';
import SavedProgress from './SavedProgress';
import SavedItem from './SavedItem';

const Popup = () => {
	const item = {
		id: 'title-7',
		title: 'This is The Article Title',
		sourceName: 'Medium',
		sourceURL: 'www.medium.com',
		imgURL: '/temp/item-img.png',
	};

	return (
		<main>
			<section className={classes.Popup}>
				<SavingProgress />
				<SavedProgress />
				<SavedItem
					title={item.title}
					sourceURL={item.sourceURL}
					imgURL={item.imgURL}
				/>
				<Button className='flex-grow-1'>Saved List</Button>
			</section>
		</main>
	);
};

export default Popup;
