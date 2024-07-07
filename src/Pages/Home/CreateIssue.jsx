import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SelectOptions from "../../components/Select";
import { createIssueData, options, reporterOptions, assigneesOptions, priorityOptions, validationSchema, issueTypeInfo, shortSummaryInfo, descriptionInfo, priorityOptionsInfo } from "../../Constants/createIssue_InitialData";
import styled from "styled-components";

function CreateIssue() {
	function handleSubmit(values, onSubmitProps) {
		console.log("onsubmit", values);
		console.log("props", onSubmitProps);
		setTimeout(() => {
			onSubmitProps.setSubmitting(false);
			onSubmitProps.resetForm();
		}, 2000);
	}



	return (
		<>
			<Formik initialValues={createIssueData} onSubmit={handleSubmit} validationSchema={validationSchema}>
				{(formik) => (
					<Flex>
						<Container>
							<h2>Create Issue</h2>
							<Form style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginBottom: "150px", width: "600px" }}>
								<Field component={SelectOptions} label="Issue Type" options={options} formName="issueType" error={true} componentInfo={issueTypeInfo} />
								<Divider />
								<Field component={Input} label="Short Summary" id="Name" formName="shortSummary" type="text" error={true} componentInfo={shortSummaryInfo} />
								<Field component={TextArea} label="Description" id="description" formName="description" componentInfo={descriptionInfo} />

								<Field component={SelectOptions} label="Reporter" options={reporterOptions} formName="reporter" error={true} />
								<Field component={SelectOptions} label="Assignees" options={assigneesOptions} formName="assignees" error={true} />
								<Field component={SelectOptions} label="Priority" options={priorityOptions} formName="priority" error={true} componentInfo={priorityOptionsInfo} />
								<Flex1>
									<Button type="submit" style={{ width: "120px", margin: "0", height: "30px" }}>
										{formik.isSubmitting === true ? "Creating..." : "Create Issue"}
									</Button>
									<Button style={{ background: "grey", margin: "0", height: "30px" }} onClick={closeModal}>Cancel</Button>
								</Flex1>
							</Form>
						</Container>
					</Flex>
				)}
			</Formik>
		</>
	);
}

export default CreateIssue;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: auto;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;
const Flex1 = styled.div`
	display: flex;
	flex-direction: row;
	overflow: auto;
	justify-content: flex-end;
	gap: 20px;
	margin: 20px 0 0 0;
`;

const Divider = styled.hr`
	width: 100%;
	margin: 20px auto;
	border: 1px solid #d8d1d1;
	border-radius: 5px;
`;
