// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import styles from "./Form.module.css";

const LoginInfo_Viewer = (props) => {

	return (
		<div>
			<div className={styles.form_description}>
				Here are your Login Details
			</div>
			<div className={styles.row}>
				<div className={styles.container}>
					<label> First Name </label>
					<h2 className={styles.h2}> {props.loginInfo.firstName} </h2>
				</div>
				<div className={styles.container}>
					<label> Last Name </label>
					<h2 className={styles.h2}> {props.loginInfo.lastName} </h2>
				</div>
				<div className={styles.container}>
					<label> Date of Birth </label>
					<h2 className={styles.h2}> {props.loginInfo.dob} </h2>
				</div>
				<div className={styles.container}>
					<label> Email </label>
					<h2 className={styles.h2}> {props.loginInfo.email} </h2>
				</div>
				<div className={styles.container}>
					<label> Password </label>
					<h2 className={styles.h2}> {props.loginInfo.password} </h2>
				</div>
			</div>
		</div>
	);
}

export default LoginInfo_Viewer;