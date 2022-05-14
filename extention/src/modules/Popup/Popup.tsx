import classes from './Popup.module.sass';

import Spinner from 'tandainClient/Spinner';
import Button from 'tandainClient/Button';

const Popup = () => (
	<main>
		<section className={classes.Popup}>
			<div className={classes.Progress}>
				<Spinner className={classes.ProgressSpinner} />
				<span className={classes.ProgressText}>saving...</span>
			</div>
      <Button className='w-full'>Saved List</Button>
		</section>
	</main>
);

export default Popup;
