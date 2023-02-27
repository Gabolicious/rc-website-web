import React, { useState } from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PermRender from '../_common/PermRender';

const UserDropdownMenu = ({ history, authorizedUser, routeName }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	function redirect(event, page) {
		event.preventDefault();
		history.push(page);
		return false;
	}

	return (
		<Dropdown
			isOpen={dropdownOpen}
			toggle={toggle}
			setActiveFromChild
			className="mx-2">
			<DropdownToggle caret style={Styles.toggle}>
				<img
					src={authorizedUser.avatar}
					className={'rounded-circle mx-2'}
					height="30"
					alt="pfp"
				/>
				{authorizedUser.username}
			</DropdownToggle>
			<DropdownMenu end>
				<PermRender ttperms={[3]} authorizedUser={authorizedUser}>
					<DropdownItem
						href="/home/ttools/admin"
						onClick={e => redirect(e, '/home/ttools/admin')}
						active={routeName === 'Admin'}>
						<i className={'bi bi-cone'} style={Styles.icon} />
						TTools Admin
					</DropdownItem>
				</PermRender>
				<PermRender perms={[3, 2, 1]} authorizedUser={authorizedUser}>
					<DropdownItem
						href="/home/profile"
						onClick={e => redirect(e, '/home/profile')}
						active={routeName === 'Profile'}>
						<i className={'bi bi-person-circle'} style={Styles.icon} />
						Profile
					</DropdownItem>
				</PermRender>
				<DropdownItem onClick={() => history.push('/auth/logout')}>
					<i className={'bi bi-box-arrow-left'} style={Styles.icon} />
					<span className={'text-danger'}>Logout</span>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default withRouter(UserDropdownMenu);

const Styles = {
	icon: {
		marginRight: '10px',
		transition: 'opacity 0.3s !important',
		transform: 'rotate(0deg) !important',
		display: 'inline-block',
	},
	toggle: {
		backgroundColor: '#363636',
		borderColor: '#363636',
		color: '',
	},
};
