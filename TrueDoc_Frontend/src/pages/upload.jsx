import React, { useState } from 'react';
import { Button, Image, Select, message, Tooltip, Badge, Card, Progress } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import {
  InboxOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  CloseCircleOutlined,
  LockOutlined,
  EyeOutlined,
  // ShieldOutlined
} from '@ant-design/icons';

const { Option } = Select;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadPage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Aadhar');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(0);

  // Custom theme colors
  const themeColors = {
    primary: "#425e6e",
    secondary: "#dde8ed",
    tertiary: "#f2f6f7",
    success: "#4caf50",
    successLight: "#edf7ed"
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length === 0) {
      setVerificationComplete(false);
      setVerificationProgress(0);
    }
  };

  const getFileIcon = (fileName) => {
    if (!fileName) return <FileTextOutlined />;
    const extension = fileName.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
      return <FileImageOutlined style={{ color: themeColors.primary }} />;
    } else if (extension === 'pdf') {
      return <FilePdfOutlined style={{ color: themeColors.primary }} />;
    }
    return <FileTextOutlined style={{ color: themeColors.primary }} />;
  };

  const handleVerify = async () => {
    if (fileList.length === 0) {
      message.error("Please upload a file before verifying.");
      return;
    }
    setIsVerifying(true);

    const formData = new FormData();
    formData.append("card_type", selectedOption);
    formData.append("file", fileList[0].originFileObj);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/document/verify-document", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Required objects not detected in the image.");
      }
      setVerificationComplete(true)
      message.success("Document verified successfully!");
    } catch (error) {
      console.log("Error verifying document: ", error.message);
      message.error("Required objects not detected in the image. Re-upload");
    } finally {
      setIsVerifying(false);
    }
  };



  const documentTypes = [
    { value: 'Aadhar', label: 'Aadhar Card', description: 'Indian national ID' },
    { value: 'PAN', label: 'PAN Card', description: 'Tax identification' },
    { value: 'Driving Licence', label: 'Driving Licence', description: 'Vehicle license' },
  ];

  const resetForm = () => {
    setFileList([]);
    setVerificationComplete(false);
    setVerificationProgress(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: themeColors.tertiary }}>
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 text-white" style={{
          background: `linear-gradient(to right, ${themeColors.primary}, ${themeColors.secondary})`,
          color: "#fff"
        }}>
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold">Document Verification Portal</h2>
          </div>
          <p className="text-center mt-2">
            Secure, fast, and reliable document authentication
          </p>
        </div>

        <div className="p-6 md:p-8">
          {verificationComplete ? (
            // Success View
            <div className="py-6">
              <div className="text-center mb-8">
                <CheckCircleOutlined className="text-6xl mb-4" style={{ color: themeColors.success }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: themeColors.primary }}>Verification Complete</h3>
                <p className="text-gray-600">Your {selectedOption} document has been successfully verified.</p>
              </div>

              <Card className="mb-6" style={{ backgroundColor: themeColors.tertiary, borderColor: themeColors.secondary }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium " style={{ color: themeColors.primary }}>Document Type:</span>
                  <span className='text-primary'>{selectedOption}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium" style={{ color: themeColors.primary }}>Status:</span>
                  <span className="flex items-center text-primary">
                    <CheckCircleOutlined className="mr-1" style={{ color: themeColors.success }} />
                    Verified
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium" style={{ color: themeColors.primary }}>File Name:</span>
                  <span className="flex items-center text-primary">
                    {fileList.length > 0 && getFileIcon(fileList[0].name)}
                    <span className="ml-1">{fileList.length > 0 ? fileList[0].name : 'N/A'}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium" style={{ color: themeColors.primary }}>Verification Date:</span>
                  <span className='text-primary'>{new Date().toLocaleDateString()}</span>
                </div>
              </Card>

              <div className="flex justify-center">
                <button
                  onClick={resetForm}
                  className="px-4 py-2 border border-primary text-primary rounded-md text-lg font-medium transition-all duration-200 hover:bg-primary hover:text-white"
                >
                  Verify Another Document
                </button>
              </div>
            </div>
          ) : (
            // Upload and Verification View
            <>
              <div className="flex flex-col md:flex-row md:space-x-6">
                {/* Left Column - Document Selection and Upload */}
                <div className="flex-1">
                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center" style={{ color: themeColors.primary }}>
                      Document Type
                      <Tooltip title="Choose the type of document you wish to verify">
                        <InfoCircleOutlined className="ml-2 text-gray-400" />
                      </Tooltip>
                    </label>
                    <Select
                      className="w-full"
                      size="large"
                      placeholder="Select document type"
                      value={selectedOption}
                      onChange={(value) => setSelectedOption(value)}
                      optionLabelProp="label"
                      dropdownStyle={{
                        maxHeight: 400,
                        backgroundColor: themeColors.tertiary
                      }}
                      style={{ borderColor: themeColors.primary }}
                    >
                      {documentTypes.map(doc => (
                        <Option key={doc.value} value={doc.value} label={doc.label}>
                          <div className="flex items-center">
                            <FileTextOutlined className="mr-2" style={{ color: themeColors.primary }} />
                            <span className="font-medium" style={{ color: themeColors.primary }}>{doc.label}</span>
                            <span style={{ color: "#888", marginLeft: "8px", fontSize: "0.75rem" }}>
                              ({doc.description})
                            </span>
                          </div>
                        </Option>
                      ))}
                    </Select>
                  </div>

                  {/* Upload Area */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2 items-center" style={{ color: themeColors.primary }}>
                      Upload Document
                      <Badge
                        count={fileList.length}
                        showZero
                        style={{ backgroundColor: fileList.length > 0 ? themeColors.primary : "#d9d9d9" }}
                        className="ml-2"
                      />
                    </label>
                    <Dragger
                      listType="picture"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                      accept=".png,.jpeg,.jpg,.pdf"
                      beforeUpload={() => false}
                      maxCount={1}
                      className={`border-2 border-dashed rounded-lg transition-all duration-300 ${fileList.length > 0
                        ? 'border-green-300 bg-gray-50'
                        : `border-gray-300 hover:border-gray-400`
                        }`}
                      style={{
                        backgroundColor: fileList.length > 0 ? themeColors.tertiary : "white",
                        borderColor: fileList.length > 0 ? themeColors.primary : "#d9d9d9"
                      }}
                    >
                      <div className="p-6 text-center">
                        <p className="ant-upload-drag-icon mb-4">
                          {fileList.length > 0
                            ? <CheckCircleOutlined className="text-4xl" style={{ color: themeColors.success }} />
                            : <InboxOutlined className="text-4xl" style={{ color: themeColors.primary }} />
                          }
                        </p>
                        <p className="font-medium text-lg mb-2" style={{ color: themeColors.primary }}>
                          {fileList.length > 0 ? 'Document ready for verification' : 'Drag & drop your document'}
                        </p>
                        <p className="text-gray-500">
                          {fileList.length > 0
                            ? <span className="flex items-center justify-center">
                              {getFileIcon(fileList[0].name)}
                              <span className="ml-2">{fileList[0].name}</span>
                            </span>
                            : <span>or <span style={{ color: themeColors.primary }}>click to browse</span> (PDF, JPG, PNG up to 5MB)</span>
                          }
                        </p>
                      </div>
                    </Dragger>

                    {fileList.length > 0 && (
                      <div className="mt-3 flex justify-between">
                        <button
                          onClick={() => handlePreview(fileList[0])}
                          className="text-sm flex items-center"
                          style={{ color: themeColors.primary }}
                        >
                          <EyeOutlined className="mr-1" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => setFileList([])}
                          className="text-sm text-red-500 hover:text-red-700 flex items-center"
                        >
                          <CloseCircleOutlined className="mr-1" />
                          <span>Remove file</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Requirements and Verification Info */}
                <div className="flex-1 mt-6 md:mt-0">
                  {/* Verification Status */}
                  {isVerifying && (
                    <Card className="mb-6" style={{ backgroundColor: themeColors.tertiary, borderColor: themeColors.secondary }}>
                      <h4 className="font-medium mb-4" style={{ color: themeColors.primary }}>Verification in Progress</h4>
                      <Progress
                        percent={verificationProgress}
                        status="active"
                        strokeColor={themeColors.primary}
                      />
                      <div className="mt-4 text-sm text-gray-600">
                        <div className="flex items-start mb-2">
                          <CheckCircleOutlined className="mr-2 mt-1" style={{ color: verificationProgress >= 30 ? themeColors.success : "#d9d9d9" }} />
                          <div>
                            <div className="font-medium">Document Scanning</div>
                            <div className="text-xs text-gray-500">Analyzing document structure</div>
                          </div>
                        </div>
                        <div className="flex items-start mb-2">
                          <CheckCircleOutlined className="mr-2 mt-1" style={{ color: verificationProgress >= 60 ? themeColors.success : "#d9d9d9" }} />
                          <div>
                            <div className="font-medium">Data Extraction</div>
                            <div className="text-xs text-gray-500">Reading information from document</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircleOutlined className="mr-2 mt-1" style={{ color: verificationProgress >= 90 ? themeColors.success : "#d9d9d9" }} />
                          <div>
                            <div className="font-medium">Validation</div>
                            <div className="text-xs text-gray-500">Verifying document authenticity</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Document Requirements */}
                  <Card
                    title={
                      <span className="font-medium flex items-center" style={{ color: themeColors.primary }}>
                        <InfoCircleOutlined className="mr-2" />
                        Document Requirements
                      </span>
                    }
                    style={{
                      backgroundColor: themeColors.tertiary,
                      borderColor: themeColors.secondary
                    }}
                    headStyle={{
                      backgroundColor: themeColors.secondary,
                      borderBottom: `1px solid ${themeColors.secondary}`
                    }}
                  >
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <CheckCircleOutlined className="mr-2 mt-1" style={{ color: themeColors.primary }} />
                        Ensure the document is clearly visible and not blurry
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="mr-2 mt-1" style={{ color: themeColors.primary }} />
                        All four corners must be visible in the image
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="mr-2 mt-1" style={{ color: themeColors.primary }} />
                        File size should not exceed 5MB
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="mr-2 mt-1" style={{ color: themeColors.primary }} />
                        Only JPG, PNG, and PDF formats are accepted
                      </li>
                    </ul>
                  </Card>

                  {/* Security Info */}
                  <Card
                    className="mt-4"
                    style={{
                      backgroundColor: themeColors.successLight,
                      borderColor: themeColors.success,
                      borderLeftWidth: "4px"
                    }}
                    bodyStyle={{ padding: "12px" }}
                  >
                    <div className="flex items-center">
                      {/* <ShieldOutlined style={{ color: themeColors.success, fontSize: "24px" }} /> */}
                      <div className="ml-3">
                        <h4 className="font-medium" style={{ color: themeColors.primary }}>Secure Processing</h4>
                        <p className="text-xs text-gray-600">Your documents are processed with end-to-end encryption</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Verify Button */}
              <Button
                type="primary"
                size="large"
                block
                loading={isVerifying}
                onClick={handleVerify}
                className="h-12 font-semibold mt-6"
                disabled={fileList.length === 0}
                style={{
                  backgroundColor: themeColors.primary,
                  borderColor: themeColors.primary
                }}
              >
                Verify Document
              </Button>
            </>
          )}
        </div>
      </div>

      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default UploadPage;