import * as Yup from "yup";

export const ProjectData = {
	name: "gerg",
	url: "https://www.google.in/",
	description: "heelo my <strong>friends</strong>",
	project: { value: "business", label: "Business" },
};

export const options = [
	{ value: "business", label: "Business" },
	{ value: "software", label: "Software" },
	{ value: "marketing", label: "Marketing" },
];

// Define Yup schema for validation
export const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	url: Yup.string().url("Invalid URL format").required("URL is required"),
	project: Yup.mixed().required("Project selection is required"),
});
