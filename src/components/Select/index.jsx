import React, { useEffect } from "react";
import Select from "react-select";
import Label from "../Label";
import { useField, useFormikContext } from "formik";
import FormError from "../FormError";
import ContentInfo from "../ContentInfo";
import { Option, SingleValue } from "./custom_icons";
import { components } from "react-select";

function SelectOptions({ label, options, formName, error = false, componentInfo = null, style = null, icon = false, ...rest }) {
	const [field, form, meta] = useField(formName);
	//Sorry For this UseField() You Can work Only with FormikContext() I was feeling lazy
	const formFields = useFormikContext();
	const { setFieldValue, setFieldTouched } = { ...formFields };

	const handleChange = (selectedOption) => {
		setFieldValue(formName, selectedOption);
		// console.log("changes");
	};
	// console.log(form);
	// console.log(meta);

	const handleBlur = () => {
		setFieldTouched(formName, true);
		// console.log("onBlur running");
	};
	return (
		<>
			{label ? <Label>{label}</Label> : null}
			<Select options={options} styles={style ? style : styled_Select} value={field.value} onChange={handleChange} onBlur={handleBlur} components={icon ? { Option, SingleValue } : null} />
			{form.touched && form.error && error ? <FormError visibility="visible">{form.error}</FormError> : componentInfo ? <ContentInfo visibility="visible">{componentInfo}</ContentInfo> : <FormError visibility="hidden">No error</FormError>}
		</>
	);
}

export default SelectOptions;

const styled_Select = {
	control: (baseStyles, state) => ({
		...baseStyles,
		border: " 2px solid #d0d0d0",
		margin: "3px 0",
		backgroundColor: "#f4f4f4",
		height: "30px",
		font: "inherit",
		cursor: "pointer",
	}),
};
