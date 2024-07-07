import React from "react";
import { Input as StyledInput } from "./style";
import Label from "../Label";
import { useField } from "formik";
import FormError from "../FormError";
import ContentInfo from "../ContentInfo";

function Input({ id, formName, type, label, componentInfo = null, error = false, background = null, border = null, style = null, ...rest }) {
	const [field, meta] = useField(formName);

	return (
		<>
			{label ? <Label htmlFor={id}>{label}</Label> : null}
			<StyledInput
				id={id}
				name={formName}
				type={type}
				onBlur={field.onBlur}
				onChange={field.onChange}
				value={field.value || ""} // Ensure value is always defined
				style={style}
				$background={background}
				$border={border}
			/>
			{meta.touched && meta.error && error ? <FormError visibility="visible">{meta.error}</FormError> : componentInfo ? <ContentInfo visibility="visible">{componentInfo}</ContentInfo> : <FormError visibility="hidden"></FormError>}
		</>
	);
}

export default Input;
