import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/BreadCrumb";
import { Container, Flex } from "./style";
import { Formik, Form, Field } from "formik";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SelectOptions from "../../../components/Select";
import { ProjectData, options, validationSchema } from "../../../Constants/projectDetails_InitialData";
import { getLocal, setLocal } from "../../../Utils/localstorage";
import * as Yup from "yup";
import { useToast } from "../../../components/Toast";

function ProjectSettings() {
	const [initialData, setInitialData] = useState({});
	const { showToast } = useToast();

	useEffect(() => {
		const data = getLocal("project");
		// console.log("data exist", data);

		if (data) {
			setInitialData(data);
		}
	}, []);

	function handleSubmit(values, onSubmitProps) {
		const project_Data = {
			name: values.name,
			url: values.url,
			description: values.description,
			project: values.project,
		};
		// console.log("onsubmit", values);
		// console.log("props", onSubmitProps);

		setTimeout(() => {
			onSubmitProps.setSubmitting(false);
			onSubmitProps.resetForm();
			setLocal(project_Data, "project");
			// const r = getLocal("project");
			// console.log("r", r);
			setInitialData(project_Data);
			showToast("Changes Have Been Successfully Saved!");
		}, 2000);
	}

	return (
		<>
			<Formik initialValues={initialData} onSubmit={handleSubmit} validationSchema={validationSchema} enableReinitialize>
				{(formik) => (
					<Flex>
						<Container>
							<Breadcrumb paths={["Projects", "Board Name", "Project Details"]} />
							<h2>Project Details</h2>
							<Form style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
								<Field component={Input} label="Name" id="Name" formName="name" type="text" error={true} />
								<Field component={Input} label="Url" id="Url" formName="url" type="url" error={true} />
								<Field component={TextArea} label="Description" id="description" formName="description" />
								<Field component={SelectOptions} label="Project" options={options} formName="project" error={true} />

								<Button type="submit">{formik.isSubmitting === true ? "Submitting..." : "Submit"}</Button>
							</Form>
						</Container>
					</Flex>
				)}
			</Formik>
		</>
	);
}

export default ProjectSettings;
