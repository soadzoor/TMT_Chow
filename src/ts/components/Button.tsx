import styled from "styled-components";

interface IProps {
	label: string;
	onClick: () => void;
}

export const Button = (props: IProps) => {
	return <ButtonStyled onClick={props.onClick}>{props.label}</ButtonStyled>;
}

const ButtonStyled = styled.div`
	cursor: pointer;
	border: 1px solid black;
	background-color: orange;
	padding: 4px;
`;