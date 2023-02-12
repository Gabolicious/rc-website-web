import * as Api from '../../../library/Api/api';

import {
	Col,
	Collapse,
	Container,
	Nav,
	NavItem,
	Navbar,
	NavbarToggler,
	Row,
} from 'reactstrap';
import React, { useEffect, useState } from 'react';

import CustomPaginatedTable from '../../_common/CustomPaginatedTable';
import FormattedNumber from '../../_common/FormattedNumber';
import { GET_PAGINATED_WEB_USERS } from '../../../apollo/paginatedQueries';
import LoadingIcon from '../../_presentational/LoadingIcon';
import WebUserRow from './WebUserRow';

const $ = require('jquery');

const AdminPanel = props => {
	const [collapsed, setCollapsed] = useState(false);
	const [charges, setCharges] = useState(<LoadingIcon />);
	const toggleNavbar = () => setCollapsed(!collapsed);

	function getVisible() {
		if (window.innerWidth <= 1199.98) {
			document.getElementById('left-nav').style.top = '0px';
			return;
		}
		var $el = $('#navbar'),
			scrollTop = $(this).scrollTop(),
			scrollBot = scrollTop + $(this).height(),
			elTop = $el.offset().top,
			elBottom = elTop + $el.outerHeight(),
			visibleTop = elTop < scrollTop ? scrollTop : elTop,
			visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;

		if (visibleBottom - visibleTop < 0) {
			document.getElementById('left-nav').style.top = '0px';
		} else {
			document.getElementById('left-nav').style.top =
				visibleBottom - visibleTop + 'px';
		}
	}

	const Formatters = {
		table: user => {
			return <WebUserRow user={user} authorizedUser={props.authorizedUser} />;
		},
	};

	useEffect(() => {
		Api.getCharges()
			.then(response => {
				setCharges(<FormattedNumber num={response[0]} />);
			})
			.catch(err => {
				console.error(err);
				setCharges('UNKNOWN');
			});

		getVisible();
		$(window).on('scroll resize', getVisible);
		document.onresize = function () {
			getVisible();
		};
	}, []);

	return (
		<Container fluid style={Style.container}>
			<Row>
				<Col md="2" style={Style.leftColumn}>
					<Navbar
						expand="xl"
						dark
						fixed="left"
						className="overflow-auto"
						style={Style.navbar}
						id="left-nav">
						<h3>Key Info</h3>
						<NavbarToggler onClick={toggleNavbar} />
						<Collapse navbar isOpen={!collapsed}>
							<Nav navbar>
								<NavItem>Current Charges: {charges}</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Col>
				<Col xl="10" style={Style.rightColumn}>
					<h1 className="text-center">Linked Website Users</h1>

					<CustomPaginatedTable
						config={config.table}
						headers={Headers.table}
						query={GET_PAGINATED_WEB_USERS}
						format={Formatters.table}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default AdminPanel;

const Style = {
	container: {
		marginLeft: '0px',
		paddingLeft: '0px',
	},
	leftColumn: {
		paddingLeft: '0px',
	},
	rightColumn: {
		paddingLeft: '35px',
	},
	navbar: {
		backgroundColor: '#2e2e2e',
		maxHeight: '100vh',
	},
};

const config = {
	table: {
		id: 'admin-table',
		jquery: {
			order: [[2, 'desc']],
		},
	},
};

const Headers = {
	table: ['Discord ID', 'In Game ID', 'Perms'],
};
