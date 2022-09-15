import React, { useState } from 'react'
import * as Yup from 'yup'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import { Form, FormikProvider, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'
import { LoadingButton } from '@mui/lab'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
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
                <h1>Login</h1>
                <p className="text-medium-emphasis">Sign In to your account</p>
                <FormikProvider value={formik}>
                  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <TextField
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
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
                      Login
                    </LoadingButton>
                  </Form>
                </FormikProvider>
              </CCard>
              <CCard className="text-white bg-dark py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>SNS 로그인</h2>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                      <CButton className="google sns">
                        <AiFillGoogleCircle />
                        <span>Google 로그인</span>
                      </CButton>
                      <CButton className="kakao sns">
                        <RiKakaoTalkFill />
                        <span>Kakao 로그인</span>
                      </CButton>
                      <CButton className="naver sns">
                        <SiNaver />
                        <span>Naver 로그인</span>
                      </CButton>
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
