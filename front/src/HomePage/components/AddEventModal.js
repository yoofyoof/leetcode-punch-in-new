import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import PropTypes from "prop-types";
import "./AddEventModal.css";
function AddEventModal({ isOpen, onClose, onEventAdded }) {
	const [title, setTitle] = useState("");
	const [start, setStart] = useState(new Date());
	// eslint-disable-next-line no-unused-vars
	const [end, setEnd] = useState(new Date());
	const onSubmit = (event) => {
		event.preventDefault();
		onEventAdded({
			title,
			start,
			end,
		});
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onClose}>
			<form role="search" onSubmit={onSubmit}>
				<input
					aria-label="Search"
					placeholder="Leetcode Question ID"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<div role="form">
					<label>Completion date</label>
					<Datetime
						aria-label="Search"
						value={start}
						onChange={(date) => setStart(date)}
					/>
				</div>
				<button>Add</button>
			</form>
		</Modal>
	);
}

AddEventModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onEventAdded: PropTypes.func.isRequired,
};

export default AddEventModal;
