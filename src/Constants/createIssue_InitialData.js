import * as Yup from "yup";

export const createIssueData = {
	issueType: { value: "task", label: "Task" },
	shortSummary: "hehehehehe 2 lazy",
	description: "heelo my <strong>friends</strong>",
	reporter: null,
	assignees: { value: "Giggles Gloober", label: "Giggles Gloober" },
	priority: { value: "medium", label: "Medium" },
};

export const options = [
	{ value: "task", label: "Task" },
	{ value: "bug", label: "Bug" },
	{ value: "story", label: "Story" },
];

export const reporterOptions = [
	{ value: "Giggles Gloober", label: "Giggles Gloober" },
	{ value: "Bonkers Baron", label: "Bonkers Baron" },
	{ value: "Captain Quant", label: "Captain Quant" },
];

export const assigneesOptions = [
	{ value: "Giggles Gloober", label: "Giggles Gloober" },
	{ value: "Bonkers Baron", label: "Bonkers Baron" },
	{ value: "Captain Quant", label: "Captain Quant" },
];

export const priorityOptions = [
	{ value: "highest", label: "Highest" },
	{ value: "high", label: "High" },
	{ value: "medium", label: "Medium" },
	{ value: "low", label: "Low" },
	{ value: "lowest", label: "Lowest" },
];

// Define Yup schema for validation
// Define Yup schema for validation
export const validationSchema = Yup.object().shape({
	issueType: Yup.object().required("IssueType is required"),
	shortSummary: Yup.string().required("Summary is required"),
	reporter: Yup.object().required("Reporter is required"),
	assignees: Yup.object().required("Assignees is required"),
	priority: Yup.object().required("Priority is required"),
});



//Define Descriptiom to Show under the Component
export const issueTypeInfo = "Start typing to get a list of possible matches";
export const shortSummaryInfo = "Concisely summarize the issue in one or two sentences.";
export const descriptionInfo = "Describe the issue in as much detail as you'd like.";
export const priorityOptionsInfo = "Priority in relation to other issues.";


