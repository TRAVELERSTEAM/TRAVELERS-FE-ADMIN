import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Floating labels</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Wrap a pair of <code>&lt;CFormInput&gt;</code> and <code>&lt;CFormLabel&gt;</code>{' '}
              elements in <code>CFormFloating</code> to enable floating labels with textual form
              fields. A <code>placeholder</code> is required on each <code>&lt;CFormInput&gt;</code>{' '}
              as our method of CSS-only floating labels uses the <code>:placeholder-shown</code>{' '}
              pseudo-element. Also note that the <code>&lt;CFormInput&gt;</code> must come first so
              we can utilize a sibling selector (e.g., <code>~</code>).
            </p>
            <DocsExample href="forms/floating-labels">
              <CFormFloating className="mb-3">
                <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
                <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
              </CFormFloating>
              <CFormFloating>
                <CFormInput type="password" id="floatingPassword" placeholder="Password" />
                <CFormLabel htmlFor="floatingPassword">Password</CFormLabel>
              </CFormFloating>
            </DocsExample>
            <p className="text-medium-emphasis small">
              When there&#39;s a <code>value</code> already defined, <code>&lt;CFormLabel&gt;</code>
              s will automatically adjust to their floated position.
            </p>
            <DocsExample href="forms/floating-labels">
              <CFormFloating>
                <CFormInput
                  type="email"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  defaultValue="test@example.com"
                />
                <CFormLabel htmlFor="floatingInputValue">Input with value</CFormLabel>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Floating labels</strong> <small>Textareas</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              By default, <code>&lt;CFormTextarea&gt;</code>s will be the same height as{' '}
              <code>&lt;CFormInput&gt;</code>s.
            </p>
            <DocsExample href="forms/floating-labels#textareas">
              <CFormFloating>
                <CFormTextarea
                  id="floatingTextarea"
                  placeholder="Leave a comment here"
                ></CFormTextarea>
                <CFormLabel htmlFor="floatingTextarea">Comments</CFormLabel>
              </CFormFloating>
            </DocsExample>
            <p className="text-medium-emphasis small">
              To set a custom height on your <code>&lt;CFormTextarea;&gt;</code>, do not use the{' '}
              <code>rows</code> attribute. Instead, set an explicit <code>height</code> (either
              inline or via custom CSS).
            </p>
            <DocsExample href="forms/floating-labels#textareas">
              <CFormFloating>
                <CFormTextarea
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: '100px' }}
                ></CFormTextarea>
                <CFormLabel htmlFor="floatingTextarea2">Comments</CFormLabel>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FloatingLabels
