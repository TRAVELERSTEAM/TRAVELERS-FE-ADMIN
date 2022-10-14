import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

function UserEdit(): JSX.Element {
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
      <h1>회원 정보</h1>
      <p className="text-medium-emphasis">회원 정보입니다.</p>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <input
              className="mb-3"
              type="text"
              id="floatingInputValue"
              defaultValue="짱구"
              disabled
            />
            <input
              className="mb-3"
              type="email"
              id="floatingInputValue"
              defaultValue="zzanggu@example.com"
              disabled
            />
            <input
              className="mb-3"
              type="text"
              id="floatingInputValue"
              defaultValue="010-0000-0000"
              disabled
            />
            <input className="mb-3" type="text" id="floatingInputValue" defaultValue="5" disabled />
            <input
              className="mb-3"
              type="text"
              id="floatingInputValue"
              defaultValue="남자"
              disabled
            />
            <div className="mb-3">
              <label className="me-3">등급</label>

              <input type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" />
              <input type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" />
            </div>
            <div className="mb-3">
              <input type="file" id="formFileDisabled" disabled />
            </div>

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
    </div>
  );
}

export default UserEdit;
