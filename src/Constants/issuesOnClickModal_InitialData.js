import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	type: Yup.object().required("IssueType is required"),
	title: Yup.string().required("Title is required"),
	reporterId: Yup.object().required("Reporter is required"),
	assignees: Yup.object().required("Assignees is required"),
	priority: Yup.object().required("Priority is required"),
});
