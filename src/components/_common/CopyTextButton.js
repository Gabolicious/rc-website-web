//@flow
import { Button, UncontrolledTooltip } from 'reactstrap';
import React, { useState } from 'react';

const CopyTextButton = props => {
	const [tooltipText, setTooltipText] = useState(
		props.tootipText || 'Copy to clipboard'
	);

	function fallbackCopyTextToClipboard(text) {
		const textArea = document.createElement('input');
		document.body.appendChild(textArea);

		textArea.value = text;

		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
		} catch (err) {
			console.error('Unable to copy', err);
		}

		document.body.removeChild(textArea);
	}

	function copyTextToClipboard(text) {
		if (!navigator.clipboard) {
			fallbackCopyTextToClipboard(text);
			return;
		}
		navigator.clipboard.writeText(text);

		setTooltipText('Copied!');
	}

	return (
		<React.Fragment>
			<Button
				className={props.className}
				color={props.color || 'secondary'}
				size={props.size}
				onClick={() => copyTextToClipboard(props.text)}
				id={props.id}>
				{props.label || 'Copy'}
			</Button>
			<UncontrolledTooltip
				placement={props.placement || 'top'}
				target={props.id}>
				{tooltipText}
			</UncontrolledTooltip>
		</React.Fragment>
	);
};

export default CopyTextButton;
