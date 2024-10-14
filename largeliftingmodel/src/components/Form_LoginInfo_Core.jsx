import styles from "./Form.module.css";



const Form_LoginInfo_Core = ({loginInfo, setLoginInfo}) => {

	const changeElement = (name, value) => {
		setLoginInfo({...loginInfo,
			[name]: value,
		});
	};

	return (
		<>

			<div className={styles.row}>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					type="text"
					onChange={(e) => changeElement('firstName', e.target.value)}
					value={loginInfo.firstName}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					type="text"
					onChange={(e) => changeElement('lastName', e.target.value)}
					value={loginInfo.lastName}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					onChange={(e) => changeElement('email', e.target.value)}
					value={loginInfo.email}
				/>
			</div>
		</>
	);
}

export default Form_LoginInfo_Core;
