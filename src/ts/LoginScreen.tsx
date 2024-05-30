import styled from "styled-components";
import {Button} from "./components/Button";

export const LoginScreen = () => {
	const onLogInClick = () => {
		console.log("Hello");
	};

	return (
		<LoginScreenStyled>
			<input name="email" type="email"></input>
			<input name="password" type="password"></input>
			<Button label="Log In" onClick={onLogInClick} />
		</LoginScreenStyled>
		
	);
};

const LoginScreenStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 8px;
`;