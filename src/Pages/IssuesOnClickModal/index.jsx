import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Overlay, ModalContainer, CloseButton, FlexBox, FlexItems1, FlexItems2, IconButton, Container, Span } from "./style";
import styled, { css } from "styled-components";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SelectOptions from "../../components/Select";
import { Formik, Form, Field } from "formik";
import { getLocal, setLocal } from "../../Utils/localstorage";
import { useToast } from "../../components/Toast";
import { options, assigneesOptions, priorityOptions, reporterOptions } from "../../Constants/createIssue_InitialData";
import { validationSchema } from "../../Constants/issuesOnClickModal_InitialData";
import { ShareLinkIcon, TrashIcon, CloseIcon } from "../../components/Icons";
import Avatar from "../../components/Avatar";
import Label from "../../components/Label";

function IssuesOnClickModal() {
  const filteredIssues = () => {
    const filter_Issues = getLocal("items");
    const filter_Issue = filter_Issues.find((item) => item.id == params.items);
    // console.log("filter", filter_Issue);
    return filter_Issue;
  };

  const updateSpecificIssue = (data) => {
    const filter_Issues = getLocal("items") || [];
    const filter_Issue_Index = filter_Issues.findIndex((item) => item.id == params.items);

    if (filter_Issue_Index !== -1) {
      filter_Issues[filter_Issue_Index] = data; // Update the specific issue
      localStorage.setItem("items", JSON.stringify(filter_Issues));

      const event = new Event("localStorageUpdated");
      window.dispatchEvent(event);
    } else {
      // console.error(`Issue with id ${params.items} not found.`);
    }
  };

  const delete_Issues = () => {
    const filter_Issues = getLocal("items") || [];
    const filter_Issue_Index = filter_Issues.findIndex((item) => item.id == params.items);
    if (filter_Issue_Index !== -1) {
      filter_Issues.splice(filter_Issue_Index, 1);
      localStorage.setItem("items", JSON.stringify(filter_Issues));
      const event = new Event("localStorageUpdated");
      window.dispatchEvent(event);
      handleClose();
      showToast("Issue Deleted Successfully!");
    } else {
      console.error(`Issue with id ${params.items} not found.`);
    }
  };

  const navigate = useNavigate();
  const location = useLocation(); //can be used to share issues url
  // const fullUrl = window.location.href;
  const fullUrl = "https://subho30666.github.io/jira_clone";
  const params = useParams();
  const { showToast } = useToast();

  const [issueData, setIssueData] = useState(filteredIssues);
  const [isEditing, setIsEditing] = useState(false);

  function editingTextArea(value) {
    // console.log("clicked text Area", value);
    setIsEditing(value);
  }

  const CopyLinkButton = (link) => {
    navigator.clipboard.writeText(link);
  };

  const handleClose = () => {
    navigate("/project/board");
  };

  function handleSubmit(values, onSubmitProps) {
    const updatedIssue_Data = {
      id: values.id,
      title: values.title,
      containerId: values.containerId,
      type: values.type,
      description: values.description,
      status: values.status,
      priority: values.priority,
      reporterId: values.reporterId,
      assignees: values.assignees,
      originalEta: values.originalEta,
      timeTracking: values.timeTracking,
      display: values.display,
      lastUpdated: new Date().toISOString(), //update this
      comments: values.comments,
    };

    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      updateSpecificIssue(updatedIssue_Data);
      const r = getLocal("items");
      // console.log("create issue data", r);
      setIssueData(updatedIssue_Data);
      showToast("Issue Updated Successfully!");
      handleClose();
    }, 2000);
  }

  return (
    <>
      <Formik initialValues={issueData} onSubmit={handleSubmit} validationSchema={validationSchema} enableReinitialize>
        {(formik) => (
          <Overlay $show={true}>
            <ModalContainer onClick={() => editingTextArea(false)}>
              <FlexBox style={{ gap: "10px", margin: "0 0 30px 0" }}>
                <FlexItems1 style={{ flexGrow: "1", maxWidth: "200px" }}>
                  <Field component={SelectOptions} label={null} options={options} formName="type" error={true} style={style_options} icon={true} />
                </FlexItems1>

                <FlexItems2 style={{ flexDirection: "row" }}>
                  <IconButton
                    style={{ marginLeft: "auto" }}
                    onClick={(event) => {
                      event.stopPropagation();
                      CopyLinkButton(fullUrl);
                    }}
                  >
                    <ShareLinkIcon style={{ margin: "0 5px" }} />
                    Copy link
                  </IconButton>

                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      delete_Issues();
                    }}
                  >
                    <TrashIcon />
                  </IconButton>

                  <IconButton
                    type="submit"
                    onClick={(event) => {
                      event.stopPropagation();
                      formik.handleSubmit();
                    }}
                  >
                    {formik.isSubmitting === true ? "Saving Changes..." : <CloseIcon />}
                  </IconButton>
                </FlexItems2>
              </FlexBox>

              <FlexBox>
                <FlexItems1>
                  <Field component={Input} label={null} id="title" formName="title" type="text" error={true} style={style_input} background="white" border="2px solid white" />

                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      editingTextArea(true);
                    }}
                  >
                    <Field component={styledTextArea} label="Description" id="description" formName="description" toolbar={isEditing ? true : false} style={isEditing ? style_textArea1 : style_textArea} />
                  </div>
                </FlexItems1>

                <FlexItems2 style={{ width: "20%", minWidth: "200px" }}>
                  <Field component={SelectOptions} label="Assignees" options={assigneesOptions} formName="assignees" error={true} style={style_options} icon={true} />
                  <Field component={SelectOptions} label="Reporter" options={reporterOptions} formName="reporterId" error={true} style={style_options} icon={true} />
                  <Field component={SelectOptions} label="Priority" options={priorityOptions} formName="priority" error={true} style={style_options} icon={true} />
                  <Field component={Input} label="Original Estimate(Hours)" id="originalEta" formName="originalEta" type="number" error={true} style={{ width: "100%" }} icon={true} background="white" border="2px solid white" />
                </FlexItems2>
              </FlexBox>
              <FlexBox style={{ flexDirection: "column", gap: "10px" }}>
                <Label>Comments</Label>
                <FlexItems1 style={{ flexDirection: "row" }}>
                  <Avatar userName={formik.values.reporterId.value} width="38px" />
                  <Field component={Input} label={null} id="comments" formName="comments" type="text" error={true} background="white" border="2px solid white" />
                </FlexItems1>
                <FlexItems2></FlexItems2>
              </FlexBox>
            </ModalContainer>
          </Overlay>
        )}
      </Formik>
    </>
  );
  s;
}

export default IssuesOnClickModal;

const styledTextArea = styled(TextArea)`
  border: 0;
  outline: 0;
  border-radius: 0;
  .ql-container {
    background: red;
    border: 0;
    outline: 0;
  }
`;

const style_options = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    margin: "3px 0",
    backgroundColor: "white",
    height: "30px",
    font: "inherit",
    cursor: "pointer",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none", // This will hide the separator
  }),
  dropdownIndicator: () => ({
    display: "none", // This removes the down arrow
  }),
};

const style_textArea = {
  background: "white",
  border: "none",
  marginLeft: "20px",
};

const style_textArea1 = {
  background: "white",
  border: "1px solid black",
  marginLeft: "20px",
};

const style_input = {
  fontSize: "30px",
  fontWeight: "600",
};
