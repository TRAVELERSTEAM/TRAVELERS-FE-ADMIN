import {
  CCard,
  CCol,
  CContainer,
  CFormCheck,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function UserEdit() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: () => {
      navigate('/user', { replace: true });
    },
  });

  const { handleSubmit, isSubmitting } = formik;

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCard className="p-4">
              <h1>회원 정보</h1>
              <p className="text-medium-emphasis">회원 정보입니다.</p>
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <CFormFloating className="mb-3">
                      <CFormInput
                        className="mb-3"
                        type="text"
                        id="floatingInputValue"
                        floatingLabel="이름"
                        defaultValue="짱구"
                        disabled
                      />
                      <CFormInput
                        className="mb-3"
                        type="email"
                        id="floatingInputValue"
                        floatingLabel="이메일"
                        defaultValue="zzanggu@example.com"
                        disabled
                      />
                      <CFormInput
                        className="mb-3"
                        type="text"
                        id="floatingInputValue"
                        floatingLabel="전화번호"
                        defaultValue="010-0000-0000"
                        disabled
                      />
                      <CFormInput
                        className="mb-3"
                        type="text"
                        id="floatingInputValue"
                        floatingLabel="나이"
                        defaultValue="5"
                        disabled
                      />
                      <CFormInput
                        className="mb-3"
                        type="text"
                        id="floatingInputValue"
                        floatingLabel="성별"
                        defaultValue="남자"
                        disabled
                      />
                      <div className="mb-3">
                        <CFormLabel className="me-3">등급</CFormLabel>

                        <CFormCheck
                          inline
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineCheckbox1"
                          value="option1"
                          label="일반 회원"
                        />
                        <CFormCheck
                          inline
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineCheckbox2"
                          value="option2"
                          label="관리자"
                        />
                      </div>
                      <div className="mb-3">
                        <CFormInput type="file" id="formFileDisabled" disabled />
                      </div>
                    </CFormFloating>

                    <LoadingButton
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                    >
                      회원 정보 수정
                    </LoadingButton>
                  </Stack>
                </Form>
              </FormikProvider>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default UserEdit;
