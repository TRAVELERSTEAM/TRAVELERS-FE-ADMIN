import React, { useState } from 'react'
import * as Yup from 'yup'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import { Form, FormikProvider, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { LoadingButton } from '@mui/lab'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('이메일 형식이 아닙니다').required('이메일을 적어주세요'),
    password: Yup.string().required('비밀번호를 적어주세요'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true })
    },
  })

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik

  const handleShowPassword = () => {
    setShowPassword((show) => !show)
  }

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <h1>로그인</h1>
                <p className="text-medium-emphasis">관리자 계정으로 로그인해 주세요.</p>
                <FormikProvider value={formik}>
                  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        autoComplete="username"
                        type="email"
                        label="이메일"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <TextField
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="비밀번호"
                        {...getFieldProps('password')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleShowPassword} edge="end">
                                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Stack>
                    <LoadingButton
                      size="large"
                      type="submit"
                      variant="contained"
                      className="mt-4"
                      loading={isSubmitting}
                      color="primary"
                    >
                      로그인
                    </LoadingButton>
                  </Form>
                </FormikProvider>
              </CCard>
              <CCard className="text-white bg-dark py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center d-flex align-items-center">
                  <div>
                    <h2>관리자 페이지</h2>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                      <p>관리자가 아니시라면 해당 사이트를 이용하실 수 없습니다.</p>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
