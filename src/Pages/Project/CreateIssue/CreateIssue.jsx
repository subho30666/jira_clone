import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SelectOptions from "../../../components/Select";
import Modal from "../../../components/Modal";
import { createIssueData, options, reporterOptions, assigneesOptions, priorityOptions, validationSchema, issueTypeInfo, shortSummaryInfo, descriptionInfo, priorityOptionsInfo } from "../../../Constants/createIssue_InitialData";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { getLocal, setLocal } from "../../../Utils/localstorage";
import { nanoid } from "nanoid";
import { useToast } from "../../../components/Toast";

function CreateIssue() {
	let [searchParams, setSearchParams] = useSearchParams();
	const [issueData, setIssueData] = useState(createIssueData);
	// const [showToast, setShowToast] = useState(true);
	const { showToast } = useToast();

	useEffect(() => {
		const data = getLocal("items");
		// console.log("data exist", data);

		if (data) {
			setIssueData(data);
		}
	}, []);

	function handleSubmit(values, onSubmitProps) {
		const createIssue_Data = {
			id: nanoid(),
			title: values.shortSummary,
			containerId: "backlog",
			type: values.issueType,
			description: values.description,
			status: { value: "backlog", label: "Backlog" },
			priority: values.priority,
			reporterId: values.reporter,
			assignees: values.assignees,
			originalEta: 2,
			timeTracking: { initial: null, final: null },
			display: true,
			lastUpdated: null,
			comments: "Click To Comment",
		};

		// console.log("onsubmit", values);
		// console.log("props", onSubmitProps);

		setTimeout(() => {
			onSubmitProps.setSubmitting(false);
			onSubmitProps.resetForm();
			setLocal(createIssue_Data, "items");
			// const r = getLocal("items");
			// console.log("create issue data", r);
			// setInitialData(createIssue_Data);
			setIssueData(createIssue_Data);
			showToast("Issue Created Successfully!");
			closeModal();
		}, 2000);
	}

	function closeModal() {
		setSearchParams({});
	}

	return (
		<>
			<Formik initialValues={createIssueData} onSubmit={handleSubmit} validationSchema={validationSchema}>
				{(formik) => (
					<Modal>
						<Flex>
							<Container>
								<h2>Create Issue</h2>
								<Form style={{ display: "flex", flexDirection: "column", margin: "20px 0 100px 0", width: "600px", gap: "2px" }}>
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
										<Button
											style={{ background: "grey", margin: "0", height: "30px" }}
											onClick={() => {
												formik.resetForm();
												closeModal();
											}}
										>
											Cancel
										</Button>
									</Flex1>
									{/* {showToast && <Toast message="Issue Created successfully!" />} */}
								</Form>
							</Container>
						</Flex>
					</Modal>
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
	min-width: 700px;
	/* height: 100%; */
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
