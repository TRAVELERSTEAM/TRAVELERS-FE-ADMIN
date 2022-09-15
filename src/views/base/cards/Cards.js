import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/react.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Cards are built with as little markup and styles as possible but still manage to
              deliver a bunch of control and customization. Built with flexbox, they offer easy
              alignment and mix well with other CoreUI components. Cards have no top, left, and
              right margins by default, so use{' '}
              <a href="https://coreui.io/docs/utilities/spacing">spacing utilities</a> as needed.
              They have no fixed width to start, so they&#39;ll fill the full width of its parent.
            </p>
            <p className="text-medium-emphasis small">
              Below is an example of a basic card with mixed content and a fixed width. Cards have
              no fixed width to start, so they&#39;ll naturally fill the full width of its parent
              element.
            </p>
            <DocsExample href="components/card">
              <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card&#39;s content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Images</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              <code>.card-img-top</code> places a picture to the top of the card. With{' '}
              <code>.card-text</code>, text can be added to the card. Text within{' '}
              <code>.card-text</code> can additionally be styled with the regular HTML tags.
            </p>
            <DocsExample href="components/card/#images">
              <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card&#39;s content.
                  </CCardText>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Cards assume no specific <code>width</code> to start, so they&#39;ll be 100% wide
              unless otherwise stated. You can adjust this as required with custom CSS, grid
              classes, grid Sass mixins, or services.
            </p>
            <h3>Using grid markup</h3>
            <p className="text-medium-emphasis small">
              Using the grid, wrap cards in columns and rows as needed.
            </p>
            <DocsExample href="components/card/#sizing">
              <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Special title treatment</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CCardText>
                      <CButton href="#">Go somewhere</CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Special title treatment</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CCardText>
                      <CButton href="#">Go somewhere</CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Card groups</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              When using card groups with footers, their content will automatically line up.
            </p>
            <DocsExample href="components/card/#card-groups">
              <CCardGroup>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
              </CCardGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
