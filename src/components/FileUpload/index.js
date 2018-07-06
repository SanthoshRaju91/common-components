import React, { Component } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import Button from "../Button";
import Icon from "../Icon";
import { fonts, color } from "../../theme";

const FileUploadContainer = styled.div`
  .fa.disabled,
  .fa[disabled],
  .disabled > .fa,
  [disabled] > .fa {
    color: lightgrey;
    /*or*/
    opacity: 0.4;
  }

  .margin-right-10 {
    margin-right: 10px;
    cursor: pointer;
  }

  .dropbox {
    width: 200px;
    height: 150px;
    border-radius: 4px;
    border: 1px solid ${color.base.line};
  }

  .preview-image {
    height: 120px;
    width: 120px;
    margin: 10px;
    position: relative;
  }

  .image-wrap {
    position: relative;
  }

  .image {
    height: 100%;
    width: 100%;
  }

  .button-style {
    margin-top: 7%;
  }
`;

const FileUploadContentWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: ${fonts.small};
  }

  .file-upload-icon {
    font-size: 2em;
  }

  &:hover {
    border-color: ${color.input.borderHover};
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: auto;
  border: 1px solid ${color.input.borderHover};
  border-radius: 5px;
  padding: 20px;
`;

const PreviewBox = styled.div`
  width: 100px;
  height: 75px;
  position: relative;
  border: 1px solid ${color.base.line};
  display: inline-block;
  margin-right: 20px;
  z-index: 999;
  box-shadow: 0px 0px 5px ${color.base.line};
`;

const Content = styled.div`
  max-width: 90%;
  
  p {
    font-size: ${fonts.small}
    text-align: center;
  }

  .close {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    right: -1em;
    top: -1em;
    background: linear-gradient(45deg, #ffe500, #ffc700);
    color: ${color.base.white};

    .icon {
      padding: 4px 5px;
    }
  }
`;

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: "",
      isPanelOpen: false,
      isDragOver: false,
      files: []
    };
  }

  onDrop = files => {
    this.setState(
      {
        files: this.state.files.concat(files)
      },
      () => this.props.fileDropped(this.state.files)
    );
  };

  removeFile = fileObj => {
    const { files } = this.state;
    files.splice(files.indexOf(fileObj), 1);
    this.setState(
      {
        files
      },
      () => this.props.fileRemoved(files)
    );
  };

  render() {
    const { files } = this.state;
    const { applicationType } = this.props;

    return (
      <FileUploadContainer className="file-upload">
        <div>
          <Dropzone
            accept={applicationType}
            className="dropbox"
            onDrop={this.onDrop}
          >
            <FileUploadContentWrapper>
              <p>
                Try dropping some files here, or click to select files to upload
              </p>
              <Icon name="upload file-upload-icon" aria-hidden="true" />
            </FileUploadContentWrapper>
          </Dropzone>
        </div>
        <br />
        {files.length > 0 && (
          <PreviewContainer>
            {files.map((file, index) => {
              return (
                <PreviewBox key={index}>
                  <Content>
                    <p>{file.name}</p>
                    <div
                      className="close"
                      onClick={() => this.removeFile(file)}
                    >
                      <Icon name="times icon" aria-hidden="true" />
                    </div>
                  </Content>
                </PreviewBox>
              );
            })}
          </PreviewContainer>
        )}
      </FileUploadContainer>
    );
  }
}

FileUpload.propTypes = {
  applicationType: PropTypes.string,
  fileRemoved: PropTypes.func,
  fileDropped: PropTypes.func
};

FileUpload.defaultProps = {
  applicationType: "",
  fileDropped: null,
  fileRemoved: null
};

export default FileUpload;
