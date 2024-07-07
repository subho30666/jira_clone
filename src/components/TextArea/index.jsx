import React, { useEffect, useRef, useState } from "react";
import Label from "../Label";
import { EditorContainer } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useField, useFormikContext } from "formik";
import ContentInfo from "../ContentInfo";

function TextArea({ initialValue = "", id, label, formName, componentInfo = null, style, toolbar = true, ...rest }) {
	const [field, form, meta] = useField(formName);
	//Sorry For this UseField() You Can work Only with FormikContext() I was feeling lazy
	const formfields = useFormikContext();
	const { setFieldValue } = { ...formfields };
	// console.log(formfields);
	const [editorContent, setEditorContent] = useState(initialValue || field.value);

	const handleEditorChange = (content) => {
		setEditorContent(content);
		setFieldValue(formName, content);
	};
	// console.log("editor content", editorContent);
	// console.log("field", form);

	// Sync editor content with Formik field value if it changes externally
	//if you don't understand try to use the initalValue props
	useEffect(() => {
		if (field.value !== editorContent) {
			setEditorContent(field.value);
		}
	}, [field.value]);

	return (
		<>
			{label ? <Label htmlFor={id}>{label}</Label> : null}
			<EditorContainer id={id} style={style} $toolbar={toolbar}>
				<ReactQuill value={editorContent} onChange={handleEditorChange} modules={modules} formats={formats} theme="snow" className="editor-container" />
			</EditorContainer>
			{componentInfo ? <ContentInfo visibility="visible">{componentInfo}</ContentInfo> : null}
		</>
	);
}

export default TextArea;

const modules = {
	toolbar: [[{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], [{ color: [] }, { background: [] }], ["link", "image"], ["clean"]],
	clipboard: {
		matchVisual: false,
	},
};

const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "color", "background"];
