import React from "react";
import { useHistory } from "react-router-dom";
import { BlogFormWrapper } from "./BlogForm.styles";
import { Container, Row, Col, Button, Form, Input, Label } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck,faUndo } from '@fortawesome/free-solid-svg-icons';

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {
  blogFormInputHandler,
  blogFormReset,
  blogFormSubmit,
} from "../../redux/actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const BlogForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const { formData, formLoader, formSubmittedSuccessfully } = useSelector(
    (state) => state.blogform
  );
  const { blogPublishDate, code, imageType, title, topic, shortdescription, readtimings } = formData;
  const Topics = [
    "Tech",
    "Productivity",
    "Web Performance",
    "Frontend",
    "Backend",
    "Clean Code",
    "Javascript",
    "React",
    "Web Design",
    "UI/UX",
    "Good to Know",
  ];
  const Images = [
    "frontend",
    "backend",
    "coding",
    "performance",
    "browser",
    "react"
  ];

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch(blogFormInputHandler({ key: name, value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(blogFormSubmit());
  };

  const previewBtnHandler = () => {
    const state = {
      title,
      code,
      imageType
    };
    history.push({ pathname: "/blog/preview", state });
  };
  return (
    <BlogFormWrapper>
      <Container className="conteiner-fluid">
        <div style={{display:"flex"}}>
            <h2 className="d-flex justify-content-center mb-5" style={{flex:"2"}}>
            Publish Blog Post
            </h2>
            {
                title && code && imageType && title && blogPublishDate && shortdescription &&(
                    <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        icon={faUndo}
                        onClick={() => dispatch(blogFormReset())}
                    />
                )
            }
        </div>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col sm="12" md="6" className="mb-3">
              <Label htmlFor="topic" className="mb-2">
                Blog Topic : &nbsp;
              </Label>
              <Input
                bsSize="lg"
                type="select"
                name="topic"
                defaultValue={Topics[0]}
                value={topic}
                onChange={handleChange}
              >
                {Topics.map((tpic) => (
                  <option key={tpic} value={tpic}>
                    {tpic}
                  </option>
                ))}
              </Input>
            </Col>
            <Col sm="12" md="6" className="mb-3">
              <Label htmlFor="date" className="mb-2">
                Publish Date : &nbsp;
              </Label>
              <Input
                type="date"
                bsSize="lg"
                name="blogPublishDate"
                value={blogPublishDate}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" className="mb-3">
              <Label htmlFor="title" className="mb-2">
                Blog Title : &nbsp;
              </Label>
              <Input
                type="text"
                bsSize="lg"
                placeholder={"Keep title in words"}
                value={title}
                name="title"
                onChange={handleChange}
              />
            </Col>
            <Col sm="12" md="6" className="mb-3">
              <Label className="mb-2">Choose Image Type : &nbsp;</Label>
              <Input
                bsSize="lg"
                type="select"
                name="imageType"
                defaultValue={Images[0]}
                value={imageType}
                onChange={handleChange}
              >
                {Images.map((image) => (
                  <option key={image} value={image}>
                    {image}
                  </option>
                ))}
              </Input>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="12" md="6">
            <Label htmlFor="shortDesc">Add Short Description</Label>
            <Input 
                type="text"
                bsSize="lg"
                placeholder={"Keep short description in one line sentences"}
                value={shortdescription}
                name="shortdescription"
                onChange={handleChange}
            >
            </Input>
            </Col>
            <Col sm="12" md="6">
            <Label htmlFor="readTime">Add Read timings in minutes</Label>
            <Input 
                type="text"
                bsSize="lg"
                placeholder={"Mention blog read timings in minutes"}
                value={readtimings}
                name="readtimings"
                onChange={handleChange}
            />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="12">
              <Label htmlFor="description" className="mb-3">
                Add Blog Description Code : &nbsp;
              </Label>
              <Editor
                value={code}
                name="code"
                onValueChange={(code) =>
                  dispatch(blogFormInputHandler({ key: "code", value: code }))
                }
                highlight={(code) => highlight(code, languages.js)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                  border: "1px solid #ccc",
                  minHeight: "200px",
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex justify-content-center">
              {title && code && imageType && title && blogPublishDate && (
                  <Button
                    onClick={previewBtnHandler}
                    className="mx-2"
                    color="primary"
                  >
                    Preview Blog
                  </Button>
              )}
              <Button color="success" type="submit"  disabled={
                  !!!(topic && code && imageType && title && blogPublishDate)
                }>
							{t("submit")} {formLoader ? <FontAwesomeIcon icon={faSpinner} spin/> : formSubmittedSuccessfully ? <FontAwesomeIcon icon={faCheck} />: null}
						</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </BlogFormWrapper>
  );
};

export default BlogForm;
