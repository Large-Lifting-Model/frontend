import styles from "./Form.module.css";
import { useEffect } from "react";
import React from "react";


const FormLoginInfoCore = ({profile, setProfile}) => {

	useEffect(() => {
		//console.info(JSON.stringify(profile))
    }, []);

	const changeElement = (name, value) => {
		setProfile({...profile,
			[name]: value,
		});
	};

	return (
		<>

			<div className={styles.row}>
				<label htmlFor="first_name">First Name</label>
				<input
					id="first_name"
					type="text"
					onChange={(e) => changeElement('first_name', e.target.value)}
					value={profile.first_name}
					data-testid='profileUserFirstNameForm' 
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="last_name">Last Name</label>
				<input
					id="last_name"
					type="text"
					onChange={(e) => changeElement('last_name', e.target.value)}
					value={profile.last_name}
					data-testid='profileUserLastNameForm' 
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					onChange={(e) => changeElement('email', e.target.value)}
					value={profile.email}
					data-testid='profileUserEmailForm' 
				/>
			</div>
		</>
	);
}

export default FormLoginInfoCore;